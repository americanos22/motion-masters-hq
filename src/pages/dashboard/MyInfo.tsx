import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Mail, Lock, Save } from 'lucide-react';

/**
 * WooCommerce Endpoint: /my-account/edit-account/
 * Template: myaccount/form-edit-account.php
 */

const MyInfo = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [orderNotifications, setOrderNotifications] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WooCommerce account update handler
    console.log('Update account:', { firstName, lastName, email });
  };

  return (
    <DashboardLayout title="My Info" subtitle="Update your account details and preferences.">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-display font-bold uppercase mb-6">
              Personal Information
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-display font-bold uppercase mb-6">
              Change Password
            </h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="currentPassword"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="pl-10"
                    placeholder="Leave blank to keep current"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm new password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>

          {/* Email Preferences */}
          <div className="bg-card border border-border rounded-xl p-6 lg:col-span-2">
            <h2 className="text-lg font-display font-bold uppercase mb-6">
              Email Preferences
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="emailUpdates"
                  checked={emailUpdates}
                  onCheckedChange={(checked) => setEmailUpdates(checked as boolean)}
                />
                <Label htmlFor="emailUpdates" className="cursor-pointer">
                  Receive promotional emails and special offers
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="orderNotifications"
                  checked={orderNotifications}
                  onCheckedChange={(checked) => setOrderNotifications(checked as boolean)}
                />
                <Label htmlFor="orderNotifications" className="cursor-pointer">
                  Receive order status notifications
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <Button type="submit" variant="hero" size="lg" className="rounded-full">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default MyInfo;
