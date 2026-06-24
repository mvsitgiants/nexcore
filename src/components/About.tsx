import React from 'react';
import { Award, ShieldCheck, Cpu, Headphones, BadgePercent, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const highlights = [
    {
      title: 'Trusted Supplier',
      desc: 'Formally integrated as a premium procurement partner for high-scale electrical & mechanical systems.',
      icon: Award,
      color: 'bg-blue-50 text-brand-blue border-blue-100',
    },
    {
      title: 'Genuine Products',
      desc: 'Sourcing exclusively from world-class certified factories with authentic tracking paperwork.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Engineering Expertise',
      desc: 'Sizing analysis, VFD configurations, and dynamic head-range computations by expert engineers.',
      icon: Cpu,
      color: 'bg-amber-50 text-brand-gold border-amber-100',
    },
    {
      title: 'Reliable Service Network',
      desc: 'Rapid on-site mechanical diagnosis, prompt spares delivery, and official warranty support.',
      icon: Headphones,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      title: 'Competitive Pricing',
      desc: 'Special wholesale rates, bulk distribution quotes, and commercial project support.',
      icon: BadgePercent,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    }
  ];

  const valuePoints = [
    '25-Year warranty support on premium Solar Arrays',
    'Comprehensive range from 0.5 HP to 50 HP Submersible Pumps',
    'IE3 & IE4 standard AC motors for reduced power overheads',
    'Active distribution warehouse networks in Delhi & Uttar Pradesh'
  ];

  return (
    <section id="about" className="pt-24 pb-20 bg-white relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full">
            Corporate Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            About Nexcore Engineering Solutions
          </h2>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight leading-snug">
              Powering Progress with Premium Sourcing and Certified Engineering Excellence
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nexcore Engineering Solutions is committed to delivering reliable and innovative energy and pumping solutions. We partner with leading manufacturers to provide high-quality solar panels, submersible pumps and industrial motors across India.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Whether you are an agriculturalist building a remote grid-free irrigation layout, a developer structuring a modern residential complex, or a plant director optimizing high-torque conveyor motors, Nexcore ensures high efficiency, lower operational downtime, and optimal machinery lifespans.
            </p>

            {/* Micro checklist of core value propositions */}
            <div className="space-y-2.5 pt-4">
              {valuePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-white rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Circle Icon Badge */}
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${item.color} shadow-sm`}>
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-navy tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
