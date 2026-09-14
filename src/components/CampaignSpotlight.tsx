import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Play, 
  Pause, 
  Tv, 
  FileText, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Volume2,
  VolumeX,
  Megaphone
} from 'lucide-react';
import { CAMPAIGNS } from '../data/products';

interface CampaignSpotlightProps {
  onExploreProducts: () => void;
  onRequestSampleKit: () => void;
}

export const CampaignSpotlight: React.FC<CampaignSpotlightProps> = ({
  onExploreProducts,
  onRequestSampleKit
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(true);

  const activeCampaign = CAMPAIGNS[0];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    
    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#F59E0B', '#10B981', '#6366F1']
      });
    } catch (e) {
      // ignore
    }

    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  return (
    <section id="campaign-spotlight" className="py-16 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-stone-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5" />
              Integrated Advertising Campaign
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-['Cabinet_Grotesk'] text-stone-100">
              National Commercial Spotlight & Retail Promo
            </h2>
            <p className="text-stone-400 text-sm sm:text-base max-w-2xl font-normal">
              Explore our current multi-channel marketing campaigns airing across television, digital streaming, and point-of-sale retail displays.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-400">Campaign ID: <strong>SUMMER-2026-FMCG</strong></span>
          </div>
        </div>

        {/* Main Campaign Showcase Card */}
        <div className="bg-stone-800/80 rounded-3xl border border-stone-700/80 overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Commercial Video Mock Player */}
            <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[360px] bg-stone-950 overflow-hidden">
              <img
                src={activeCampaign.mediaUrl}
                alt={activeCampaign.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isPlaying ? 'scale-105 brightness-105' : 'brightness-90'
                }`}
              />

              {/* Video Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />

              {/* Top Meta Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-stone-900/90 text-amber-400 font-bold border border-amber-400/30 flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5" />
                  <span>{activeCampaign.subtitle}</span>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-900/80 text-stone-300 font-mono text-[11px]">
                  {activeCampaign.duration || '0:30'} • 4K HDR
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  title={isPlaying ? "Pause Commercial Mock" : "Play Commercial Mock"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-stone-950" />
                  ) : (
                    <Play className="w-7 h-7 fill-stone-950 ml-1" />
                  )}
                </button>
              </div>

              {/* Sound toggle & subtitle banner */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div className="bg-stone-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-800 max-w-sm">
                  <p className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    Official Script Hook
                  </p>
                  <p className="text-xs text-stone-200 italic mt-0.5">
                    "{activeCampaign.headline}"
                  </p>
                </div>

                <button
                  onClick={() => setIsAudioMuted(!isAudioMuted)}
                  className="p-2.5 rounded-xl bg-stone-950/80 hover:bg-stone-900 text-stone-300 hover:text-white border border-stone-700 transition-colors cursor-pointer"
                  title="Toggle Mock Audio"
                >
                  {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                </button>
              </div>
            </div>

            {/* Campaign Advertising Deliverables & Retail Coupon Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Featured Advertising Theme
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-100 font-['Cabinet_Grotesk'] mt-1">
                    {activeCampaign.title}
                  </h3>
                  <p className="text-sm text-stone-400 mt-2 leading-relaxed">
                    Designed to drive consumer foot-traffic to grocery aisles while communicating clean ingredient authenticity. Supported by digital influencer activations and endcap retail displays.
                  </p>
                </div>

                {/* Promotional Coupon Code Card */}
                <div className="p-4 rounded-2xl bg-stone-900 border border-amber-400/30 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Trade & Consumer Promo Code
                    </span>
                    <span className="text-xs font-mono font-bold bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">
                      {activeCampaign.discountPercentage}% OFF
                    </span>
                  </div>

                  <p className="text-xs text-stone-300">
                    Apply during retail stocking checkout or present digital voucher at participating retail customer service desks.
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex-1 px-3 py-2 bg-stone-950 rounded-xl border border-stone-700 font-mono text-xs font-black text-amber-400 tracking-wider select-all">
                      {activeCampaign.promoCode}
                    </div>
                    <button
                      onClick={() => handleCopyCode(activeCampaign.promoCode)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        copiedCode === activeCampaign.promoCode
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-400 hover:bg-amber-300 text-stone-950'
                      }`}
                    >
                      {copiedCode === activeCampaign.promoCode ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Campaign Metrics & Proof */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800 text-xs">
                    <span className="text-stone-400 block text-[10px] uppercase font-semibold">Projected Impressions</span>
                    <span className="font-extrabold text-stone-100 text-sm">48 Million</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800 text-xs">
                    <span className="text-stone-400 block text-[10px] uppercase font-semibold">Retail Endcaps Placed</span>
                    <span className="font-extrabold text-stone-100 text-sm">2,850 Stores</span>
                  </div>
                </div>
              </div>

              {/* Campaign Actions */}
              <div className="pt-4 border-t border-stone-700 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onExploreProducts}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow transition-all"
                >
                  <span>View Featured Goods</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onRequestSampleKit}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-stone-700 hover:bg-stone-600 text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                >
                  Download Media Kit & POS
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
