/*
 * Nodely ESP32 Firmware v2.1.0
 * 
 * IoT Relay Controller with:
 * - WiFi Manager (captive portal for setup, NVS persistent storage)
 * - MQTT instant control (HiveMQ Cloud, TLS)
 * - HTTP fallback polling (every 30s)
 * - Device registration & OTA firmware check
 * - LOCK/UNLOCK support
 * - Remote WiFi update via MQTT
 * - Active LOW relay logic (LOW = ON, HIGH = OFF)
 * 
 * Board: ESP32 Dev Module
 * Required Libraries:
 *   - WiFi (built-in)
 *   - WiFiClientSecure (built-in)
 *   - HTTPClient (built-in)
 *   - WebServer (built-in)
 *   - Preferences (built-in)
 *   - DNSServer (built-in)
 *   - PubSubClient by Nick O'Leary (install via Library Manager)
 *   - ArduinoJson by Benoit Blanchon (install via Library Manager)
 */

#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>
#include <WebServer.h>
#include <DNSServer.h>
#include <Preferences.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <Update.h>

// ============================================================
// CONFIGURATION — Update these values for your deployment
// ============================================================

// Supabase Edge Functions base URL
#define SUPABASE_URL      "https://sdmmfenrolifdnbdcsdk.supabase.co"
#define FUNCTIONS_URL     SUPABASE_URL "/functions/v1"

// Supabase Publishable Key (used for Authorization + apikey headers on Edge Functions)
#define SUPABASE_ANON_KEY "sb_publishable_dBQy_-aKXXE4-6UF8v-yYw_Zw0yjviu"

// Device API Key (must match DEVICE_API_KEY secret in supabase Cloud)
#define DEVICE_API_KEY    "9f3c7a1e5b8d4c2a6f0e9d1b3c7a5e2f"

// MQTT (HiveMQ Cloud)
#define MQTT_HOST         "022dbd443000406096a82f256d40a1e3.s1.eu.hivemq.cloud"
#define MQTT_PORT         8883
#define MQTT_USER         "nodely"
#define MQTT_PASS         "Alokraj5145n"

// Hardware
#define RELAY_PIN         26     // GPIO for relay (Active LOW)
#define RESET_PIN         0     // GPIO0 (BOOT button) — hold 5s to reset WiFi

// WiFi AP Configuration
#define AP_SSID           "Nodely-Setup"
#define AP_PASSWORD       ""    // Open AP for setup (empty = open)
#define SETUP_TIMEOUT     300000 // 5 min setup portal timeout

// Timing
#define HTTP_POLL_INTERVAL      30000   // 30s HTTP fallback poll
#define MQTT_RECONNECT_DELAY    5000    // 5s between MQTT reconnect attempts
#define FIRMWARE_CHECK_INTERVAL 3600000 // 1hr firmware check
#define WIFI_RECONNECT_DELAY    10000   // 10s WiFi reconnect
#define WIFI_CONNECT_TIMEOUT    15000   // 15s WiFi connect timeout
#define RESET_BUTTON_HOLD_MS    5000    // Hold 5s to trigger WiFi reset

// Firmware version
#define FIRMWARE_VERSION  "2.1.0"

// ============================================================
// GLOBALS
// ============================================================

WiFiClientSecure mqttWifiClient;
PubSubClient mqttClient(mqttWifiClient);
Preferences preferences;
WebServer setupServer(80);
DNSServer dnsServer;

String deviceUuid = "";
String hardwareId = "";
String mqttTopic = "";

// WiFi credentials (loaded from NVS)
String savedSSID = "";
String savedPassword = "";

bool relayState = false;
bool isLocked = false;
bool isRegistered = false;
bool inSetupMode = false;

unsigned long lastHttpPoll = 0;
unsigned long lastMqttReconnect = 0;
unsigned long lastFirmwareCheck = 0;
unsigned long lastWifiCheck = 0;
unsigned long resetButtonStart = 0;
bool resetButtonPressed = false;

// ============================================================
// CAPTIVE PORTAL HTML
// ============================================================

const char SETUP_HTML[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nodely WiFi Setup</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0a0a0a; color: #e5e5e5;
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh; padding: 20px;
    }
    .card {
      background: #171717; border: 1px solid #2a2a2a;
      border-radius: 16px; padding: 32px; width: 100%;
      max-width: 400px; box-shadow: 0 25px 50px rgba(0,0,0,0.5);
    }
    .logo { text-align: center; margin-bottom: 24px; }
    .logo h1 { font-size: 24px; color: #22c55e; letter-spacing: 2px; }
    .logo p { font-size: 13px; color: #888; margin-top: 4px; }
    .field { margin-bottom: 16px; }
    label { display: block; font-size: 13px; color: #aaa; margin-bottom: 6px; }
    input {
      width: 100%; padding: 12px 14px; background: #0a0a0a;
      border: 1px solid #333; border-radius: 8px; color: #fff;
      font-size: 15px; outline: none; transition: border-color 0.2s;
    }
    input:focus { border-color: #22c55e; }
    button {
      width: 100%; padding: 14px; background: #22c55e;
      border: none; border-radius: 8px; color: #000;
      font-size: 15px; font-weight: 600; cursor: pointer;
      margin-top: 8px; transition: background 0.2s;
    }
    button:hover { background: #16a34a; }
    .info {
      text-align: center; font-size: 12px; color: #666;
      margin-top: 16px; line-height: 1.5;
    }
    .scan-btn {
      background: transparent; border: 1px solid #333; color: #aaa;
      padding: 10px; font-size: 13px; margin-bottom: 16px;
    }
    .scan-btn:hover { border-color: #22c55e; color: #22c55e; }
    .networks { margin-bottom: 16px; }
    .net-item {
      padding: 10px 14px; background: #0a0a0a; border: 1px solid #333;
      border-radius: 8px; margin-bottom: 6px; cursor: pointer;
      display: flex; justify-content: space-between; align-items: center;
      transition: border-color 0.2s; font-size: 14px;
    }
    .net-item:hover { border-color: #22c55e; }
    .rssi { font-size: 11px; color: #666; }
    .success { text-align: center; }
    .success h2 { color: #22c55e; margin-bottom: 8px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">
      <h1>NODELY</h1>
      <p>WiFi Setup</p>
    </div>
    <div id="content">
      <button class="scan-btn" onclick="scan()">Scan for Networks</button>
      <div id="networks" class="networks"></div>
      <form onsubmit="return save(event)">
        <div class="field">
          <label>WiFi Network Name (SSID)</label>
          <input type="text" id="ssid" required maxlength="32" placeholder="Your WiFi name">
        </div>
        <div class="field">
          <label>WiFi Password</label>
          <input type="password" id="pass" maxlength="64" placeholder="Your WiFi password">
        </div>
        <button type="submit">Connect</button>
      </form>
      <div class="info">
        Device will restart and connect to your WiFi.<br>
        Hold BOOT button for 5s to re-enter setup.
      </div>
    </div>
  </div>
  <script>
    function scan() {
      fetch('/scan').then(r=>r.json()).then(nets=>{
        let h='';
        nets.forEach(n=>{
          h+=`<div class="net-item" onclick="document.getElementById('ssid').value='${n.ssid}'">
            <span>${n.ssid}</span><span class="rssi">${n.rssi}dBm</span>
          </div>`;
        });
        document.getElementById('networks').innerHTML=h||'<div class="info">No networks found</div>';
      }).catch(()=>{
        document.getElementById('networks').innerHTML='<div class="info">Scan failed</div>';
      });
    }
    function save(e) {
      e.preventDefault();
      const ssid=document.getElementById('ssid').value;
      const pass=document.getElementById('pass').value;
      fetch('/save',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ssid,password:pass})
      }).then(r=>r.json()).then(d=>{
        if(d.success){
          document.getElementById('content').innerHTML=
            '<div class="success"><h2>✓ Saved!</h2><p>Connecting to '+ssid+'...<br>Device will restart in 3 seconds.</p></div>';
        }
      });
      return false;
    }
  </script>
</body>
</html>
)rawliteral";

// ============================================================
// SETUP
// ============================================================

void setup() {
  Serial.begin(115200);
  delay(1000);
  
  Serial.println();
  Serial.println("========================================");
  Serial.println("  Nodely ESP32 Firmware v" FIRMWARE_VERSION);
  Serial.println("  WiFi Manager + MQTT + HTTP Fallback");
  Serial.println("========================================");
  
  // Generate hardware ID from MAC address
  uint8_t mac[6];
  WiFi.macAddress(mac);
  char macStr[18];
  snprintf(macStr, sizeof(macStr), "%02x%02x%02x%02x%02x%02x",
           mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
  hardwareId = String("NODELY-") + String(macStr);
  Serial.println("Hardware ID: " + hardwareId);
  
  // Init relay (Active LOW — HIGH = OFF)
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, HIGH); // Start OFF
  
  // Init reset button
  pinMode(RESET_PIN, INPUT_PULLUP);
  
  // Load saved WiFi credentials from NVS
  preferences.begin("nodely", false);
  savedSSID = preferences.getString("wifi_ssid", "");
  savedPassword = preferences.getString("wifi_pass", "");
  preferences.end();
  
  if (savedSSID.length() == 0) {
    Serial.println("[WiFi] No saved credentials — starting setup portal");
    startSetupPortal();
  } else {
    Serial.println("[WiFi] Saved SSID: " + savedSSID);
    if (connectWiFi(savedSSID, savedPassword)) {
      // TLS setup
      mqttWifiClient.setInsecure();
      
      // Setup MQTT
      mqttClient.setServer(MQTT_HOST, MQTT_PORT);
      mqttClient.setCallback(mqttCallback);
      mqttClient.setBufferSize(512);
      
      // Register device
      registerDevice();
      
      // Initial firmware check
      checkFirmwareUpdate();
    } else {
      Serial.println("[WiFi] Failed to connect with saved credentials — starting setup portal");
      startSetupPortal();
    }
  }
}

// ============================================================
// MAIN LOOP
// ============================================================

void loop() {
  unsigned long now = millis();
  
  // Check reset button (hold BOOT for 5s to enter setup mode)
  checkResetButton(now);
  
  // If in setup mode, handle captive portal
  if (inSetupMode) {
    dnsServer.processNextRequest();
    setupServer.handleClient();
    return;
  }
  
  // Ensure WiFi stays connected
  if (WiFi.status() != WL_CONNECTED && now - lastWifiCheck > WIFI_RECONNECT_DELAY) {
    lastWifiCheck = now;
    Serial.println("[WiFi] Connection lost, reconnecting...");
    connectWiFi(savedSSID, savedPassword);
  }
  
  // Maintain MQTT connection
  if (isRegistered && WiFi.status() == WL_CONNECTED) {
    if (!mqttClient.connected() && now - lastMqttReconnect > MQTT_RECONNECT_DELAY) {
      lastMqttReconnect = now;
      connectMQTT();
    }
    if (mqttClient.connected()) {
      mqttClient.loop();
    }
  }
  
  // HTTP fallback polling (every 30s)
  if (isRegistered && WiFi.status() == WL_CONNECTED && now - lastHttpPoll > HTTP_POLL_INTERVAL) {
    lastHttpPoll = now;
    httpPollCommand();
  }
  
  // Periodic firmware check
  if (isRegistered && WiFi.status() == WL_CONNECTED && now - lastFirmwareCheck > FIRMWARE_CHECK_INTERVAL) {
    lastFirmwareCheck = now;
    checkFirmwareUpdate();
  }
}

// ============================================================
// RESET BUTTON — Hold BOOT button 5s to clear WiFi & enter setup
// ============================================================

void checkResetButton(unsigned long now) {
  if (digitalRead(RESET_PIN) == LOW) {
    if (!resetButtonPressed) {
      resetButtonPressed = true;
      resetButtonStart = now;
    } else if (now - resetButtonStart > RESET_BUTTON_HOLD_MS) {
      Serial.println("[Reset] Button held — clearing WiFi credentials");
      clearWiFiCredentials();
      startSetupPortal();
      resetButtonPressed = false;
    }
  } else {
    resetButtonPressed = false;
  }
}

// ============================================================
// WiFi CREDENTIAL MANAGEMENT (NVS)
// ============================================================

void saveWiFiCredentials(const String& ssid, const String& password) {
  preferences.begin("nodely", false);
  preferences.putString("wifi_ssid", ssid);
  preferences.putString("wifi_pass", password);
  preferences.end();
  savedSSID = ssid;
  savedPassword = password;
  Serial.println("[NVS] WiFi credentials saved: " + ssid);
}

void clearWiFiCredentials() {
  preferences.begin("nodely", false);
  preferences.remove("wifi_ssid");
  preferences.remove("wifi_pass");
  preferences.end();
  savedSSID = "";
  savedPassword = "";
  Serial.println("[NVS] WiFi credentials cleared");
}

// ============================================================
// WiFi CONNECT
// ============================================================

bool connectWiFi(const String& ssid, const String& password) {
  Serial.print("[WiFi] Connecting to: " + ssid);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid.c_str(), password.c_str());
  
  unsigned long start = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - start < WIFI_CONNECT_TIMEOUT) {
    delay(500);
    Serial.print(".");
  }
  
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println(" Connected!");
    Serial.println("[WiFi] IP: " + WiFi.localIP().toString());
    return true;
  } else {
    Serial.println(" FAILED");
    WiFi.disconnect();
    return false;
  }
}

// ============================================================
// CAPTIVE PORTAL (Setup Mode)
// ============================================================

void startSetupPortal() {
  inSetupMode = true;
  
  WiFi.disconnect();
  WiFi.mode(WIFI_AP);
  WiFi.softAP(AP_SSID, strlen(AP_PASSWORD) > 0 ? AP_PASSWORD : NULL);
  
  Serial.println("[AP] Started: " + String(AP_SSID));
  Serial.println("[AP] IP: " + WiFi.softAPIP().toString());
  
  // DNS — redirect all domains to captive portal
  dnsServer.start(53, "*", WiFi.softAPIP());
  
  // Serve setup page
  setupServer.on("/", HTTP_GET, []() {
    setupServer.send_P(200, "text/html", SETUP_HTML);
  });
  
  // Scan networks
  setupServer.on("/scan", HTTP_GET, []() {
    int n = WiFi.scanNetworks();
    JsonDocument doc;
    JsonArray arr = doc.to<JsonArray>();
    for (int i = 0; i < n && i < 20; i++) {
      JsonObject net = arr.add<JsonObject>();
      net["ssid"] = WiFi.SSID(i);
      net["rssi"] = WiFi.RSSI(i);
      net["secure"] = WiFi.encryptionType(i) != WIFI_AUTH_OPEN;
    }
    String response;
    serializeJson(doc, response);
    setupServer.send(200, "application/json", response);
    WiFi.scanDelete();
  });
  
  // Save credentials
  setupServer.on("/save", HTTP_POST, []() {
    String body = setupServer.arg("plain");
    JsonDocument doc;
    deserializeJson(doc, body);
    
    String ssid = doc["ssid"].as<String>();
    String password = doc["password"].as<String>();
    
    if (ssid.length() == 0) {
      setupServer.send(400, "application/json", "{\"error\":\"SSID required\"}");
      return;
    }
    
    saveWiFiCredentials(ssid, password);
    setupServer.send(200, "application/json", "{\"success\":true}");
    
    // Restart after a short delay to connect with new creds
    delay(3000);
    ESP.restart();
  });
  
  // Captive portal detection endpoints
  setupServer.on("/generate_204", HTTP_GET, []() {
    setupServer.sendHeader("Location", "http://" + WiFi.softAPIP().toString());
    setupServer.send(302);
  });
  setupServer.on("/hotspot-detect.html", HTTP_GET, []() {
    setupServer.send_P(200, "text/html", SETUP_HTML);
  });
  setupServer.on("/connecttest.txt", HTTP_GET, []() {
    setupServer.sendHeader("Location", "http://" + WiFi.softAPIP().toString());
    setupServer.send(302);
  });
  
  // Catch-all for captive portal
  setupServer.onNotFound([]() {
    setupServer.sendHeader("Location", "http://" + WiFi.softAPIP().toString());
    setupServer.send(302);
  });
  
  setupServer.begin();
  Serial.println("[AP] Captive portal active — connect to '" AP_SSID "' to configure WiFi");
}

// ============================================================
// DEVICE REGISTRATION
// ============================================================

void registerDevice() {
  if (WiFi.status() != WL_CONNECTED) return;
  
  Serial.println("[Register] Registering device: " + hardwareId);
  
  HTTPClient http;
  http.begin(String(FUNCTIONS_URL) + "/register-device");
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Authorization", "Bearer " SUPABASE_ANON_KEY);
  http.addHeader("apikey", SUPABASE_ANON_KEY);
  http.addHeader("x-api-key", DEVICE_API_KEY);
  
  JsonDocument doc;
  doc["hardware_id"] = hardwareId;
  String body;
  serializeJson(doc, body);
  
  int httpCode = http.POST(body);
  
  if (httpCode == 200) {
    String response = http.getString();
    JsonDocument resDoc;
    deserializeJson(resDoc, response);
    
    deviceUuid = resDoc["device_uuid"].as<String>();
    bool alreadyRegistered = resDoc["already_registered"].as<bool>();
    String claimUrl = resDoc["claim_url"].as<String>();
    
    mqttTopic = "nodely/" + deviceUuid + "/command";
    isRegistered = true;
    
    Serial.println("[Register] Success!");
    Serial.println("[Register] UUID: " + deviceUuid);
    Serial.println("[Register] Already registered: " + String(alreadyRegistered ? "yes" : "no"));
    Serial.println("[Register] Claim URL: " + claimUrl);
    Serial.println("[Register] MQTT Topic: " + mqttTopic);
    
    // Report state immediately so last_seen is populated in the dashboard
    reportState();
  } else {
    Serial.println("[Register] Failed, HTTP " + String(httpCode));
    if (httpCode > 0) {
      Serial.println("[Register] Response: " + http.getString());
    }
  }
  
  http.end();
}

// ============================================================
// MQTT
// ============================================================

void connectMQTT() {
  if (mqttTopic.isEmpty()) return;
  
  Serial.print("[MQTT] Connecting to " MQTT_HOST "...");
  
  String clientId = "nodely-" + deviceUuid.substring(0, 8);
  
  if (mqttClient.connect(clientId.c_str(), MQTT_USER, MQTT_PASS)) {
    Serial.println(" Connected!");
    mqttClient.subscribe(mqttTopic.c_str());
    Serial.println("[MQTT] Subscribed to: " + mqttTopic);
    // Update last_seen on every fresh MQTT connection
    reportState();
  } else {
    Serial.println(" Failed (rc=" + String(mqttClient.state()) + ")");
  }
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {
  String msg = "";
  for (unsigned int i = 0; i < length; i++) {
    msg += (char)payload[i];
  }
  
  Serial.println("[MQTT] Received: " + msg + " on " + String(topic));
  
  // Check for WiFi update command (JSON payload)
  // Server publishes: { "type": "WIFI_UPDATE", "ssid": "...", "password": "..." }
  if (msg.startsWith("{")) {
    JsonDocument doc;
    DeserializationError err = deserializeJson(doc, msg);
    if (!err) {
      // Support both "type" and "command" keys for forward-compat
      String cmdType = doc.containsKey("type") ? doc["type"].as<String>() : doc["command"].as<String>();
      if (cmdType == "WIFI_UPDATE") {
        // Support both "ssid"/"password" and "wifi_ssid"/"wifi_password" keys
        String newSSID = doc.containsKey("ssid") ? doc["ssid"].as<String>() : doc["wifi_ssid"].as<String>();
        String newPass = doc.containsKey("password") ? doc["password"].as<String>() : doc["wifi_password"].as<String>();
        handleWiFiUpdate(newSSID, newPass);
        return;
      }
    }
  }
  
  if (msg == "LOCK") {
    Serial.println("[MQTT] Device LOCKED — forcing relay OFF");
    isLocked = true;
    setRelay(false);
    reportState();
    
  } else if (msg == "UNLOCK") {
    Serial.println("[MQTT] Device UNLOCKED");
    isLocked = false;
    reportState();
    
  } else if (msg == "ON") {
    if (isLocked) {
      Serial.println("[MQTT] Ignoring ON — device is LOCKED");
    } else {
      setRelay(true);
      reportState();
    }
    
  } else if (msg == "OFF") {
    setRelay(false);
    reportState();

  } else if (msg == "RESET_WIFI") {
    Serial.println("[MQTT] WiFi reset requested — entering setup mode");
    clearWiFiCredentials();
    delay(1000);
    ESP.restart();
    
  } else {
    Serial.println("[MQTT] Unknown command: " + msg);
  }
}

// ============================================================
// REMOTE WiFi UPDATE (via MQTT)
// ============================================================

void handleWiFiUpdate(const String& newSSID, const String& newPass) {
  if (newSSID.length() == 0) {
    Serial.println("[WiFi Update] Empty SSID — ignoring");
    return;
  }
  
  Serial.println("[WiFi Update] Received new credentials for: " + newSSID);
  Serial.println("[WiFi Update] Testing connection...");
  
  // Save old credentials for rollback
  String oldSSID = savedSSID;
  String oldPass = savedPassword;
  
  // Disconnect from current network
  mqttClient.disconnect();
  WiFi.disconnect();
  delay(1000);
  
  // Try new credentials
  if (connectWiFi(newSSID, newPass)) {
    Serial.println("[WiFi Update] Success! Saving new credentials");
    saveWiFiCredentials(newSSID, newPass);
    // Restart to cleanly reconnect everything
    delay(1000);
    ESP.restart();
  } else {
    Serial.println("[WiFi Update] Failed! Rolling back to previous credentials");
    // Reconnect to old network
    if (connectWiFi(oldSSID, oldPass)) {
      Serial.println("[WiFi Update] Rolled back successfully");
    } else {
      Serial.println("[WiFi Update] Rollback also failed — entering setup portal");
      startSetupPortal();
    }
  }
}

// ============================================================
// RELAY CONTROL (Active LOW)
// ============================================================

void setRelay(bool on) {
  relayState = on;
  // Active LOW: LOW = relay ON, HIGH = relay OFF
  digitalWrite(RELAY_PIN, on ? LOW : HIGH);
  Serial.println("[Relay] " + String(on ? "ON" : "OFF"));
}

// ============================================================
// HTTP: Report State to Backend
// ============================================================

void reportState() {
  if (WiFi.status() != WL_CONNECTED || deviceUuid.isEmpty()) return;
  
  HTTPClient http;
  http.begin(String(FUNCTIONS_URL) + "/update-state");
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Authorization", "Bearer " SUPABASE_ANON_KEY);
  http.addHeader("apikey", SUPABASE_ANON_KEY);
  http.addHeader("x-api-key", DEVICE_API_KEY);
  http.addHeader("x-device-uuid", deviceUuid);
  
  JsonDocument doc;
  doc["state"] = relayState;
  doc["firmware_version"] = FIRMWARE_VERSION;
  String body;
  serializeJson(doc, body);
  
  int httpCode = http.POST(body);
  
  if (httpCode == 200) {
    Serial.println("[Report] State reported: " + String(relayState ? "ON" : "OFF"));
  } else {
    Serial.println("[Report] Failed, HTTP " + String(httpCode));
  }
  
  http.end();
}

// ============================================================
// HTTP: Fallback Poll for Commands
// ============================================================

void httpPollCommand() {
  if (deviceUuid.isEmpty()) return;
  
  Serial.println("[Poll] Checking command via HTTP...");
  
  HTTPClient http;
  http.begin(String(FUNCTIONS_URL) + "/get-command");
  http.addHeader("Authorization", "Bearer " SUPABASE_ANON_KEY);
  http.addHeader("apikey", SUPABASE_ANON_KEY);
  http.addHeader("x-api-key", DEVICE_API_KEY);
  http.addHeader("x-device-uuid", deviceUuid);
  
  int httpCode = http.GET();
  
  if (httpCode == 200) {
    String response = http.getString();
    JsonDocument doc;
    deserializeJson(doc, response);
    
    String command = doc["command"].as<String>();
    bool locked = doc["locked"].as<bool>();
    
    Serial.println("[Poll] Command: " + command + ", Locked: " + String(locked ? "yes" : "no"));
    
    isLocked = locked;
    
    if (isLocked) {
      if (relayState) {
        setRelay(false);
      }
    } else {
      bool desiredState = (command == "ON");
      if (desiredState != relayState) {
        setRelay(desiredState);
        reportState();
      }
    }
  } else {
    Serial.println("[Poll] Failed, HTTP " + String(httpCode));
  }
  
  http.end();
}

// ============================================================
// OTA FIRMWARE UPDATE
// ============================================================

void checkFirmwareUpdate() {
  if (WiFi.status() != WL_CONNECTED) return;
  
  Serial.println("[OTA] Checking for firmware updates...");
  
  HTTPClient http;
  http.begin(String(FUNCTIONS_URL) + "/get-firmware");
  http.addHeader("Authorization", "Bearer " SUPABASE_ANON_KEY);
  http.addHeader("apikey", SUPABASE_ANON_KEY);
  http.addHeader("x-api-key", DEVICE_API_KEY);
  
  int httpCode = http.GET();
  
  if (httpCode == 200) {
    String response = http.getString();
    JsonDocument doc;
    deserializeJson(doc, response);
    
    String latestVersion = doc["version"].as<String>();
    String firmwareUrl = doc["url"].as<String>();
    String changelog = doc["changelog"].as<String>();
    
    Serial.println("[OTA] Current: v" FIRMWARE_VERSION ", Latest: v" + latestVersion);
    
    if (latestVersion != FIRMWARE_VERSION && firmwareUrl.length() > 4) {
      Serial.println("[OTA] Update available! Changelog: " + changelog);
      Serial.println("[OTA] Downloading from: " + firmwareUrl);
      performOTA(firmwareUrl);
    } else {
      Serial.println("[OTA] Firmware is up to date");
    }
  } else {
    Serial.println("[OTA] Check failed, HTTP " + String(httpCode));
  }
  
  http.end();
}

void performOTA(String url) {
  Serial.println("[OTA] Starting update...");
  
  HTTPClient http;
  http.begin(url);
  
  int httpCode = http.GET();
  
  if (httpCode == 200) {
    int contentLength = http.getSize();
    
    if (contentLength <= 0) {
      Serial.println("[OTA] Invalid content length");
      http.end();
      return;
    }
    
    if (!Update.begin(contentLength)) {
      Serial.println("[OTA] Not enough space for update");
      http.end();
      return;
    }
    
    WiFiClient* stream = http.getStreamPtr();
    size_t written = Update.writeStream(*stream);
    
    if (written == contentLength) {
      Serial.println("[OTA] Written: " + String(written) + " bytes");
    } else {
      Serial.println("[OTA] Written only: " + String(written) + "/" + String(contentLength));
    }
    
    if (Update.end()) {
      if (Update.isFinished()) {
        Serial.println("[OTA] Update successful! Rebooting...");
        delay(1000);
        ESP.restart();
      } else {
        Serial.println("[OTA] Update not finished");
      }
    } else {
      Serial.println("[OTA] Update error: " + String(Update.getError()));
    }
  } else {
    Serial.println("[OTA] Download failed, HTTP " + String(httpCode));
  }
  
  http.end();
}
