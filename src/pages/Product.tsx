import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Play,
  Clock,
  Monitor,
  FileVideo,
  Zap,
  Upload,
  Check,
  X,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';
import pricingData from '@/data/pricing.json';
import siteData from '@/data/site.json';
import sampleVideo1 from '@/assets/sample-video-1.jpg';
import sampleVideo2 from '@/assets/sample-video-2.jpg';
import sampleVideo3 from '@/assets/sample-video-3.jpg';

const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const [rushDelivery, setRushDelivery] = useState(false);
  const [addText, setAddText] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [upgrade4K, setUpgrade4K] = useState(false);
  const [extraRevision, setExtraRevision] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState('default');
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [sampleVideo1, sampleVideo2, sampleVideo3];
  
  // Find product from data
  const product = productsData.products.find(p => p.slug === slug);
  const productName = product?.name || `Sample ${slug}`;
  
  // Pricing from centralized data
  const basePrice = product?.price || 29;
  const { addons, musicOptions } = pricingData;
  const backgroundMusicPrice = backgroundMusic !== 'default' ? addons.backgroundMusic.price : 0;

  const totalPrice =
    basePrice +
    (rushDelivery ? addons.rushDelivery.price : 0) +
    (addText ? addons.addText.price : 0) +
    (upgrade4K ? addons.upgrade4K.price : 0) +
    (extraRevision ? addons.extraRevision.price : 0) +
    backgroundMusicPrice;

  const OptionButton = ({
    selected,
    onClick,
    children,
    variant = 'yes',
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'yes' | 'no';
  }) => (
    <button
      onClick={onClick}
      className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
        selected
          ? variant === 'yes'
            ? 'bg-secondary text-secondary-foreground'
            : 'bg-muted text-foreground border-2 border-foreground'
          : 'bg-muted text-muted-foreground hover:bg-muted/80'
      }`}
    >
      {variant === 'yes' ? (
        <Check className="w-4 h-4" />
      ) : (
        <X className="w-4 h-4" />
      )}
      {children}
    </button>
  );

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Categories
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div>
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden mb-4 bg-black">
                <img
                  src={images[selectedImage]}
                  alt="Product Preview"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-xl overflow-hidden flex-1 ${
                      selectedImage === index
                        ? 'ring-2 ring-secondary'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full aspect-video object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {productName}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-secondary">${basePrice}</span>
                <span className="text-xl text-muted-foreground line-through">${product?.originalPrice || 49}</span>
                <span className="bg-secondary/10 text-secondary text-sm font-bold px-3 py-1 rounded-full">
                  Save {Math.round(((product?.originalPrice || 49) - basePrice) / (product?.originalPrice || 49) * 100)}%
                </span>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-muted rounded-2xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{siteData.productSpecs.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Resolution</p>
                    <p className="font-semibold">{siteData.productSpecs.resolution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileVideo className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Format</p>
                    <p className="font-semibold">{siteData.productSpecs.format}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Turnaround</p>
                    <p className="font-semibold">{siteData.productSpecs.turnaround}</p>
                  </div>
                </div>
              </div>

              {/* Customization Options */}
              <div className="space-y-6">
                {/* Upload Logo */}
                <div>
                  <label className="block font-display font-semibold mb-3">
                    <Upload className="w-5 h-5 inline mr-2" />
                    Upload Your Logo
                  </label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                    <p className="font-medium mb-1">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PNG or JPG only (max 10MB)</p>
                  </div>
                </div>

                {/* Rush Delivery */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-display font-semibold">
                      {addons.rushDelivery.name}
                    </label>
                    <span className="text-secondary font-bold">+${addons.rushDelivery.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {addons.rushDelivery.description}
                  </p>
                  <div className="flex gap-3">
                    <OptionButton
                      selected={!rushDelivery}
                      onClick={() => setRushDelivery(false)}
                      variant="no"
                    >
                      No
                    </OptionButton>
                    <OptionButton
                      selected={rushDelivery}
                      onClick={() => setRushDelivery(true)}
                    >
                      Yes – I want Rush
                    </OptionButton>
                  </div>
                </div>

                {/* Add Text */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-display font-semibold">
                      {addons.addText.name}
                    </label>
                    <span className="text-secondary font-bold">+${addons.addText.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {addons.addText.description}
                  </p>
                  <div className="flex gap-3 mb-3">
                    <OptionButton
                      selected={!addText}
                      onClick={() => setAddText(false)}
                      variant="no"
                    >
                      No
                    </OptionButton>
                    <OptionButton
                      selected={addText}
                      onClick={() => setAddText(true)}
                    >
                      Yes – Add Text
                    </OptionButton>
                  </div>
                  {addText && (
                    <input
                      type="text"
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value.slice(0, 25))}
                      placeholder="Enter your text (max 25 chars)"
                      className="input-styled"
                    />
                  )}
                </div>

                {/* Upgrade to 4K */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-display font-semibold">
                      {addons.upgrade4K.name}
                    </label>
                    <span className="text-secondary font-bold">+${addons.upgrade4K.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {addons.upgrade4K.description}
                  </p>
                  <div className="flex gap-3">
                    <OptionButton
                      selected={!upgrade4K}
                      onClick={() => setUpgrade4K(false)}
                      variant="no"
                    >
                      No
                    </OptionButton>
                    <OptionButton
                      selected={upgrade4K}
                      onClick={() => setUpgrade4K(true)}
                    >
                      Yes – Upgrade to 4K
                    </OptionButton>
                  </div>
                </div>

                {/* Extra Revision */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-display font-semibold">
                      {addons.extraRevision.name}
                    </label>
                    <span className="text-secondary font-bold">+${addons.extraRevision.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {addons.extraRevision.description}
                  </p>
                  <div className="flex gap-3">
                    <OptionButton
                      selected={!extraRevision}
                      onClick={() => setExtraRevision(false)}
                      variant="no"
                    >
                      No
                    </OptionButton>
                    <OptionButton
                      selected={extraRevision}
                      onClick={() => setExtraRevision(true)}
                    >
                      Yes – Add Revision
                    </OptionButton>
                  </div>
                </div>

                {/* Background Music */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-display font-semibold">
                      {addons.backgroundMusic.name}
                    </label>
                    {backgroundMusic !== 'default' && (
                      <span className="text-secondary font-bold">+${addons.backgroundMusic.price}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {addons.backgroundMusic.description}
                  </p>
                  <div className="relative">
                    <select
                      value={backgroundMusic}
                      onChange={(e) => setBackgroundMusic(e.target.value)}
                      className="input-styled appearance-none pr-10"
                    >
                      {musicOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label} {option.price > 0 ? `(+$${option.price})` : ''}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Total & Add to Cart */}
              <div className="mt-8 p-6 bg-muted rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-3xl font-display font-bold text-secondary">
                    ${totalPrice}
                  </span>
                </div>
                <Button variant="cart" size="xl">
                  Add to Cart
                </Button>
              </div>

              {/* Product Notes */}
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  Final video will match the sample style but with your logo
                </p>
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  Template effect cannot be altered
                </p>
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  Default audio included unless upgraded
                </p>
                <p className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  Contact support via live chat for assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
