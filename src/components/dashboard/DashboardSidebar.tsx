import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Download,
  User,
  MapPin,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * WooCommerce Endpoint Mapping:
 * - /my-account/ → Dashboard
 * - /my-account/orders/ → Orders
 * - /my-account/downloads/ → Downloads
 * - /my-account/edit-account/ → My Info
 * - /my-account/edit-address/ → Addresses
 * - /my-account/customer-logout/ → Logout
 */

const navItems = [
  { label: 'Dashboard', href: '/my-account', icon: LayoutDashboard, exact: true },
  { label: 'My Orders', href: '/my-account/orders', icon: ShoppingBag },
  { label: 'Downloads', href: '/my-account/downloads', icon: Download },
  { label: 'My Info', href: '/my-account/edit-account', icon: User },
  { label: 'Addresses', href: '/my-account/edit-address', icon: MapPin },
  { label: 'Support', href: '/my-account/support', icon: HelpCircle },
];

interface DashboardSidebarProps {
  className?: string;
}

const DashboardSidebar = ({ className }: DashboardSidebarProps) => {
  const location = useLocation();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <aside className={cn("bg-card border border-border rounded-2xl p-4 md:p-6", className)}>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
              isActive(item.href, item.exact)
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}

        {/* Logout - separate styling */}
        <Link
          to="/auth"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all mt-4"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
