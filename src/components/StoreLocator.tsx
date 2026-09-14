import React, { useState } from 'react';
import { 
  Store, 
  MapPin, 
  Search, 
  Navigation, 
  CheckCircle, 
  Clock, 
  Phone, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { RETAILER_STORES } from '../data/products';

export const StoreLocator: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [activeCity, setActiveCity] = useState('All');
  const [searchedCity, setSearchedCity] = useState('');

  const filteredStores = RETAILER_STORES.filter((store) => {
    if (activeCity !== 'All' && !store.city.toLowerCase().includes(activeCity.toLowerCase())) {
      return false;
    }
    if (searchedCity.trim()) {
      const q = searchedCity.toLowerCase();
      return (
        store.name.toLowerCase().includes(q) ||
        store.city.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedCity(zipInput);
  };

  return (
    <section id="retailers" className="py-16 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Store className="w-3.5 h-3.5" />
              Nationwide FMCG Retail Stockists
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-['Cabinet_Grotesk'] text-stone-900">
              Find Our Goods on Grocery & Store Shelves
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl font-normal">
              Available in over 14,200 supermarket aisles, natural health markets, and specialty food stores across North America.
            </p>
          </div>

          {/* Quick ZIP Search Form */}
          <form onSubmit={handleSearch} className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                placeholder="Enter ZIP code or City..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-stone-950 text-amber-400 rounded-xl text-xs font-extrabold hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="p-5 bg-stone-50 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="text-2xl p-2 rounded-xl bg-white shadow-xs border border-stone-200 inline-block">
                    {store.logo}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Navigation className="w-3 h-3" />
                    {store.distance}
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm leading-snug">
                    {store.name}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1">
                    {store.address}
                  </p>
                  <p className="text-xs text-stone-600 font-medium">
                    {store.city}
                  </p>
                </div>

                {/* Brands in Stock */}
                <div className="pt-2 border-t border-stone-200 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Product Lines In Stock:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {store.inStockBrands.map((b) => (
                      <span key={b} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className={`font-semibold flex items-center gap-1 ${store.isOpenNow ? 'text-emerald-600' : 'text-stone-400'}`}>
                  <Clock className="w-3.5 h-3.5" />
                  {store.isOpenNow ? 'Open Now' : 'Closed'}
                </span>

                <button
                  onClick={() => alert(`Directions to ${store.name} (${store.address}) opened in map viewer.`)}
                  className="font-bold text-stone-900 hover:text-amber-600 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Distributor Callout Banner */}
        <div className="p-6 rounded-3xl bg-stone-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-black font-['Cabinet_Grotesk'] text-stone-100">
              Are you a Retailer, Broker, or Supermarket Category Manager?
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
              Partner with Verve FMCG for high-margin shelf displays, guaranteed shelf-velocity buyback programs, and complimentary POS merchandising assets.
            </p>
          </div>

          <button
            onClick={() => alert('Opening Wholesale & UNFI / KeHE Distributor Partner Portal.')}
            className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-black uppercase tracking-wider shrink-0 transition-all cursor-pointer shadow-md"
          >
            Become a Retail Stockist
          </button>
        </div>

      </div>
    </section>
  );
};
