import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center text-white px-4">
        <h1 className="font-display text-8xl md:text-9xl font-bold mb-4 text-gradient">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-display mb-4">Page Not Found</p>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/categories">
              <ArrowLeft className="w-5 h-5" />
              Browse Categories
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
