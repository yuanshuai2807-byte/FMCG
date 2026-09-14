import React from 'react';
import { TrendingUp, ShoppingCart, Award, Recycle, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BRAND_STATS, WHOLESALE_CATEGORIES } from '../data/products';

export const AdvertisingMetrics: React.FC = () => {
  return (
    <section id="metrics" className="py-16 bg-[#F5F4F0] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            Commercial Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight font-['Cabinet_Grotesk']">
            Proven Shelf Velocity & Consumer Repurchase
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We don't just formulate premium consumer packaged goods; we engineer commercial success for retail distributors through data-driven consumer loyalty.
          </p>
        </div>

        {/* 4 Key FMCG Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-400 block">
                {stat.label}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-stone-900 font-['Cabinet_Grotesk']">
                {stat.value}
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <TrendingUp className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Retail Wholesale Channels */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <h3 className="text-xl font-black text-stone-900 font-['Cabinet_Grotesk']">
              Distribution Channels & Grocery Sectors
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Engineered for seamless supply-chain distribution via UNFI, KeHE, Dot Foods, and Direct Store Delivery (DSD).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHOLESALE_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-extrabold text-stone-900 text-base">
                  {cat.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* FMCG Certifications Badge Banner */}
          <div className="pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-stone-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>USDA Certified Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Non-GMO Project Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Recycle className="w-4 h-4 text-blue-600" />
              <span>100% PCR Post-Consumer Recycled</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-purple-600" />
              <span>Certified B-Corporation 2026</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
