import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sampleVideo1 from '@/assets/sample-video-1.jpg';
import sampleVideo2 from '@/assets/sample-video-2.jpg';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const cartItems = [
  {
    id: 1,
    name: 'Fire Explosion Logo',
    image: sampleVideo1,
    price: 29,
    originalPrice: 49,
    quantity: 1,
    options: ['Rush Delivery (+$8)', '4K Upgrade (+$15)'],
  },
  {
    id: 2,
    name: 'Neon Glitch Effect',
    image: sampleVideo2,
    price: 24,
    originalPrice: 39,
    quantity: 1,
    options: [],
  },
];

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const extras = 23; // Rush + 4K
  const total = subtotal + extras;

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display text-2xl font-bold">YOUR CART</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  {item.options.length > 0 && (
                    <p className="text-xs text-muted-foreground mb-2">
                      {item.options.join(' • ')}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-secondary">${item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${item.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                    <button className="ml-auto p-2 text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Add-ons</span>
                <span>${extras}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-secondary">${total}</span>
              </div>
            </div>
            <Button variant="cart" size="xl" className="w-full">
              Checkout • ${total}
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
