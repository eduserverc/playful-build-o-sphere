
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Check, Database, Globe, Lock, Save, Shield } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully",
    });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Settings</h1>
        <Button 
          onClick={handleSave}
          className="bg-badminton-purple-600 hover:bg-badminton-purple-700"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure general application settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" defaultValue="Badminton Court Manager" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Input id="siteDescription" defaultValue="The ultimate badminton court booking and management platform" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input id="contactEmail" type="email" defaultValue="admin@badminton-court.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select 
                  id="timezone" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="UTC+0"
                >
                  <option value="UTC-12">UTC-12</option>
                  <option value="UTC-11">UTC-11</option>
                  <option value="UTC-10">UTC-10</option>
                  <option value="UTC-9">UTC-9</option>
                  <option value="UTC-8">UTC-8</option>
                  <option value="UTC-7">UTC-7</option>
                  <option value="UTC-6">UTC-6</option>
                  <option value="UTC-5">UTC-5</option>
                  <option value="UTC-4">UTC-4</option>
                  <option value="UTC-3">UTC-3</option>
                  <option value="UTC-2">UTC-2</option>
                  <option value="UTC-1">UTC-1</option>
                  <option value="UTC+0">UTC+0</option>
                  <option value="UTC+1">UTC+1</option>
                  <option value="UTC+2">UTC+2</option>
                  <option value="UTC+3">UTC+3</option>
                  <option value="UTC+4">UTC+4</option>
                  <option value="UTC+5">UTC+5</option>
                  <option value="UTC+6">UTC+6</option>
                  <option value="UTC+7">UTC+7</option>
                  <option value="UTC+8">UTC+8</option>
                  <option value="UTC+9">UTC+9</option>
                  <option value="UTC+10">UTC+10</option>
                  <option value="UTC+11">UTC+11</option>
                  <option value="UTC+12">UTC+12</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security and authorization settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="twoFactorAuth" />
                <Label htmlFor="twoFactorAuth">Enable Two-Factor Authentication for Admins</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="forceSSL" defaultChecked />
                <Label htmlFor="forceSSL">Force SSL for all connections</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="autoLogout" defaultChecked />
                <Label htmlFor="autoLogout">Auto-logout after 30 minutes of inactivity</Label>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="passwordPolicy">Password Policy</Label>
                <select 
                  id="passwordPolicy" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="strong"
                >
                  <option value="basic">Basic (8+ characters)</option>
                  <option value="medium">Medium (8+ chars, 1+ number)</option>
                  <option value="strong">Strong (8+ chars, numbers, special chars)</option>
                  <option value="very-strong">Very Strong (12+ chars, numbers, special chars, mixed case)</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
              <CardDescription>System status and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Version</span>
                <span className="text-sm">1.2.5</span>
              </div>
              <Separator />
              
              <div className="flex justify-between">
                <span className="text-sm font-medium">Last Updated</span>
                <span className="text-sm">2 days ago</span>
              </div>
              <Separator />
              
              <div className="flex justify-between">
                <span className="text-sm font-medium">Database Status</span>
                <span className="flex items-center text-green-500 text-sm">
                  <Check className="h-3 w-3 mr-1" />
                  Connected
                </span>
              </div>
              <Separator />
              
              <div className="flex justify-between">
                <span className="text-sm font-medium">API Status</span>
                <span className="flex items-center text-green-500 text-sm">
                  <Check className="h-3 w-3 mr-1" />
                  Operational
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                Backup Database
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Security Audit
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Globe className="h-4 w-4 mr-2" />
                Test Site Performance
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Clear Cache
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive hover:bg-red-50">
                <Lock className="h-4 w-4 mr-2" />
                Lock All Accounts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
