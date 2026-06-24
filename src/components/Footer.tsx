import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { LogoIcon } from './Logo';

export default function Footer() {
  
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollToSection = (e: React.MouseEvent, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: 'Home Dashboard', href: '#home' },
    { label: 'Corporate Profile', href: '#about' },
    { label: 'Product Inventory', href: '#products' },
    { label: 'Our Brands', href: '#brands' },
    { label: 'Sectors Served', href: '#industries' },
    { label: 'Project Gallery', href: '#gallery' },
    { label: 'Get in Touch', href: '#contact' }
  ];

  const productsShortcuts = [
    { label: 'Solar Panel Modules', href: '#products' },
    { label: 'Submersible Pumps', href: '#products' },
    { label: 'Three-Phase Motors', href: '#products' },
    { label: 'Agricultural Solvers', href: '#products' },
    { label: 'Water Pressure Booster', href: '#products' }
  ];

  const brandsShortcuts = [
    { label: 'C.R.I. Pumps', href: '#brands' },
    { label: 'Texmo Taro', href: '#brands' },
    { label: 'Kirloskar Brothers', href: '#brands' },
    { label: 'Crompton Greaves', href: '#brands' },
    { label: 'Shakti Solar Pumps', href: '#brands' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 relative border-t border-slate-900 overflow-hidden">
      {/* Abstract vector background layout */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Upper Column arrays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1: Company Profile Logo */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-3 transition hover:opacity-90"
            >
              <img
                src="/logo.png"
                alt="Nexcore Logo"
                className="h-10 sm:h-12 object-contain"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight leading-none">
                  NEXCORE
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-none mt-1">
                  ENGINEERING SOLUTIONS
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
              Nexcore Engineering Solutions is a premier distributor and installer specializing in advanced solar energy modules, robust heavy-duty submersible motors, and high-efficiency three-phase AC induction drives.
            </p>
            <div className="flex gap-2.5">
              <a href="#" className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-brand-blue text-slate-500 hover:text-white flex items-center justify-center transition border border-slate-800">
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-brand-blue text-slate-500 hover:text-white flex items-center justify-center transition border border-slate-800">
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-brand-blue text-slate-500 hover:text-white flex items-center justify-center transition border border-slate-800">
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-brand-blue text-slate-500 hover:text-white flex items-center justify-center transition border border-slate-800">
                <Youtube className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="hover:text-brand-gold transition duration-150 flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product categories */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Solutions</h4>
            <ul className="space-y-2 text-xs">
              {productsShortcuts.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="hover:text-brand-gold transition duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Manufacturers shortcuts */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Strategic Brands</h4>
            <ul className="space-y-2 text-xs">
              {brandsShortcuts.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="hover:text-brand-gold transition duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Sourcing contacts */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3.5 text-xs text-slate-500">
              <li className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Gonda Office, UP<br />
                  Saket Warehouse, Delhi
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:9565818068" className="hover:text-white transition">+91 9565818068</a>
                  <a href="tel:9971028750" className="hover:text-white transition">+91 99710 28750</a>
                  <a href="tel:9354529883" className="hover:text-white transition">+91 93545 29883</a>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <a href="mailto:nexcoreengineeringsolution@gmail.com" className="hover:text-white transition break-all leading-relaxed">
                  nexcoreengineeringsolution@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left pr-10 sm:pr-0">
            <p>© 2026 Nexcore Engineering Solutions. All Rights Reserved.</p>
            <span className="hidden sm:inline text-slate-800">|</span>
            <p>
              Designed & Developed by{' '}
              <a
                href="https://www.mvsitgiant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-gold font-medium transition"
              >
                MVS IT Giant
              </a>
            </p>
          </div>
          
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-slate-700">|</span>
            <button
              onClick={handleScrollToTop}
              className="h-9 w-9 rounded-xl bg-slate-900 hover:bg-brand-blue text-brand-gold hover:text-white flex items-center justify-center transition border border-slate-800 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
