import React from 'react';
import { Home, Building2, Factory, Droplets, Sun, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { INDUSTRIES_DATA } from '../types';

export default function Industries() {
  const iconMap: Record<string, React.ComponentType<any>> = {
    agriculture: Leaf,
    residential: Home,
    commercial: Building2,
    industrial: Factory,
    'water-management': Droplets,
    'renewable-energy': Sun
  };

  const colorMap: Record<string, { border: string; bg: string; text: string }> = {
    agriculture: { border: 'border-emerald-100', bg: 'bg-emerald-50/60', text: 'text-emerald-700' },
    residential: { border: 'border-blue-100', bg: 'bg-blue-50/60', text: 'text-brand-blue' },
    commercial: { border: 'border-indigo-100', bg: 'bg-indigo-50/60', text: 'text-indigo-700' },
    industrial: { border: 'border-slate-200', bg: 'bg-slate-50', text: 'text-slate-700' },
    'water-management': { border: 'border-sky-100', bg: 'bg-sky-50/60', text: 'text-sky-700' },
    'renewable-energy': { border: 'border-amber-100', bg: 'bg-amber-50/60', text: 'text-brand-gold' }
  };

  return (
    <section id="industries" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full">
            Sectors We Empower
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Delivering robust energy engineering, solar setups, and fluid flow dynamics specifically sized and customized for peak performance across six global sectors.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Industries Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind, index) => {
            const Icon = iconMap[ind.id] || Factory;
            const theme = colorMap[ind.id] || { border: 'border-slate-100', bg: 'bg-slate-50', text: 'text-slate-600' };

            return (
              <motion.div
                key={ind.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Micro decorative abstract grid background inside the card */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-slate-50 rounded-full group-hover:scale-150 transition-all duration-500 opacity-50 z-0 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    {/* Rounded Icon */}
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center border ${theme.border} ${theme.bg} ${theme.text} shadow-sm`}>
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Sector 0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-brand-navy tracking-tight group-hover:text-brand-blue transition">
                      {ind.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                {/* Bullet tags representing core applications inside this industry */}
                <div className="pt-6 mt-6 border-t border-slate-100 relative z-10 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Systems Supplied:</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {ind.features.map((feat, fIdx) => (
                      <span key={fIdx} className="bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-medium px-2.5 py-1 rounded-full">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
