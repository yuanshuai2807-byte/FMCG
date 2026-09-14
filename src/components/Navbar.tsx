import React from 'react';
import { Package, Search, ShoppingBag, Sparkles, Store, Layers } from 'lucide-react';

interface NavbarProps {
  sampleCount: number;
  onOpenSampleDrawer: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  sampleCount,
  onOpenSampleDrawer,
  searchQuery,
  onSearchChange,
  onNavigateSection
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Advertising Campaign Announcement Bar */}
      <div className="bg-stone-900 text-stone-100 text-xs px-4 py-2 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-stone-950 uppercase tracking-wider">
              Trade & Retail Alert
            </span>
            <span className="hidden sm:inline text-stone-300">
              Complimentary FMCG retail shelf-ready sample packs now shipping for Q3/Q4 buyers.
            </span>
            <span className="sm:hidden text-stone-300">
              Free retail sample kits shipping now.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-stone-400">
            <span className="hidden md:inline">14,200+ Grocery Shelves Nationwide</span>
            <button
              onClick={() => onNavigateSection('campaign-spotlight')}
              className="text-amber-400 hover:text-amber-300 transition-colors font-semibold underline underline-offset-2 cursor-pointer"
            >
              View TV Ad Campaign →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <div 
          onClick={() => onNavigateSection('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-stone-950 text-amber-400 flex items-center justify-center font-black text-xl tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
            V
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-stone-900 font-['Cabinet_Grotesk']">
                VERVE
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded border border-stone-200">
                FMCG
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-medium tracking-wide">
              Fast-Moving Consumer Goods & Advertising
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-600">
          <button
            onClick={() => onNavigateSection('gallery')}
            className="hover:text-stone-950 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-emerald-600" />
            Dynamic Goods Gallery
          </button>
          <button
            onClick={() => onNavigateSection('campaign-spotlight')}
            className="hover:text-stone-950 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            Commercials & Ads
          </button>
          <button
            onClick={() => onNavigateSection('retailers')}
            className="hover:text-stone-950 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Store className="w-4 h-4 text-sky-600" />
            Store Locator
          </button>
          <button
            onClick={() => onNavigateSection('metrics')}
            className="hover:text-stone-950 transition-colors cursor-pointer"
          >
            Market Velocity
          </button>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Filter Input */}
          <div className="relative hidden sm:block w-48 md:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search FMCG goods..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-100 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sample Kit Box Drawer Trigger */}
          <button
            id="btn-sample-kit-drawer"
            onClick={onOpenSampleDrawer}
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800 transition-colors cursor-pointer shadow-xs"
            title="Open Sample Box"
          >
            <Package className="w-4 h-4 text-emerald-700" />
            <span className="hidden sm:inline">Sample Box</span>
            {sampleCount > 0 && (
              <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-black rounded-full bg-emerald-600 text-white">
                {sampleCount}
              </span>
            )}
          </button>

          {/* Trade / Retailer Sample CTA */}
          <button
            onClick={() => {
              onNavigateSection('gallery');
            }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-xs hover:shadow cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Explore Goods
          </button>
        </div>
      </div>
    </header>
  );
};
