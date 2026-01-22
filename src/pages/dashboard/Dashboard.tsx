import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ShoppingBag,
  Clock,
  CheckCircle,
  Download,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

/**
 * WooCommerce Endpoint: /my-account/
 * Template: myaccount/dashboard.php
 */

// Mock data - would come from WooCommerce API
const stats = [
  { label: 'Orders', value: 5, icon: ShoppingBag, color: 'text-primary' },
  { label: 'In Progress', value: 2, icon: Clock, color: 'text-yellow-500' },
  { label: 'Completed', value: 3, icon: CheckCircle, color: 'text-green-500' },
  { label: 'Downloads', value: 3, icon: Download, color: 'text-secondary' },
];

const recentOrders = [
  { id: '#1234', date: 'Jan 20, 2026', status: 'Delivered', total: '$29.00' },
  { id: '#1233', date: 'Jan 18, 2026', status: 'In Production', total: '$49.00' },
  { id: '#1232', date: 'Jan 15, 2026', status: 'Delivered', total: '$19.00' },
];

const statusColors: Record<string, string> = {
  'Paid': 'bg-blue-100 text-blue-700',
  'In Production': 'bg-yellow-100 text-yellow-700',
  'Delivered': 'bg-green-100 text-green-700',
};

const Dashboard = () => {
  return (
    <DashboardLayout title="My Dashboard" subtitle="Manage your orders, uploads, and downloads.">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-4 md:p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
            <p className="text-2xl md:text-3xl font-display font-bold">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latest Orders */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold uppercase">
              Latest Orders
            </h2>
            <Link
              to="/my-account/orders"
              className="text-sm text-secondary hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase py-3">
                    Order #
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase py-3">
                    Date
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase py-3">
                    Status
                  </th>
                  <th className="text-right text-xs font-medium text-muted-foreground uppercase py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-4">
                      <Link
                        to={`/my-account/orders/${order.id.replace('#', '')}`}
                        className="font-medium hover:text-secondary"
                      >
                        {order.id}
                      </Link>
                    </td>
                    <td className="py-4 text-muted-foreground">{order.date}</td>
                    <td className="py-4">
                      <Badge className={statusColors[order.status] || 'bg-muted'}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-right font-medium">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions + Order Timeline */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-display font-bold uppercase mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/categories">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Browse Animation Effects
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/contact">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>

          {/* Order Status Timeline */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-display font-bold uppercase mb-4">
              Order Progress
            </h2>
            <div className="space-y-4">
              <TimelineStep label="Paid" completed />
              <TimelineStep label="In Production" completed />
              <TimelineStep label="Delivered" active />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const TimelineStep = ({ 
  label, 
  completed, 
  active 
}: { 
  label: string; 
  completed?: boolean; 
  active?: boolean;
}) => (
  <div className="flex items-center gap-3">
    <div
      className={`w-4 h-4 rounded-full border-2 ${
        completed
          ? 'bg-secondary border-secondary'
          : active
          ? 'border-secondary'
          : 'border-muted-foreground/30'
      }`}
    />
    <span
      className={
        completed || active ? 'font-medium' : 'text-muted-foreground'
      }
    >
      {label}
    </span>
    {completed && <CheckCircle className="w-4 h-4 text-secondary ml-auto" />}
  </div>
);

export default Dashboard;
