import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoHeader, LogoIcon } from './Logo';

interface HeaderProps {
  onRequestQuote: () => void;
}

export default function Header({ onRequestQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active highlighting
      const sections = ['home', 'about', 'products', 'brands', 'why-us', 'industries', 'process', 'testimonials', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Brands', href: '#brands', id: 'brands' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-md border-b border-slate-200/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center transition hover:opacity-90"
              id="header-logo"
            >
              <LogoHeader />
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors relative py-1 hover:text-brand-blue ${
                    activeSection === item.id ? 'text-brand-blue font-semibold' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA and Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="hidden sm:flex items-center gap-1.5 bg-brand-blue hover:bg-brand-navy text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-brand-blue/20 transition cursor-pointer"
                id="request-quote-nav-btn"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-brand-blue transition rounded-xl hover:bg-slate-50"
                id="mobile-menu-hamburger"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 z-30 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-40 p-6 flex flex-col lg:hidden border-l border-slate-100"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <LogoHeader />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-base font-semibold py-2.5 px-3 rounded-xl transition ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-brand-blue'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRequestQuote();
                  }}
                  className="w-full bg-brand-blue hover:bg-brand-navy text-white text-center font-semibold py-3 rounded-xl shadow-lg shadow-brand-blue/15 transition cursor-pointer"
                >
                  Request Quote
                </button>
                <div className="text-center">
                  <span className="text-xs text-slate-400">Gonda & Saket • Expert Sourcing</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
