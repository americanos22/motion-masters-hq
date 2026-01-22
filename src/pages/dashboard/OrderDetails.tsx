import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Download,
  ArrowLeft,
  CheckCircle,
  Clock,
  FileImage,
  MessageSquare,
} from 'lucide-react';

/**
 * WooCommerce Endpoint: /my-account/view-order/{order_id}
 * Template: myaccount/view-order.php
 */

// Mock order data - would come from WooCommerce API
const mockOrder = {
  id: '1234',
  date: 'January 20, 2026',
  status: 'Delivered',
  total: '$58.00',
  products: [
    { name: 'Fire Logo Reveal', price: '$29.00', thumbnail: '/placeholder.svg' },
    { name: 'Neon Glitch Effect', price: '$29.00', thumbnail: '/placeholder.svg' },
  ],
  options: ['Rush Delivery (+$10)', '4K Quality (+$5)'],
  uploadedLogo: 'my-logo.png',
  customerNotes: 'Please use the orange version of my logo.',
  deliveryETA: '72 hours or less',
  downloads: [
    { name: 'Fire Logo Reveal - 1080p.mp4', size: '12.4 MB' },
    { name: 'Fire Logo Reveal - 4K.mp4', size: '48.2 MB' },
    { name: 'Neon Glitch Effect - 1080p.mp4', size: '15.1 MB' },
    { name: 'Neon Glitch Effect - 4K.mp4', size: '52.8 MB' },
  ],
};

const OrderDetails = () => {
  const { orderId } = useParams();
  const order = mockOrder; // Would fetch by orderId
  const isDelivered = order.status === 'Delivered';

  return (
    <DashboardLayout title={`Order #${orderId}`} subtitle={`Placed on ${order.date}`}>
      {/* Back Link */}
      <Link
        to="/my-account/orders"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Orders
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Products */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-display font-bold uppercase mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              {order.products.map((product, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Options */}
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-sm font-medium mb-3">Selected Options:</h3>
              <div className="flex flex-wrap gap-2">
                {order.options.map((opt, i) => (
                  <Badge key={i} variant="secondary">
                    {opt}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
              <span className="font-medium">Total</span>
              <span className="text-xl font-display font-bold">{order.total}</span>
            </div>
          </div>

          {/* Uploaded Logo */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-display font-bold uppercase mb-4">
              Uploaded Logo
            </h2>
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <FileImage className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">{order.uploadedLogo}</p>
                <p className="text-sm text-muted-foreground">PNG file</p>
              </div>
            </div>

            {order.customerNotes && (
              <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm font-medium mb-1">Your Notes:</p>
                <p className="text-sm text-muted-foreground">{order.customerNotes}</p>
              </div>
            )}
          </div>
        </div>

        {/* Status & Delivery */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-display font-bold uppercase mb-4">
              Order Status
            </h2>
            <Badge
              className={
                isDelivered
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }
            >
              {order.status}
            </Badge>

            {/* Timeline */}
            <div className="mt-6 space-y-4">
              <TimelineItem label="Paid" completed />
              <TimelineItem label="In Production" completed={isDelivered} active={!isDelivered} />
              <TimelineItem label="Delivered" completed={isDelivered} />
            </div>

            {!isDelivered && (
              <div className="mt-6 p-4 bg-muted/50 rounded-lg flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm font-medium">Estimated Delivery</p>
                  <p className="text-sm text-muted-foreground">{order.deliveryETA}</p>
                </div>
              </div>
            )}
          </div>

          {/* Downloads */}
          {isDelivered && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-display font-bold uppercase mb-4">
                Downloads
              </h2>
              <div className="space-y-3">
                {order.downloads.map((file, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="w-full justify-between h-auto py-3"
                  >
                    <div className="text-left">
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.size}</p>
                    </div>
                    <Download className="w-4 h-4 ml-2" />
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Support */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-display font-bold uppercase mb-4">
              Need Help?
            </h2>
            <Button asChild variant="outline" className="w-full">
              <Link to="/my-account/support">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const TimelineItem = ({
  label,
  completed,
  active,
}: {
  label: string;
  completed?: boolean;
  active?: boolean;
}) => (
  <div className="flex items-center gap-3">
    <div
      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
        completed
          ? 'bg-secondary border-secondary'
          : active
          ? 'border-secondary'
          : 'border-muted-foreground/30'
      }`}
    >
      {completed && <CheckCircle className="w-3 h-3 text-secondary-foreground" />}
    </div>
    <span className={completed || active ? 'font-medium' : 'text-muted-foreground'}>
      {label}
    </span>
  </div>
);

export default OrderDetails;
