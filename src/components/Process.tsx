import React, { useState } from 'react';
import { HelpCircle, Sparkles, Truck, Wrench, Headphones, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../types';

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const icons = [HelpCircle, Sparkles, Truck, Wrench, Headphones];

  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative lines in the backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_34px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Workflow Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            How We Work
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            From initial hydrology / power analysis to on-site commissioning and lifetime service, we maintain strict professional delivery at every junction.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Dynamic Responsive Timeline */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical central connection line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 z-0" />

          {/* Staggered Steps Container */}
          <div className="space-y-12 relative z-10">
            {PROCESS_STEPS.map((item, idx) => {
              const Icon = icons[idx] || HelpCircle;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredStep(item.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step details card */}
                   <div className="w-full md:w-1/2 pl-12 pr-12 md:pl-0 md:px-8">
                    <div
                      className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 relative ${
                        hoveredStep === item.step ? 'border-brand-blue/30 shadow-brand-blue/5' : ''
                      }`}
                    >
                      {/* Step Number Tag */}
                      <span className="absolute -top-3 left-6 bg-brand-gold text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                        STEP 0{item.step}
                      </span>

                      <div className="space-y-2 mt-2">
                        <h3 className="text-lg font-extrabold text-brand-navy tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon Node on the timeline */}
                  <div className="absolute left-6 md:left-1/2 h-12 w-12 rounded-full bg-brand-navy text-white flex items-center justify-center -translate-x-1/2 border-4 border-slate-50 z-20 shadow-md transition-all duration-300 transform hover:scale-110">
                    <Icon className="h-5 w-5 text-brand-gold stroke-[2]" />
                  </div>

                  {/* Empty spacer for horizontal structure layout */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline achievement callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <Check className="h-4 w-4 stroke-[3]" />
            <span>Guaranteed zero-downtime integration for existing sites</span>
          </div>
        </div>

      </div>
    </section>
  );
}
