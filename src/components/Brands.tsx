import React from 'react';
import { ShieldAlert, Award, Star } from 'lucide-react';
import { BRANDS_DATA } from '../types';

export default function Brands() {
  
  // Duplicate the list of brands to guarantee a perfect continuous visual wrap
  const doubledBrands = [...BRANDS_DATA, ...BRANDS_DATA, ...BRANDS_DATA];

  return (
    <section id="brands" className="py-16 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
            Authorized Distributor & Supplier
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Leading Engineering Brands We Partner With
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Direct factory-sealed shipments from Indias most reliable and certified pumping and motor giants.
          </p>
          <div className="h-1 w-12 bg-brand-gold mx-auto rounded" />
        </div>

        {/* Brand Horizontal Scroller Container */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Left/Right blur vignettes for premium visual transition */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

          {/* Scrolling ticker track */}
          <div className="animate-ticker flex gap-6 items-center">
            {doubledBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 h-24 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/40 hover:bg-white/10 transition-all duration-300 p-4 flex flex-col justify-center items-center text-center cursor-pointer group"
              >
                {/* Brand Logo Text Representation */}
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-brand-gold group-hover:scale-110 transition shrink-0" />
                  <span className="font-extrabold text-base tracking-tight text-white group-hover:text-brand-gold transition duration-200">
                    {brand.name}
                  </span>
                </div>
                
                {/* Subtitle */}
                <span className="text-[10px] font-bold tracking-wider text-slate-400 mt-1 uppercase text-center truncate max-w-full">
                  {brand.name === 'Texmo' ? 'Taro Authorized' : 'Genuine Sourcing'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate trust guarantee footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All shipments carry authentic manufacturer stamps, serial tracking numbers and full warranty cards.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
