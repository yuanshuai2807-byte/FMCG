import React, { useState } from 'react';
import { Mail, Check, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-black text-lg">
                V
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-['Cabinet_Grotesk']">
                VERVE FMCG
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Next-generation Fast-Moving Consumer Goods (FMCG) enterprise. Creating craveable organic refreshments, functional morning rituals, clean personal care, and zero-plastic home goods.
            </p>

            <div className="pt-2 text-xs text-stone-500 space-y-1">
              <p>Headquarters: 200 Mission St, San Francisco, CA</p>
              <p>Distribution Hubs: Chicago, Dallas, Reno, Atlanta</p>
              <p>Wholesale Portal: trade@vervefmcg.com</p>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consumer Goods
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Botanical Sparkling Cans</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Single Origin Cold Brews</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Ancient Sprouted Granolas</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Bio-Enzyme Dish Tablets</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Dermatological Sun Mists</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Retail & Media
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li><a href="#campaign-spotlight" className="hover:text-amber-400 transition-colors">Commercial TV Spots</a></li>
              <li><a href="#retailers" className="hover:text-amber-400 transition-colors">Store Locator & Stockists</a></li>
              <li><a href="#metrics" className="hover:text-amber-400 transition-colors">Scan Velocity & Sales Data</a></li>
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Free Buyer Sample Kit</a></li>
              <li><a href="#campaign-spotlight" className="hover:text-amber-400 transition-colors">Media Kit & Sell Sheets</a></li>
            </ul>
          </div>

          {/* Newsletter / Trade Updates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trade & Consumer News
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Subscribe for new FMCG product launches, promotional retailer coupons, and trade show announcements.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter work or personal email"
                  className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder:text-stone-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} VERVE FMCG Brands International Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Distribution</span>
            <span className="hover:text-stone-400 cursor-pointer">Retailer Portal</span>
            <span className="hover:text-stone-400 cursor-pointer">Accessibility</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
