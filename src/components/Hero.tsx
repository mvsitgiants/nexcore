import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  Shield, 
  Award, 
  Briefcase, 
  Headphones, 
  ShieldCheck, 
  Truck, 
  UserCheck, 
  Settings, 
  Check 
} from 'lucide-react';
import { motion } from 'motion/react';

// Brand Logos Styled Inline Elements matching their real logos
const CRILogo = () => (
  <div className="flex items-center select-none font-sans">
    <span className="h-7 w-7 rounded-full bg-[#D32F2F] flex items-center justify-center text-white font-black text-[9px] border border-red-700 tracking-tighter">CRI</span>
  </div>
);

const TexmoLogo = () => (
  <span className="font-extrabold text-sm tracking-tight text-red-700 uppercase select-none font-sans">TEXMO</span>
);

const KirloskarLogo = () => (
  <div className="flex items-center gap-0.5 select-none font-sans">
    <span className="text-[#00875A] font-extrabold text-xs">K</span>
    <span className="text-[#00875A] font-extrabold text-sm tracking-tight">Kirloskar</span>
  </div>
);

const CromptonLogo = () => (
  <span className="font-extrabold text-sm tracking-tight text-[#0B3D91] font-sans select-none">Crompton</span>
);

const VGuardLogo = () => (
  <div className="flex items-center gap-1 select-none font-sans">
    <span className="font-black text-xs tracking-wider text-slate-800 uppercase">V-GUARD</span>
  </div>
);

const ShaktiLogo = () => (
  <div className="flex items-center gap-1 select-none font-sans">
    <span className="font-black text-sm tracking-tighter text-[#0B3D91] uppercase">SHAKTI</span>
  </div>
);

const LubiLogo = () => (
  <span className="border border-blue-600 px-2 py-0.5 font-bold text-xs text-blue-600 bg-blue-50/50 rounded select-none font-sans">Lubi</span>
);

const HavellsLogo = () => (
  <span className="font-black text-sm tracking-tight text-red-600 select-none font-sans">HAVELLS</span>
);

const OswalLogo = () => (
  <div className="flex items-center gap-1 select-none font-sans">
    <div className="h-4.5 w-4.5 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold text-[8px] leading-none">O</div>
    <span className="font-black text-[10px] tracking-tighter text-red-600 uppercase">OSWAL</span>
  </div>
);

const KSBLogo = () => (
  <div className="flex items-center gap-0.5 select-none font-sans">
    <span className="font-black text-sm tracking-tight text-blue-800 uppercase">KSB</span>
    <div className="h-2 w-2 rounded-full bg-blue-800"></div>
  </div>
);

interface HeroProps {
  onRequestQuote: () => void;
}

export default function Hero({ onRequestQuote }: HeroProps) {
  const handleScrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#products');
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative z-10 overflow-hidden pt-28 pb-12 md:pt-28 md:pb-16 bg-cover bg-right lg:bg-center bg-no-repeat bg-slate-50"
      style={{ backgroundImage: "url('/herobackground.png')" }}
    >
      {/* Premium Readability Overlay for Mobile Devices */}
      <div className="absolute inset-0 bg-white/85 sm:bg-white/70 lg:bg-transparent pointer-events-none z-0" />

      {/* Soft Ambient Light Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content & Brands */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <Shield className="h-3.5 w-3.5 text-[#0B3D91] fill-blue-100" />
              <span>Certified Engineering Distributor</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-[52px] font-extrabold text-brand-navy tracking-tight leading-[1.15]"
              >
                India’s Trusted Partner <br />
                for <span className="text-[#0B3D91] bg-gradient-to-r from-[#0B3D91] to-blue-600 bg-clip-text text-transparent">Solar Panels, Submersible Pumps & Industrial Motors</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
              >
                Delivering reliable water and energy solutions for agriculture, residential and industrial applications across India.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onRequestQuote}
                className="rounded-xl bg-[#0B3D91] hover:bg-[#062B6F] text-white font-bold py-3.5 px-7 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                id="hero-primary-cta"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#products"
                onClick={handleScrollToProducts}
                className="rounded-xl bg-white border-2 border-[#0B3D91] hover:bg-slate-50 text-[#0B3D91] font-bold py-3.5 px-7 transition shadow-sm text-sm flex items-center justify-center gap-2"
                id="hero-secondary-cta"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Brand Ticker Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-1">
        <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase text-center lg:text-left">
          Our Trusted Brands
        </p>
      </div>

      {/* Brand Ticker (Full Screen Width) */}
      <div className="w-full bg-transparent py-4 border-t border-b border-slate-300/10 relative overflow-hidden select-none mb-6">
        {/* Left/Right blur vignettes for premium visual transition */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/20 to-transparent z-10 pointer-events-none" />

        {/* Scrolling ticker track */}
        <div className="animate-ticker flex gap-16 items-center">
          {[
            CRILogo, TexmoLogo, KirloskarLogo, CromptonLogo, VGuardLogo,
            ShaktiLogo, LubiLogo, HavellsLogo, OswalLogo, KSBLogo,
            CRILogo, TexmoLogo, KirloskarLogo, CromptonLogo, VGuardLogo,
            ShaktiLogo, LubiLogo, HavellsLogo, OswalLogo, KSBLogo
          ].map((LogoComponent, index) => {
            const Component = LogoComponent;
            return (
              <React.Fragment key={index}>
                <div className="flex-shrink-0 scale-120 hover:scale-125 transition-transform duration-200">
                  <Component />
                </div>
                <div className="h-5 w-[1px] bg-slate-300/30 shrink-0 mx-2" />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Stats & Features Container (re-wrapped inside max-w-7xl) */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mb-16 lg:-mb-20 translate-y-10 lg:translate-y-14">
        
        {/* 1. Stat Counter Block (Glassy Blue Bar) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative z-10 bg-gradient-to-r from-[#062B6F] to-[#0B3D91] border border-blue-800/40 rounded-3xl shadow-xl shadow-blue-950/20 text-white overflow-hidden p-6 lg:p-8"
        >
          <div className="grid grid-cols-4 gap-4 items-center">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4 lg:px-4">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none">500+</p>
                <p className="text-xs font-bold text-blue-100 uppercase tracking-wide mt-1.5 leading-none">Satisfied Customers</p>
                <p className="text-[10px] text-blue-200/70 mt-1 leading-none">Across India</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 lg:px-4 lg:border-l lg:border-white/10">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none">10+</p>
                <p className="text-xs font-bold text-blue-100 uppercase tracking-wide mt-1.5 leading-none">Leading Brands</p>
                <p className="text-[10px] text-blue-200/70 mt-1 leading-none">We Deal In</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 lg:px-4 lg:border-l lg:border-white/10">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none">100+</p>
                <p className="text-xs font-bold text-blue-100 uppercase tracking-wide mt-1.5 leading-none">Projects Delivered</p>
                <p className="text-[10px] text-blue-200/70 mt-1 leading-none">Successfully</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 lg:px-4 lg:border-l lg:border-white/10">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none">24/7</p>
                <p className="text-xs font-bold text-blue-100 uppercase tracking-wide mt-1.5 leading-none">Expert Support</p>
                <p className="text-[10px] text-blue-200/70 mt-1 leading-none">Always Available</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. Features Bar (White Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative z-10 mt-6 bg-white border border-slate-100 rounded-3xl shadow-md p-6 overflow-hidden"
        >
          <div className="grid grid-cols-4 gap-4 items-center">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-4 lg:px-4">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0B3D91] shrink-0">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-800 leading-none">100% Genuine Products</p>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-none">Original & Certified</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 lg:px-4 lg:border-l lg:border-slate-100">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0B3D91] shrink-0">
                <Truck className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-800 leading-none">Fast Delivery</p>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-none">On Time, Every Time</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 lg:px-4 lg:border-l lg:border-slate-100">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0B3D91] shrink-0">
                <UserCheck className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-800 leading-none">Expert Support</p>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-none">Technical Guidance</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 lg:px-4 lg:border-l lg:border-slate-100">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0B3D91] shrink-0">
                <Settings className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-800 leading-none">After-Sales Service</p>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-none">Reliable & Hassle Free</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
