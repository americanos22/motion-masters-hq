import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

/**
 * WooCommerce Endpoint: /my-account/orders/
 * Template: myaccount/orders.php
 */

// Mock orders data - would come from WooCommerce API
const orders = [
  {
    id: '1234',
    date: 'Jan 20, 2026',
    products: ['Fire Logo Reveal', 'Neon Glitch Effect'],
    options: ['Rush Delivery', '4K'],
    status: 'Delivered',
    total: '$58.00',
  },
  {
    id: '1233',
    date: 'Jan 18, 2026',
    products: ['Gold Particles Intro'],
    options: ['Standard'],
    status: 'In Production',
    total: '$29.00',
  },
  {
    id: '1232',
    date: 'Jan 15, 2026',
    products: ['Diamond Glass Logo'],
    options: ['Rush Delivery'],
    status: 'Delivered',
    total: '$34.00',
  },
  {
    id: '1231',
    date: 'Jan 10, 2026',
    products: ['3D Logo Reveal'],
    options: ['4K', 'Custom Music'],
    status: 'Delivered',
    total: '$49.00',
  },
];

const statusColors: Record<string, string> = {
  'Paid': 'bg-blue-100 text-blue-700',
  'In Production': 'bg-yellow-100 text-yellow-700',
  'Delivered': 'bg-green-100 text-green-700',
};

const Orders = () => {
  return (
    <DashboardLayout title="My Orders" subtitle="View and manage your order history.">
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase py-4 px-6">
                  Order #
                </th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase py-4 px-6">
                  Product(s)
                </th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase py-4 px-6 hidden md:table-cell">
                  Options
                </th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase py-4 px-6">
                  Status
                </th>
                <th className="text-right text-xs font-medium text-muted-foreground uppercase py-4 px-6">
                  Total
                </th>
                <th className="text-right text-xs font-medium text-muted-foreground uppercase py-4 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-medium">#{order.id}</span>
                    <div className="text-xs text-muted-foreground mt-1">{order.date}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      {order.products.map((product, i) => (
                        <div key={i} className="text-sm">{product}</div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {order.options.map((opt, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {opt}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className={statusColors[order.status] || 'bg-muted'}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6 text-right font-medium">
                    {order.total}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Button asChild size="sm" variant="ghost">
                      <Link to={`/my-account/orders/${order.id}`}>
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
