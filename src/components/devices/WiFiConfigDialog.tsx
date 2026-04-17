import { useState } from 'react';
import { Wifi, Loader2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface WiFiConfigDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  deviceName: string;
  onSubmit: (ssid: string, password: string) => Promise<void>;
}

export function WiFiConfigDialog({ open, onOpenChange, deviceName, onSubmit }: WiFiConfigDialogProps) {
  const [ssid, setSSID] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ssid.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(ssid.trim(), password);
      setSSID('');
      setPassword('');
      onOpenChange(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wifi className="w-5 h-5 text-primary" />
            Update WiFi
          </DialogTitle>
          <DialogDescription>
            Send new WiFi credentials to <span className="font-medium text-foreground">{deviceName}</span>. The device will attempt to connect and roll back if it fails.
          </DialogDescription>
        </DialogHeader>

        <Alert variant="default" className="border-warning/30 bg-warning/5">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertDescription className="text-xs text-muted-foreground">
            The device must be online to receive this update. It will briefly disconnect while switching networks.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="wifiSSID">Network Name (SSID)</Label>
              <Input
                id="wifiSSID"
                placeholder="Your WiFi network name"
                value={ssid}
                onChange={(e) => setSSID(e.target.value)}
                maxLength={32}
                required
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wifiPassword">Password</Label>
              <div className="relative">
                <Input
                  id="wifiPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="WiFi password (leave empty for open)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={64}
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || !ssid.trim()}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Update WiFi'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
