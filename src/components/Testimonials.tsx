import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../types';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden text-white">
      {/* Decorative colored glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
            Customer Success Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Trusted by Enterprise Leaders & Farmers
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See how Nexcore Engineering delivers power, efficiency, and cost savings across sugar factories, housing estates, and massive field irrigation installations.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Testimonials Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="glass-card-dark rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative group"
              >
                {/* Quotation mark decoration */}
                <Quote className="absolute top-6 right-8 h-12 w-12 text-white/5 group-hover:text-brand-gold/10 transition duration-300 pointer-events-none" />

                <div className="space-y-4">
                  {/* Category badge & Rating */}
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-blue/40 text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-brand-blue/50">
                      {item.tag}
                    </span>
                    
                    {/* Star Row */}
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                  </div>

                  {/* Body text */}
                  <p className="text-slate-200 text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>

                {/* Profile detail */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 rounded-full border border-white/20 object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold tracking-tight text-white">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase mt-0.5">
                      {item.role}, <span className="text-brand-gold">{item.company}</span>
                    </p>
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
