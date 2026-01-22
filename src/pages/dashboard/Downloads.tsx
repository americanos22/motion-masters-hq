import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Download, MessageSquare, Play } from 'lucide-react';

/**
 * WooCommerce Endpoint: /my-account/downloads/
 * Template: myaccount/downloads.php
 */

// Mock downloads data - would come from WooCommerce API
const downloads = [
  {
    id: 1,
    name: 'Fire Logo Reveal',
    date: 'Jan 20, 2026',
    thumbnail: '/placeholder.svg',
    files: [
      { name: '1080p HD', size: '12.4 MB' },
      { name: '4K Ultra HD', size: '48.2 MB' },
    ],
  },
  {
    id: 2,
    name: 'Neon Glitch Effect',
    date: 'Jan 20, 2026',
    thumbnail: '/placeholder.svg',
    files: [
      { name: '1080p HD', size: '15.1 MB' },
      { name: '4K Ultra HD', size: '52.8 MB' },
    ],
  },
  {
    id: 3,
    name: 'Diamond Glass Logo',
    date: 'Jan 15, 2026',
    thumbnail: '/placeholder.svg',
    files: [
      { name: '1080p HD', size: '11.2 MB' },
    ],
  },
];

const Downloads = () => {
  return (
    <DashboardLayout title="Downloads" subtitle="Access your delivered animation files.">
      {downloads.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-card transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-muted">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm" className="rounded-full">
                    <Play className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-display font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Delivered on {item.date}
                </p>

                {/* Download Buttons */}
                <div className="space-y-2">
                  {item.files.map((file, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="w-full justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        {file.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{file.size}</span>
                    </Button>
                  ))}
                </div>

                {/* Need Changes Link */}
                <Link
                  to="/my-account/support"
                  className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mt-4"
                >
                  <MessageSquare className="w-4 h-4" />
                  Need changes?
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <Download className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-display font-bold mb-2">No Downloads Yet</h2>
          <p className="text-muted-foreground mb-6">
            Your delivered animation files will appear here.
          </p>
          <Button asChild variant="hero" className="rounded-full">
            <Link to="/categories">Browse Animation Effects</Link>
          </Button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Downloads;
