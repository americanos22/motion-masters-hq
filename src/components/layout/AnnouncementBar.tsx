import { useState } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar py-2.5 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-4 text-sm md:text-base font-medium">
        <span>🔥 FLASH SALE: Use code</span>
        <code className="bg-white/20 px-2 py-0.5 rounded font-bold">FLASH10</code>
        <span>for 10% OFF •</span>
        <code className="bg-white/20 px-2 py-0.5 rounded font-bold">FLASH20</code>
        <span className="hidden sm:inline">for 20% OFF •</span>
        <code className="hidden sm:inline bg-white/20 px-2 py-0.5 rounded font-bold">FLASH50</code>
        <span className="hidden sm:inline">for 50% OFF on 10+ videos!</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
