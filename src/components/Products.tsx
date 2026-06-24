import React from 'react';
import { ArrowRight, Sun, Zap, HelpCircle, Flame, Droplets, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS_DATA, ProductType } from '../types';

interface ProductsProps {
  onLearnMore: (product: ProductType) => void;
  onRequestQuote: (productId: string) => void;
}

export default function Products({ onLearnMore, onRequestQuote }: ProductsProps) {
  
  // Custom high-fidelity SVG graphics representing the products
  const renderProductGraphic = (id: string) => {
    switch (id) {
      case 'solar-panels':
        return (
          <div className="relative h-44 w-full rounded-t-2xl overflow-hidden bg-gradient-to-tr from-slate-900 to-blue-950 flex items-center justify-center p-4">
            {/* Sun flare in background */}
            <div className="absolute top-2 right-6 w-24 h-24 bg-amber-400/25 rounded-full blur-2xl animate-pulse" />
            <svg viewBox="0 0 200 120" className="w-40 h-28 relative z-10 drop-shadow-xl">
              {/* Solar Panel drawing */}
              <rect x="25" y="15" width="150" height="90" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
              {/* Blue silicon fields */}
              <rect x="30" y="20" width="44" height="37" fill="#0B3D91" rx="1.5" />
              <rect x="78" y="20" width="44" height="37" fill="#0B3D91" rx="1.5" />
              <rect x="126" y="20" width="44" height="37" fill="#0B3D91" rx="1.5" />
              
              <rect x="30" y="62" width="44" height="38" fill="#0B3D91" rx="1.5" />
              <rect x="78" y="62" width="44" height="38" fill="#0B3D91" rx="1.5" />
              <rect x="126" y="62" width="44" height="38" fill="#0B3D91" rx="1.5" />
              {/* Silver grids */}
              <line x1="25" y1="59" x2="175" y2="59" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="76" y1="15" x2="76" y2="105" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="124" y1="15" x2="124" y2="105" stroke="#cbd5e1" strokeWidth="1" />
            </svg>
            <div className="absolute bottom-3 left-3 bg-brand-gold text-slate-900 text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1">
              <Sun className="h-3 w-3 fill-slate-900" />
              <span>25Y WARRANTY</span>
            </div>
          </div>
        );
      case 'submersible-pumps':
        return (
          <div className="relative h-44 w-full rounded-t-2xl overflow-hidden bg-gradient-to-tr from-slate-800 to-sky-950 flex items-center justify-center p-4">
            {/* Water currents behind */}
            <div className="absolute inset-x-0 bottom-4 flex justify-around opacity-20">
              <span className="text-sky-300 font-mono text-xs select-none">FLOW</span>
              <span className="text-sky-300 font-mono text-xs select-none">HIGH HEAD</span>
            </div>
            <svg viewBox="0 0 200 120" className="w-36 h-28 relative z-10 drop-shadow-xl">
              {/* Stainless vertical pump cylinder */}
              <rect x="80" y="10" width="40" height="95" rx="5" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
              <line x1="80" y1="35" x2="120" y2="35" stroke="#94a3b8" strokeWidth="2" />
              <line x1="80" y1="60" x2="120" y2="60" stroke="#94a3b8" strokeWidth="2" />
              {/* Blue collar base */}
              <rect x="76" y="85" width="48" height="20" rx="2" fill="#0B3D91" />
              {/* Golden suction filter mesh */}
              <rect x="85" y="65" width="30" height="10" fill="#F5B400" rx="1" />
              {/* Water flow line around */}
              <path d="M50,90 Q70,90 75,50 T125,20" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10" />
            </svg>
            <div className="absolute bottom-3 left-3 bg-brand-blue text-white text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1">
              <Droplets className="h-3 w-3" />
              <span>100% SS304</span>
            </div>
          </div>
        );
      case 'industrial-motors':
        return (
          <div className="relative h-44 w-full rounded-t-2xl overflow-hidden bg-gradient-to-tr from-slate-900 to-indigo-950 flex items-center justify-center p-4">
            <svg viewBox="0 0 200 120" className="w-36 h-28 relative z-10 drop-shadow-xl">
              {/* Main heavy motor casting */}
              <rect x="55" y="25" width="90" height="70" rx="8" fill="#334155" stroke="#64748b" strokeWidth="2" />
              {/* Ribbed thermodynamic fins */}
              <line x1="68" y1="25" x2="68" y2="95" stroke="#475569" strokeWidth="4" />
              <line x1="82" y1="25" x2="82" y2="95" stroke="#475569" strokeWidth="4" />
              <line x1="96" y1="25" x2="96" y2="95" stroke="#475569" strokeWidth="4" />
              <line x1="110" y1="25" x2="110" y2="95" stroke="#475569" strokeWidth="4" />
              <line x1="124" y1="25" x2="124" y2="95" stroke="#475569" strokeWidth="4" />
              {/* High-speed rotor shaft */}
              <rect x="145" y="52" width="20" height="16" rx="2" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
              {/* Terminal box on top */}
              <rect x="80" y="12" width="36" height="14" rx="2" fill="#0B3D91" stroke="#062B6F" strokeWidth="1" />
              {/* Drive pulley ring */}
              <circle cx="155" cy="60" r="14" fill="none" stroke="#F5B400" strokeWidth="2" strokeDasharray="6 4" className="animate-[spin_5s_linear_infinite]" />
            </svg>
            <div className="absolute bottom-3 left-3 bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1">
              <Zap className="h-3 w-3" />
              <span>IE3 EFFICIENCY</span>
            </div>
          </div>
        );
      case 'agricultural-pumps':
        return (
          <div className="relative h-44 w-full rounded-t-2xl overflow-hidden bg-gradient-to-tr from-slate-900 to-emerald-950 flex items-center justify-center p-4">
            <svg viewBox="0 0 200 120" className="w-38 h-28 relative z-10 drop-shadow-xl">
              {/* Centrifugal Monoblock scroll casing */}
              <circle cx="85" cy="65" r="32" fill="#0F766E" stroke="#115E59" strokeWidth="2" />
              <circle cx="85" cy="65" r="14" fill="none" stroke="#14B8A6" strokeWidth="3" />
              {/* Suction eye inlet (facing us) */}
              <circle cx="85" cy="65" r="6" fill="#1e293b" />
              {/* Discharge nozzle pointing upward */}
              <path d="M100,45 L115,20 L130,20 L115,45 Z" fill="#0F766E" stroke="#115E59" strokeWidth="2" />
              {/* Combined coupled motor casing */}
              <rect x="35" y="45" width="45" height="40" rx="4" fill="#334155" stroke="#475569" strokeWidth="1.5" />
              {/* Spray droplets */}
              <circle cx="130" cy="15" r="2.5" fill="#60a5fa" opacity="0.8" />
              <circle cx="145" cy="22" r="1.5" fill="#93c5fd" opacity="0.6" />
            </svg>
            <div className="absolute bottom-3 left-3 bg-emerald-500 text-slate-900 text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              <span>WIDE VOLTAGE</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="relative h-44 w-full bg-slate-100 flex items-center justify-center">
            <HelpCircle className="h-12 w-12 text-slate-300" />
          </div>
        );
    }
  };

  return (
    <section id="products" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative lighting elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full">
            Our Core Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            High-Performance Engineering Solutions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Sourced from top manufacturers. Click Learn More for complete dimensional blueprints, heads vs discharge charts, and electrical spec tables.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_DATA.map((product) => {
            
            // Map customized features list based on categories
            let highlightPoints: string[] = [];
            if (product.id === 'solar-panels') {
              highlightPoints = ['High Efficiency', 'Long Life', 'Weather Resistant', 'Energy Saving'];
            } else if (product.id === 'submersible-pumps') {
              highlightPoints = ['Durable Construction', 'High Performance', 'Low Maintenance', 'Efficient Water Delivery'];
            } else if (product.id === 'industrial-motors') {
              highlightPoints = ['Heavy Duty', 'Reliable Performance', 'Energy Efficient', 'Industrial Grade'];
            } else {
              highlightPoints = ['Farming Applications', 'Irrigation Systems', 'Water Management', 'Cost Effective'];
            }

            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 flex flex-col h-full justify-between group"
              >
                <div>
                  {/* Visual Spliced Vector */}
                  {renderProductGraphic(product.id)}

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold tracking-wider text-brand-blue uppercase bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-bold text-brand-navy tracking-tight group-hover:text-brand-blue transition">
                        {product.category}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {product.shortDesc}
                      </p>
                    </div>

                    {/* Features checklist block */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {highlightPoints.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-2.5 w-2.5 stroke-[3]">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 pt-0 bg-slate-50/50 border-t border-slate-100/50 flex gap-2">
                  <button
                    onClick={() => onLearnMore(product)}
                    className="flex-1 rounded-xl border border-slate-200 bg-white hover:border-brand-blue hover:text-brand-blue text-xs font-bold py-2.5 transition text-center cursor-pointer"
                    id={`learn-more-${product.id}`}
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => onRequestQuote(product.id)}
                    className="flex-1 rounded-xl bg-brand-blue hover:bg-brand-navy text-white text-xs font-bold py-2.5 transition flex items-center justify-center gap-1 cursor-pointer"
                    id={`request-quote-${product.id}`}
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
