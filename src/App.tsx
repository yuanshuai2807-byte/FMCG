/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroAdvertisingBanner } from './components/HeroAdvertisingBanner';
import { DynamicGallery } from './components/DynamicGallery';
import { CampaignSpotlight } from './components/CampaignSpotlight';
import { StoreLocator } from './components/StoreLocator';
import { AdvertisingMetrics } from './components/AdvertisingMetrics';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SampleRequestDrawer } from './components/SampleRequestDrawer';
import { Footer } from './components/Footer';
import { FMCG_PRODUCTS } from './data/products';
import { FMCGProduct } from './types';
import { CheckCircle2, Package } from 'lucide-react';

export default function App() {
  const [sampleProducts, setSampleProducts] = useState<FMCGProduct[]>([
    FMCG_PRODUCTS[0], // Pre-populate with hero Yuzu sparkling can
    FMCG_PRODUCTS[2]  // Pre-populate with Ancient Grain Granola
  ]);
  const [isSampleDrawerOpen, setIsSampleDrawerOpen] = useState<boolean>(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState<FMCGProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddSample = (product: FMCGProduct) => {
    if (sampleProducts.some((p) => p.id === product.id)) {
      // Remove from sample kit if already present
      setSampleProducts((prev) => prev.filter((p) => p.id !== product.id));
      showToast(`Removed "${product.name}" from your sample box.`);
    } else {
      if (sampleProducts.length >= 4) {
        showToast('Sample box limit reached (4 items max). Open your box to dispatch.');
        setIsSampleDrawerOpen(true);
        return;
      }
      setSampleProducts((prev) => [...prev, product]);
      showToast(`Added "${product.name}" to your sample box!`);
    }
  };

  const handleRemoveSample = (productId: string) => {
    setSampleProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearSamples = () => {
    setSampleProducts([]);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#191C1B] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col selection:bg-amber-400 selection:text-stone-950">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-3 px-4 py-3 bg-stone-950 text-white rounded-2xl shadow-2xl border border-stone-800 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Primary Brand & Advertising Navbar */}
      <Navbar
        sampleCount={sampleProducts.length}
        onOpenSampleDrawer={() => setIsSampleDrawerOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        {/* Commercial Advertising Hero Banner */}
        <HeroAdvertisingBanner
          onExploreGallery={() => handleNavigateSection('gallery')}
          onOpenProductDetail={(productId) => {
            const p = FMCG_PRODUCTS.find((item) => item.id === productId);
            if (p) setSelectedProductDetail(p);
          }}
          onRequestSample={(productId) => {
            const p = FMCG_PRODUCTS.find((item) => item.id === productId);
            if (p) {
              handleAddSample(p);
              setIsSampleDrawerOpen(true);
            }
          }}
        />

        {/* Dynamic Goods Gallery Showcase */}
        <DynamicGallery
          products={FMCG_PRODUCTS}
          onOpenProductDetail={(product) => setSelectedProductDetail(product)}
          onAddSample={handleAddSample}
          sampleItemIds={sampleProducts.map((p) => p.id)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenStoreLocator={() => handleNavigateSection('retailers')}
        />

        {/* Television & Digital Advertising Campaign Showcase */}
        <CampaignSpotlight
          onExploreProducts={() => handleNavigateSection('gallery')}
          onRequestSampleKit={() => setIsSampleDrawerOpen(true)}
        />

        {/* FMCG Velocity & Repurchase Track Record */}
        <AdvertisingMetrics />

        {/* Store Locator & Retail Distribution Stockists */}
        <StoreLocator />
      </main>

      {/* Brand Footer with Certifications and Wholesale Contact */}
      <Footer />

      {/* Product Detail Lightbox Modal */}
      {selectedProductDetail && (
        <ProductDetailModal
          product={selectedProductDetail}
          onClose={() => setSelectedProductDetail(null)}
          onAddSample={handleAddSample}
          isSampleAdded={sampleProducts.some((p) => p.id === selectedProductDetail.id)}
          onOpenStoreLocator={() => {
            setSelectedProductDetail(null);
            handleNavigateSection('retailers');
          }}
        />
      )}

      {/* Retailer Sample Request Drawer */}
      <SampleRequestDrawer
        isOpen={isSampleDrawerOpen}
        onClose={() => setIsSampleDrawerOpen(false)}
        selectedProducts={sampleProducts}
        onRemoveProduct={handleRemoveSample}
        onClearAll={handleClearSamples}
        onBrowseMore={() => handleNavigateSection('gallery')}
      />

      {/* Floating Sample Kit Badge Trigger for Mobile */}
      <div className="fixed bottom-5 left-5 z-40 sm:hidden">
        <button
          onClick={() => setIsSampleDrawerOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-950 text-white shadow-xl border border-stone-800 text-xs font-bold cursor-pointer"
        >
          <Package className="w-4 h-4 text-amber-400" />
          <span>Sample Box ({sampleProducts.length})</span>
        </button>
      </div>

    </div>
  );
}
