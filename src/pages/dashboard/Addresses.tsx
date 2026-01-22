import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit2, Save, X } from 'lucide-react';

/**
 * WooCommerce Endpoint: /my-account/edit-address/
 * Template: myaccount/form-edit-address.php
 */

interface Address {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phone: string;
}

const defaultBilling: Address = {
  firstName: 'John',
  lastName: 'Doe',
  company: 'Digital Work Inc.',
  address1: '123 Animation Street',
  address2: 'Suite 100',
  city: 'Los Angeles',
  state: 'CA',
  postcode: '90001',
  country: 'United States',
  phone: '+1 (555) 123-4567',
};

const Addresses = () => {
  const [editingBilling, setEditingBilling] = useState(false);
  const [editingShipping, setEditingShipping] = useState(false);
  const [billing, setBilling] = useState<Address>(defaultBilling);
  const [shipping, setShipping] = useState<Address | null>(null);

  return (
    <DashboardLayout title="Addresses" subtitle="Manage your billing and shipping addresses.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Billing Address */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold uppercase">
              Billing Address
            </h2>
            {!editingBilling && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingBilling(true)}
              >
                <Edit2 className="w-4 h-4 mr-1" />
                Edit
              </Button>
            )}
          </div>

          {editingBilling ? (
            <AddressForm
              address={billing}
              onChange={setBilling}
              onSave={() => setEditingBilling(false)}
              onCancel={() => setEditingBilling(false)}
            />
          ) : (
            <AddressDisplay address={billing} />
          )}
        </div>

        {/* Shipping Address */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold uppercase">
              Shipping Address
            </h2>
            {!editingShipping && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingShipping(true)}
              >
                <Edit2 className="w-4 h-4 mr-1" />
                {shipping ? 'Edit' : 'Add'}
              </Button>
            )}
          </div>

          {editingShipping ? (
            <AddressForm
              address={shipping || { ...defaultBilling, firstName: '', lastName: '', address1: '', city: '', postcode: '' }}
              onChange={(addr) => setShipping(addr)}
              onSave={() => setEditingShipping(false)}
              onCancel={() => setEditingShipping(false)}
            />
          ) : shipping ? (
            <AddressDisplay address={shipping} />
          ) : (
            <p className="text-muted-foreground text-sm">
              No shipping address on file. Click "Add" to add one.
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-xl">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Since all our products are digital downloads, shipping addresses are optional but can be useful for billing purposes.
        </p>
      </div>
    </DashboardLayout>
  );
};

const AddressDisplay = ({ address }: { address: Address }) => (
  <div className="space-y-1 text-sm">
    <p className="font-medium">{address.firstName} {address.lastName}</p>
    {address.company && <p className="text-muted-foreground">{address.company}</p>}
    <p className="text-muted-foreground">{address.address1}</p>
    {address.address2 && <p className="text-muted-foreground">{address.address2}</p>}
    <p className="text-muted-foreground">
      {address.city}, {address.state} {address.postcode}
    </p>
    <p className="text-muted-foreground">{address.country}</p>
    {address.phone && <p className="text-muted-foreground mt-2">{address.phone}</p>}
  </div>
);

const AddressForm = ({
  address,
  onChange,
  onSave,
  onCancel,
}: {
  address: Address;
  onChange: (address: Address) => void;
  onSave: () => void;
  onCancel: () => void;
}) => {
  const handleChange = (field: keyof Address, value: string) => {
    onChange({ ...address, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>First name</Label>
          <Input
            value={address.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Last name</Label>
          <Input
            value={address.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Company (optional)</Label>
        <Input
          value={address.company}
          onChange={(e) => handleChange('company', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Address line 1</Label>
        <Input
          value={address.address1}
          onChange={(e) => handleChange('address1', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Address line 2 (optional)</Label>
        <Input
          value={address.address2}
          onChange={(e) => handleChange('address2', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>City</Label>
          <Input
            value={address.city}
            onChange={(e) => handleChange('city', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>State/Province</Label>
          <Input
            value={address.state}
            onChange={(e) => handleChange('state', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Postcode</Label>
          <Input
            value={address.postcode}
            onChange={(e) => handleChange('postcode', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Phone</Label>
          <Input
            value={address.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button onClick={onSave} variant="hero" size="sm" className="rounded-full">
          <Save className="w-4 h-4 mr-1" />
          Save
        </Button>
        <Button onClick={onCancel} variant="ghost" size="sm">
          <X className="w-4 h-4 mr-1" />
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Addresses;
