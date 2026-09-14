import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Trash2, 
  CheckCircle2, 
  Package, 
  Building2, 
  Mail, 
  MapPin, 
  Phone, 
  FileDown, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { FMCGProduct } from '../types';

interface SampleRequestDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: FMCGProduct[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  onBrowseMore: () => void;
}

export const SampleRequestDrawer: React.FC<SampleRequestDrawerProps> = ({
  isOpen,
  onClose,
  selectedProducts,
  onRemoveProduct,
  onClearAll,
  onBrowseMore
}) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [storeType, setStoreType] = useState('Specialty Grocery');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProducts.length === 0) return;

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#F59E0B', '#3B82F6']
      });
    } catch (err) {
      // ignore
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClearAll();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-stone-900 text-base">
                Retailer Sample Box
              </h3>
              <p className="text-[11px] text-stone-500 font-medium">
                Complimentary FMCG evaluation kits for store buyers & distributors
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {isSubmitted ? (
            /* Submission Success Screen */
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-stone-900 font-['Cabinet_Grotesk']">
                  Sample Box Dispatched!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{contactName || 'Buyer'}</strong>. Your complimentary sample box containing <strong>{selectedProducts.length} FMCG goods</strong> along with branded countertop display talkers has been scheduled for priority dispatch.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-left text-xs space-y-2">
                <div className="font-bold text-stone-900 flex items-center justify-between">
                  <span>Order Reference:</span>
                  <span className="font-mono text-emerald-700">#FMCG-SMPL-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="text-stone-500">
                  <span>Delivery Address:</span> {address || 'Direct Dispatch Warehouse'}
                </div>
                <div className="text-stone-500">
                  <span>Estimated Arrival:</span> 2-3 Business Days via FedEx Cold-Chain
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    alert('Downloading complete 2026 FMCG Brand Catalog & Sell Sheets PDF (Simulated).');
                  }}
                  className="w-full py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-xs font-bold text-stone-800 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <FileDown className="w-4 h-4 text-stone-600" />
                  <span>Download Digital Product Catalog & Sell Sheets (PDF)</span>
                </button>

                <button
                  onClick={resetForm}
                  className="w-full py-3 px-4 rounded-xl bg-stone-950 text-amber-400 text-xs font-extrabold hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Done & Close Box
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Product List in Sample Box */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Selected Goods ({selectedProducts.length}/4)
                  </span>
                  {selectedProducts.length > 0 && (
                    <button
                      onClick={onClearAll}
                      className="text-xs text-rose-600 hover:text-rose-800 font-semibold cursor-pointer"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {selectedProducts.length === 0 ? (
                  <div className="p-6 rounded-2xl border border-dashed border-stone-300 text-center space-y-3 bg-stone-50">
                    <Package className="w-8 h-8 text-stone-400 mx-auto" />
                    <p className="text-xs text-stone-500">
                      Your sample box is currently empty. Browse our goods gallery to add up to 4 complimentary products for evaluation.
                    </p>
                    <button
                      onClick={() => {
                        onClose();
                        onBrowseMore();
                      }}
                      className="px-4 py-2 rounded-xl bg-stone-900 text-amber-400 text-xs font-bold hover:bg-stone-800 cursor-pointer"
                    >
                      Browse Goods Gallery
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {selectedProducts.map((p) => (
                      <div
                        key={p.id}
                        className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3"
                      >
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-lg object-cover bg-white shrink-0 border border-stone-200"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-stone-900 text-xs truncate">
                            {p.name}
                          </h5>
                          <p className="text-[11px] text-stone-500 truncate">
                            {p.packSize} • {p.brandLine}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveProduct(p.id)}
                          className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sample Request Form */}
              {selectedProducts.length > 0 && (
                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-stone-200">
                  <div className="space-y-1">
                    <h4 className="text-xs font-black uppercase tracking-wider text-stone-900">
                      Wholesale & Retailer Shipping Details
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      We ship full-size shelf samples directly to commercial storefronts & corporate offices.
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Company / Store Name *</label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Green Meadow Supermarket or Erewhon Local"
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">Buyer Name *</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
                        />
                      </div>

                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">Retail Category *</label>
                        <select
                          value={storeType}
                          onChange={(e) => setStoreType(e.target.value)}
                          className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
                        >
                          <option value="Supermarket / Grocery">Supermarket / Grocery</option>
                          <option value="Specialty Food & Beverage">Specialty Food & Bev</option>
                          <option value="Apothecary & Personal Care">Beauty & Apothecary</option>
                          <option value="Distributor / Broker">Distributor / Broker</option>
                          <option value="Corporate / Office Pantry">Corporate Office Pantry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="buyer@retailer.com"
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Delivery Address *</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Suite, Street Address, City, State, ZIP"
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow transition-all cursor-pointer"
                  >
                    <span>Dispatch Free Evaluation Kit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
};
