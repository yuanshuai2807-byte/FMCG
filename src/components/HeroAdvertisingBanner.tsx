import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight, ShieldCheck, Award, Zap, CheckCircle2 } from 'lucide-react';
import { FMCG_PRODUCTS } from '../data/products';

interface HeroAdvertisingBannerProps {
  onExploreGallery: () => void;
  onOpenProductDetail: (productId: string) => void;
  onRequestSample: (productId: string) => void;
}

export const HeroAdvertisingBanner: React.FC<HeroAdvertisingBannerProps> = ({
  onExploreGallery,
  onOpenProductDetail,
  onRequestSample
}) => {
  const [isPlayingCommercial, setIsPlayingCommercial] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeCommercialIndex, setActiveCommercialIndex] = useState(0);

  const heroCommercials = [
    {
      title: 'THE CRISP AWAKENING 2026',
      tagline: 'Sun-Drenched Citrus with Wild Rosemary Essence',
      hook: 'Zero Sugar. Real Japanese Yuzu. Maximum Morning Vitality.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=80',
      productId: 'verve-citrus-spark',
      duration: '0:30 Broadcast Spot',
      badge: 'National TV & Digital Campaign'
    },
    {
      title: 'DRAFT FOAM IN A CAN',
      tagline: 'Single Origin Cold Brew with Silky Artisanal Oat Milk',
      hook: 'Micro-foamed nitrogen pour with rich Madagascar vanilla.',
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
      productId: 'verve-nitro-oat-latte',
      duration: '0:15 Social Reel',
      badge: 'Viral TikTok & Instagram Trend'
    }
  ];

  const currentSpot = heroCommercials[activeCommercialIndex];
  const featuredProduct = FMCG_PRODUCTS.find(p => p.id === currentSpot.productId) || FMCG_PRODUCTS[0];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white py-12 lg:py-20">
      {/* Decorative subtle background mesh */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Commercial Advertising Copy & Claims */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-xs font-semibold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026 Commercial Campaign Spotlight</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-stone-100 font-['Cabinet_Grotesk']">
                Next-Gen FMCG Goods Crafted to <span className="text-amber-400">Fly Off Shelves</span>.
              </h1>
              <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Discover high-velocity consumer packaged goods engineered for modern lifestyle demand: zero synthetic additives, award-winning flavor chemistry, and 100% circular, eco-conscious packaging.
              </p>
            </div>

            {/* Quick Claims Grid */}
            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="flex items-center gap-2 text-xs text-stone-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean Ingredients Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Recyclable Packaging</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>High Scan Velocity (Top 1%)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Stocked in 14,200+ Stores</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-explore-btn"
                onClick={onExploreGallery}
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 transition-all cursor-pointer group"
              >
                <span>Explore Dynamic Goods Gallery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onRequestSample(featuredProduct.id)}
                className="px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Request Sample Pack</span>
              </button>
            </div>

            {/* Retail Trust Logos */}
            <div className="pt-4 border-t border-stone-800">
              <p className="text-[11px] uppercase tracking-widest text-stone-400 font-bold mb-2">
                Trusted by National Supermarkets & Specialty Retailers
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-stone-400 font-semibold">
                <span className="hover:text-stone-200 transition-colors">Whole Foods Market</span>
                <span className="text-stone-700">•</span>
                <span className="hover:text-stone-200 transition-colors">Target</span>
                <span className="text-stone-700">•</span>
                <span className="hover:text-stone-200 transition-colors">Sprouts Farmers Market</span>
                <span className="text-stone-700">•</span>
                <span className="hover:text-stone-200 transition-colors">Trader Joe’s</span>
                <span className="text-stone-700">•</span>
                <span className="hover:text-stone-200 transition-colors">Erewhon</span>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Ad Video Reel Mock & Featured Good Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-stone-800/80 p-3 sm:p-4 border border-stone-700/80 shadow-2xl backdrop-blur-sm">
              {/* Campaign Switcher Tabs */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-stone-700 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="font-bold text-stone-200 tracking-wide">AD BROADCAST PREVIEW</span>
                </div>
                <div className="flex gap-1.5">
                  {heroCommercials.map((spot, idx) => (
                    <button
                      key={spot.title}
                      onClick={() => setActiveCommercialIndex(idx)}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                        activeCommercialIndex === idx
                          ? 'bg-amber-400 text-stone-950'
                          : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                      }`}
                    >
                      Spot 0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Commercial Visual Mock Screen */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-950 group">
                <img
                  src={currentSpot.image}
                  alt={currentSpot.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isPlayingCommercial ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-90'
                  }`}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                {/* Top Info Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded bg-stone-950/80 backdrop-blur-md text-amber-400 font-bold border border-amber-400/20 text-[11px]">
                    {currentSpot.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-stone-950/80 text-stone-300 text-[11px] font-mono">
                    {currentSpot.duration}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlayingCommercial(!isPlayingCommercial);
                    }}
                    className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-400/90 hover:bg-amber-400 text-stone-950 flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                    title={isPlayingCommercial ? "Pause Commercial" : "Play Commercial Mock"}
                  >
                    {isPlayingCommercial ? (
                      <Pause className="w-6 h-6 fill-stone-950" />
                    ) : (
                      <Play className="w-6 h-6 fill-stone-950 ml-1" />
                    )}
                  </button>
                </div>

                {/* Audio Mute & Soundbite Toggler */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-stone-900/80 backdrop-blur-md text-stone-300 hover:text-white border border-stone-700 text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
                  <span className="text-[10px] font-semibold">{isMuted ? 'Unmute Audio' : 'Audio On'}</span>
                </button>

                {/* Live Caption/Hook Subtitle Banner */}
                <div className="absolute bottom-3 left-3 max-w-sm pointer-events-none">
                  <div className="bg-stone-950/90 backdrop-blur-md px-3 py-2 rounded-lg border border-stone-800">
                    <p className="text-[11px] text-amber-400 font-bold tracking-wider uppercase">
                      Campaign Punchline
                    </p>
                    <p className="text-xs text-white font-medium italic mt-0.5">
                      {currentSpot.hook}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Meta & Fast Actions Bar */}
              <div className="mt-3.5 p-3 rounded-xl bg-stone-900/90 border border-stone-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-white">
                      {featuredProduct.name}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                      ${featuredProduct.price.toFixed(2)} MSRP
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 line-clamp-1">
                    {featuredProduct.packSize} • {featuredProduct.retailers.join(', ')}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onOpenProductDetail(featuredProduct.id)}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onRequestSample(featuredProduct.id)}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-extrabold transition-colors cursor-pointer"
                  >
                    + Sample Kit
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
