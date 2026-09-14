import React, { useState, useMemo } from 'react';
import { 
  FMCGProduct, 
  ProductCategory, 
  ProductTag, 
  ProductBadge 
} from '../types';
import { 
  LayoutGrid, 
  Columns, 
  Table, 
  SlidersHorizontal, 
  Sparkles, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  Check, 
  Eye, 
  PackagePlus, 
  Search, 
  RotateCcw,
  ShieldCheck,
  Tag,
  Store,
  Layers
} from 'lucide-react';

interface DynamicGalleryProps {
  products: FMCGProduct[];
  onOpenProductDetail: (product: FMCGProduct) => void;
  onAddSample: (product: FMCGProduct) => void;
  sampleItemIds: string[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenStoreLocator: () => void;
}

type ViewMode = 'grid' | 'lookbook' | 'table' | 'spotlight';

export const DynamicGallery: React.FC<DynamicGalleryProps> = ({
  products,
  onOpenProductDetail,
  onAddSample,
  sampleItemIds,
  searchQuery,
  onSearchChange,
  onOpenStoreLocator
}) => {
  // Gallery display states
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedBadge, setSelectedBadge] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'name'>('featured');
  const [hoveredImageIndices, setHoveredImageIndices] = useState<Record<string, number>>({});
  const [spotlightIndex, setSpotlightIndex] = useState<number>(0);

  // Categories list with count calculation
  const categories: ProductCategory[] = [
    'All',
    'Beverages',
    'Snacks & Pantry',
    'Personal Care',
    'Home & Eco',
    'Dairy & Cold Brew'
  ];

  const availableTags: ProductTag[] = [
    'Organic',
    'Zero Sugar',
    'Vegan',
    'Non-GMO',
    'Eco-Friendly',
    'Gluten-Free',
    'Plastic-Free',
    'Fair Trade'
  ];

  const availableBadges: (ProductBadge | 'All')[] = [
    'All',
    'Best Seller',
    'New Launch',
    'Award Winner',
    'Staff Pick'
  ];

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'All' && product.category !== selectedCategory) {
          return false;
        }
        // Tag filter
        if (selectedTag !== 'All' && !product.tags.includes(selectedTag as ProductTag)) {
          return false;
        }
        // Badge filter
        if (selectedBadge !== 'All' && product.badge !== selectedBadge) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchBrand = product.brandLine.toLowerCase().includes(q);
          const matchTagline = product.tagline.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchTags = product.tags.some(t => t.toLowerCase().includes(q));
          const matchRetailers = product.retailers.some(r => r.toLowerCase().includes(q));
          return matchName || matchBrand || matchTagline || matchDesc || matchTags || matchRetailers;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0; // featured default
      });
  }, [products, selectedCategory, selectedTag, selectedBadge, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedTag('All');
    setSelectedBadge('All');
    onSearchChange('');
    setSortBy('featured');
  };

  const hasActiveFilters = 
    selectedCategory !== 'All' || 
    selectedTag !== 'All' || 
    selectedBadge !== 'All' || 
    searchQuery !== '';

  return (
    <section id="gallery" className="py-12 lg:py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Dynamic FMCG Product Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 font-['Cabinet_Grotesk']">
              Commercial Goods Gallery
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl font-normal">
              Explore our curated portfolio of fast-moving consumer packaged goods. Filter by dietary credentials, examine nutritional specifications, and order complimentary retail sample boxes.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl self-start md:self-auto shrink-0 shadow-inner">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('lookbook')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'lookbook'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Lookbook Editorial View"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Lookbook</span>
            </button>
            <button
              onClick={() => setViewMode('spotlight')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'spotlight'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Spotlight Carousel View"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Spotlight</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Trade Buyer Specification Table"
            >
              <Table className="w-3.5 h-3.5" />
              <span>B2B Specs</span>
            </button>
          </div>
        </div>

        {/* Dynamic Filter Controls Panel */}
        <div className="space-y-4">
          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? products.length 
                : products.filter(p => p.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-stone-950 text-amber-400 shadow-sm scale-102'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Filter & Sort Controls Row */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
            
            {/* Tag / Dietary Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-stone-400 font-bold uppercase text-[10px] tracking-wider mr-1 flex items-center gap-1">
                <Tag className="w-3 h-3" /> Filter By:
              </span>

              {/* Tag Dropdown / Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setSelectedTag('All')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    selectedTag === 'All'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  All Tags
                </button>
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? 'All' : tag)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      selectedTag === tag
                        ? 'bg-emerald-700 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Badge Filter & Sorting */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {/* Badge Filter */}
              <select
                value={selectedBadge}
                onChange={(e) => setSelectedBadge(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer"
              >
                <option value="All">All Badges</option>
                {availableBadges.filter(b => b !== 'All').map(badge => (
                  <option key={badge} value={badge}>{badge}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer"
              >
                <option value="featured">Sort: Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Product Name (A-Z)</option>
              </select>

              {/* Reset Filters button if applied */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-bold cursor-pointer"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter / Filter Feedback */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium px-1">
          <div>
            Showing <strong className="text-stone-900">{filteredProducts.length}</strong> of {products.length} FMCG products
            {selectedCategory !== 'All' && <span> in <strong className="text-stone-900">{selectedCategory}</strong></span>}
            {selectedTag !== 'All' && <span> tagged <strong className="text-stone-900">"{selectedTag}"</strong></span>}
            {searchQuery && <span> matching <strong className="text-stone-900">"{searchQuery}"</strong></span>}
          </div>
          <div className="hidden sm:flex items-center gap-3 text-stone-400">
            <span>• Complies with FDA & USDA Standards</span>
            <span>• Direct Retail Distribution</span>
          </div>
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">No goods match your filters</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              We couldn't find any FMCG products matching the currently selected category, tags, or search keywords.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-stone-900 text-amber-400 font-bold text-xs hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* VIEW MODE 1: STANDARD COMMERCIAL CARD GRID */}
        {viewMode === 'grid' && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const activeImgIndex = hoveredImageIndices[product.id] ?? 0;
              const displayImg = product.galleryImages[activeImgIndex] || product.imageUrl;
              const isSampleAdded = sampleItemIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-stone-300 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Dynamic Gallery Dots */}
                  <div className="relative aspect-square bg-stone-100 overflow-hidden cursor-pointer"
                    onClick={() => onOpenProductDetail(product)}
                  >
                    <img
                      src={displayImg}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs ${
                        product.badge === 'Best Seller' ? 'bg-amber-600' :
                        product.badge === 'New Launch' ? 'bg-emerald-600' :
                        product.badge === 'Award Winner' ? 'bg-indigo-600' :
                        product.badge === 'Staff Pick' ? 'bg-purple-600' :
                        'bg-stone-700'
                      }`}>
                        {product.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold shadow-xs">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Gallery Preview Thumbnail Dots (shows angles on hover) */}
                    {product.galleryImages.length > 1 && (
                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1 rounded-full bg-black/40 backdrop-blur-xs">
                        {product.galleryImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setHoveredImageIndices(prev => ({ ...prev, [product.id]: idx }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                              activeImgIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                            }`}
                            title={`View Angle ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Quick View Hover Button */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-2 rounded-xl bg-white/95 text-stone-900 font-extrabold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-stone-700" />
                        Quick View & Specs
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-stone-400 font-semibold">
                        <span>{product.brandLine}</span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{product.rating}</span>
                          <span className="text-stone-400 font-normal">({product.reviewCount})</span>
                        </div>
                      </div>

                      <h3 
                        onClick={() => onOpenProductDetail(product)}
                        className="font-extrabold text-stone-900 text-sm leading-snug hover:text-amber-600 transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Product Tags */}
                    <div className="flex flex-wrap gap-1">
                      {product.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-100 text-stone-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {product.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-stone-100 text-stone-400">
                          +{product.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Packaging & MSRP info */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span className="text-[11px] font-mono text-stone-400">{product.packSize.split('(')[0]}</span>
                      <span className="font-bold text-stone-900">${product.price.toFixed(2)} <span className="text-[10px] text-stone-400 font-normal">MSRP</span></span>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-1 flex items-center gap-2">
                      <button
                        onClick={() => onAddSample(product)}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isSampleAdded
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
                        }`}
                      >
                        {isSampleAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Sample Box</span>
                          </>
                        ) : (
                          <>
                            <PackagePlus className="w-3.5 h-3.5 text-amber-400" />
                            <span>Request Sample</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onOpenProductDetail(product)}
                        className="p-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600 transition-colors cursor-pointer"
                        title="View Full Specifications"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: EDITORIAL LOOKBOOK */}
        {viewMode === 'lookbook' && filteredProducts.length > 0 && (
          <div className="space-y-8">
            {filteredProducts.map((product, index) => {
              const isEven = index % 2 === 0;
              const isSampleAdded = sampleItemIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-6 relative aspect-4/3 lg:aspect-auto lg:h-[420px] bg-stone-100 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-stone-950/80 backdrop-blur-md text-amber-400">
                          {product.badge}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-stone-900">
                          {product.category}
                        </span>
                      </div>

                      {/* Advertising Hook Quote Ribbon */}
                      <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md p-3 rounded-xl border border-stone-700/80 text-white">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                          Commercial Tagline
                        </p>
                        <p className="text-xs italic font-medium mt-0.5">
                          {product.advertisingSnippet}
                        </p>
                      </div>
                    </div>

                    {/* Editorial Details Column */}
                    <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                          {product.brandLine}
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight font-['Cabinet_Grotesk']">
                          {product.name}
                        </h3>
                        <p className="text-sm text-stone-500 font-medium">
                          {product.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {product.description}
                      </p>

                      {/* USPs & Taste Profile */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                          Aroma & Flavor Profile
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.tasteOrAromaProfile?.map((note) => (
                            <span key={note} className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold">
                              🌿 {note}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specs Row */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-stone-100 text-xs">
                        <div>
                          <span className="text-stone-400 block text-[10px] uppercase font-semibold">Pack Size</span>
                          <span className="font-bold text-stone-800">{product.packSize.split('(')[0]}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[10px] uppercase font-semibold">MSRP</span>
                          <span className="font-bold text-stone-900">${product.price.toFixed(2)}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[10px] uppercase font-semibold">Shelf Life</span>
                          <span className="font-bold text-stone-800">{product.shelfLife}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[10px] uppercase font-semibold">Rating</span>
                          <span className="font-bold text-amber-600">★ {product.rating}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={() => onAddSample(product)}
                          className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                            isSampleAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-stone-950 hover:bg-stone-800 text-white'
                          }`}
                        >
                          {isSampleAdded ? <Check className="w-4 h-4" /> : <PackagePlus className="w-4 h-4 text-amber-400" />}
                          <span>{isSampleAdded ? 'Added to Sample Kit' : 'Order Free Retail Sample'}</span>
                        </button>

                        <button
                          onClick={() => onOpenProductDetail(product)}
                          className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs font-bold transition-colors cursor-pointer"
                        >
                          View Full Specs & Retailers
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 3: SPOTLIGHT CAROUSEL */}
        {viewMode === 'spotlight' && filteredProducts.length > 0 && (
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {(() => {
              const currentSpotlight = filteredProducts[spotlightIndex % filteredProducts.length];
              const isSampleAdded = sampleItemIds.includes(currentSpotlight.id);

              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Spotlight Image with Multiple Angles Switcher */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="relative aspect-square sm:aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                      <img
                        src={currentSpotlight.imageUrl}
                        alt={currentSpotlight.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-stone-950 text-amber-400 shadow">
                        {currentSpotlight.badge}
                      </div>
                    </div>

                    {/* Secondary Angle Thumbnails */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-1">
                      {currentSpotlight.galleryImages.map((img, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 rounded-xl overflow-hidden border-2 border-stone-200 shrink-0 cursor-pointer hover:border-amber-500 transition-colors"
                          onClick={() => onOpenProductDetail(currentSpotlight)}
                        >
                          <img src={img} alt="Angle" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Spotlight Content */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                        Spotlight {spotlightIndex + 1} of {filteredProducts.length}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSpotlightIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1))}
                          className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                          title="Previous Good"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setSpotlightIndex((prev) => (prev + 1) % filteredProducts.length)}
                          className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                          title="Next Good"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-stone-400">
                        {currentSpotlight.brandLine} • {currentSpotlight.category}
                      </p>
                      <h3 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight font-['Cabinet_Grotesk'] mt-1">
                        {currentSpotlight.name}
                      </h3>
                      <p className="text-sm font-semibold text-amber-600 mt-1">
                        {currentSpotlight.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {currentSpotlight.description}
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Formulation Highlights
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentSpotlight.usps.map((usp, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-stone-700 bg-stone-50 p-2 rounded-lg border border-stone-100">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{usp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <button
                        onClick={() => onAddSample(currentSpotlight)}
                        className={`px-6 py-3 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                          isSampleAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-stone-950 hover:bg-stone-800 text-white shadow-md'
                        }`}
                      >
                        {isSampleAdded ? <Check className="w-4 h-4" /> : <PackagePlus className="w-4 h-4 text-amber-400" />}
                        <span>{isSampleAdded ? 'In Sample Box' : 'Add to Retailer Sample Kit'}</span>
                      </button>

                      <button
                        onClick={() => onOpenProductDetail(currentSpotlight)}
                        className="px-5 py-3 rounded-xl border border-stone-200 hover:bg-stone-100 text-xs font-bold text-stone-800 transition-colors cursor-pointer"
                      >
                        View Full Specs
                      </button>
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>
        )}

        {/* VIEW MODE 4: B2B TRADE & SPECIFICATION TABLE */}
        {viewMode === 'table' && filteredProducts.length > 0 && (
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-stone-600">
                <thead className="bg-stone-100/80 text-stone-700 text-[11px] font-bold uppercase tracking-wider border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">FMCG Product</th>
                    <th className="py-3 px-3">SKU & Category</th>
                    <th className="py-3 px-3">Pack Size</th>
                    <th className="py-3 px-3">Case Pack</th>
                    <th className="py-3 px-3">MSRP</th>
                    <th className="py-3 px-3">Shelf Life</th>
                    <th className="py-3 px-3">Retail Partners</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-medium">
                  {filteredProducts.map((product) => {
                    const isSampleAdded = sampleItemIds.includes(product.id);

                    return (
                      <tr key={product.id} className="hover:bg-stone-50/80 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              referrerPolicy="no-referrer"
                              className="w-10 h-10 rounded-lg object-cover bg-stone-100 shrink-0"
                            />
                            <div>
                              <div 
                                onClick={() => onOpenProductDetail(product)}
                                className="font-bold text-stone-900 hover:text-amber-600 cursor-pointer"
                              >
                                {product.name}
                              </div>
                              <span className="text-[10px] text-stone-400 font-medium">{product.brandLine}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <div className="font-mono text-[11px] text-stone-500">{product.sku}</div>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">
                            {product.category}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-medium text-stone-800">
                          {product.packSize}
                        </td>
                        <td className="py-3 px-3">
                          {product.casePack}
                        </td>
                        <td className="py-3 px-3">
                          <span className="font-bold text-stone-900">${product.price.toFixed(2)}</span>
                          <span className="text-[10px] text-stone-400 block line-through">${product.msrp.toFixed(2)}</span>
                        </td>
                        <td className="py-3 px-3">
                          {product.shelfLife}
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex flex-wrap gap-1 max-w-[140px]">
                            {product.retailers.slice(0, 2).map((r) => (
                              <span key={r} className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700">
                                {r}
                              </span>
                            ))}
                            {product.retailers.length > 2 && (
                              <span className="text-[10px] text-stone-400">+{product.retailers.length - 2}</span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => onOpenProductDetail(product)}
                              className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-600 cursor-pointer"
                              title="View Specs"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => onAddSample(product)}
                              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                                isSampleAdded
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-stone-900 text-white hover:bg-stone-800'
                              }`}
                            >
                              {isSampleAdded ? 'Added' : '+ Sample'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
