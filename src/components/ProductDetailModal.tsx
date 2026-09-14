import React, { useState } from 'react';
import { FMCGProduct } from '../types';
import { 
  X, 
  Star, 
  Check, 
  PackagePlus, 
  Store, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Leaf, 
  Heart, 
  Coffee, 
  Award, 
  Flame, 
  Smile, 
  Droplets, 
  Shield, 
  Sun, 
  CheckCircle2, 
  Recycle, 
  Feather, 
  Globe 
} from 'lucide-react';

interface ProductDetailModalProps {
  product: FMCGProduct | null;
  onClose: () => void;
  onAddSample: (product: FMCGProduct) => void;
  isSampleAdded: boolean;
  onOpenStoreLocator: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddSample,
  isSampleAdded,
  onOpenStoreLocator
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) return null;

  // Icon renderer helper
  const renderBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-4 h-4 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Leaf': return <Leaf className="w-4 h-4 text-emerald-600" />;
      case 'Coffee': return <Coffee className="w-4 h-4 text-amber-800" />;
      case 'Heart': return <Heart className="w-4 h-4 text-rose-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'Flame': return <Flame className="w-4 h-4 text-orange-500" />;
      case 'Smile': return <Smile className="w-4 h-4 text-amber-500" />;
      case 'Award': return <Award className="w-4 h-4 text-indigo-600" />;
      case 'Droplets': return <Droplets className="w-4 h-4 text-sky-500" />;
      case 'Shield': return <Shield className="w-4 h-4 text-emerald-600" />;
      case 'Sun': return <Sun className="w-4 h-4 text-amber-500" />;
      case 'Recycle': return <Recycle className="w-4 h-4 text-emerald-600" />;
      case 'Feather': return <Feather className="w-4 h-4 text-teal-600" />;
      case 'Globe': return <Globe className="w-4 h-4 text-blue-600" />;
      default: return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
    }
  };

  const images = product.galleryImages.length > 0 ? product.galleryImages : [product.imageUrl];
  const activeImage = images[activeImageIndex] || product.imageUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-500">SKU: {product.sku}</span>
            <span className="text-stone-300">•</span>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{product.brandLine}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            title="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Gallery Column */}
            <div className="md:col-span-6 space-y-3">
              {/* Main Image Display */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
                <img
                  src={activeImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-stone-950 text-amber-400 shadow">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-stone-950 ring-2 ring-stone-950/20'
                          : 'border-stone-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumb" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Advertising Tagline Quote Box */}
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-amber-950 text-xs">
                <div className="font-bold uppercase tracking-wider text-[10px] text-amber-700">
                  Broadcast / Ad Campaign Hook
                </div>
                <div className="italic font-medium mt-1">
                  {product.advertisingSnippet}
                </div>
              </div>
            </div>

            {/* Product Story & Specs Column */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-1">
                  <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700">{product.category}</span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold ml-auto">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-stone-400 font-normal">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight font-['Cabinet_Grotesk']">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-stone-600 mt-1">
                  {product.tagline}
                </p>
              </div>

              {/* Pricing & Packaging */}
              <div className="flex items-baseline gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                <div className="text-2xl font-black text-stone-900">
                  ${product.price.toFixed(2)}
                </div>
                <div className="text-xs text-stone-400 line-through">
                  ${product.msrp.toFixed(2)} MSRP
                </div>
                <div className="ml-auto text-xs font-semibold text-stone-600">
                  Pack: <strong className="text-stone-900">{product.packSize}</strong>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    ✓ {t}
                  </span>
                ))}
              </div>

              {/* Formulations & Key Benefits */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
                  Product Formulation & Claims
                </h4>
                <div className="space-y-2">
                  {product.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-stone-50 text-xs">
                      <div className="mt-0.5 shrink-0">{renderBenefitIcon(b.icon)}</div>
                      <div>
                        <strong className="text-stone-900 font-bold block">{b.title}</strong>
                        <span className="text-stone-500 text-[11px] leading-tight">{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
                  Trade & Nutritional Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {product.specs.map((s, i) => (
                    <div key={i} className="p-2 rounded-lg border border-stone-200 bg-white">
                      <span className="text-stone-400 block text-[10px] uppercase font-semibold">{s.label}</span>
                      <span className="font-bold text-stone-800 text-[11px]">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retail Distribution Available In */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5 text-stone-400" />
                  Available at Retail Partners
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.retailers.map((ret) => (
                    <span key={ret} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-100 text-stone-700">
                      🛒 {ret}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onAddSample(product)}
                  className={`w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSampleAdded
                      ? 'bg-emerald-600 text-white shadow'
                      : 'bg-stone-950 hover:bg-stone-800 text-white shadow-md'
                  }`}
                >
                  {isSampleAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Item Added to Sample Kit</span>
                    </>
                  ) : (
                    <>
                      <PackagePlus className="w-4 h-4 text-amber-400" />
                      <span>Request Free Retailer Sample Box</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenStoreLocator();
                  }}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl border border-stone-200 hover:bg-stone-100 text-xs font-bold text-stone-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Store className="w-4 h-4 text-sky-600" />
                  <span>Find in Stores</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
