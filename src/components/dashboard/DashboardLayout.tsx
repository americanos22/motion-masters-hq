import Layout from '@/components/layout/Layout';
import DashboardSidebar from './DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title, subtitle }: DashboardLayoutProps) => {
  return (
    <Layout>
      <section className="py-8 md:py-12 bg-background min-h-[80vh]">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            )}
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar - hidden on mobile, shown as tabs alternative */}
            <DashboardSidebar className="hidden lg:block h-fit sticky top-24" />

            {/* Mobile Navigation */}
            <div className="lg:hidden overflow-x-auto pb-4">
              <div className="flex gap-2 min-w-max">
                <MobileNavLink href="/my-account" label="Dashboard" exact />
                <MobileNavLink href="/my-account/orders" label="Orders" />
                <MobileNavLink href="/my-account/downloads" label="Downloads" />
                <MobileNavLink href="/my-account/edit-account" label="My Info" />
                <MobileNavLink href="/my-account/support" label="Support" />
              </div>
            </div>

            {/* Main Content */}
            <main className="min-w-0">
              {children}
            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Mobile nav link component
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MobileNavLink = ({ 
  href, 
  label, 
  exact 
}: { 
  href: string; 
  label: string; 
  exact?: boolean;
}) => {
  const location = useLocation();
  const isActive = exact 
    ? location.pathname === href 
    : location.pathname.startsWith(href);

  return (
    <Link
      to={href}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
        isActive
          ? "bg-secondary text-secondary-foreground"
          : "bg-muted text-muted-foreground hover:bg-muted/80"
      )}
    >
      {label}
    </Link>
  );
};

export default DashboardLayout;
