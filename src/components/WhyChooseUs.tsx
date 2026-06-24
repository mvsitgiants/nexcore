import React from 'react';
import { ShieldCheck, Truck, Headphones, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { CHOOSE_US_DATA } from '../types';

export default function WhyChooseUs() {
  const cardData = [
    {
      ...CHOOSE_US_DATA[0],
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      badge: 'Certified'
    },
    {
      ...CHOOSE_US_DATA[1],
      icon: Truck,
      color: 'text-brand-blue bg-blue-50 border-blue-100',
      badge: 'Rapid Logistics'
    },
    {
      ...CHOOSE_US_DATA[2],
      icon: Headphones,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      badge: 'Expert Engineers'
    },
    {
      ...CHOOSE_US_DATA[3],
      icon: UserCheck,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      badge: '99% Score'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-brand-gray relative overflow-hidden">
      {/* Visual background anchors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Why Partner With Nexcore
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Our Core Strategic Advantages
          </h2>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Visual subtle corner gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent group-hover:from-blue-50 transition duration-300 pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    {/* Icon circular badge */}
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${card.color} shadow-sm`}>
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy tracking-tight group-hover:text-brand-blue transition">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-brand-blue uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Learn Sourcing Standard</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5 stroke-[2.5]">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
