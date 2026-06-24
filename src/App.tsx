import React, { useState } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular Imports
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Modals
import ProductModal from './components/ProductModal';
import QuoteModal from './components/QuoteModal';

import { ProductType } from './types';

export default function App() {
  // Modal togglers
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState('');
  
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<ProductType | null>(null);

  // Scroll visibility for floating helper
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerQuoteModal = (productId = '') => {
    setSelectedQuoteProduct(productId);
    setIsQuoteOpen(true);
  };

  const triggerProductModal = (product: ProductType) => {
    setActiveProduct(product);
    setIsProductOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Header Navigation */}
      <Header onRequestQuote={() => triggerQuoteModal('')} />

      {/* 2. Hero Presentation */}
      <Hero onRequestQuote={() => triggerQuoteModal('')} />

      {/* 3. Corporate profile details */}
      <About />

      {/* 4. Interactive inventory showcase */}
      <Products
        onLearnMore={triggerProductModal}
        onRequestQuote={triggerQuoteModal}
      />

      {/* 5. Brand horizontally scrolling loop */}
      <Brands />

      {/* 6. Why choose us strategic grid */}
      <WhyChooseUs />

      {/* 7. Target market sectors */}
      <Industries />

      {/* 8. Precision workflow steps timeline */}
      <Process />

      {/* 9. Verified Glassmorphism reviews */}
      <Testimonials />

      {/* 10. Installations and warehouse Gallery */}
      <Gallery />

      {/* 11. Fully validating contact channels */}
      <Contact />

      {/* 12. Enterprise footer directory */}
      <Footer />

      {/* --- Overlay Modal triggers --- */}
      <ProductModal
        isOpen={isProductOpen}
        onClose={() => setIsProductOpen(false)}
        product={activeProduct}
        onRequestQuote={triggerQuoteModal}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preSelectedProduct={selectedQuoteProduct}
      />

      {/* --- Floating Quick Sourcing Widgets --- */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        
        {/* Scroll To Top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={handleScrollToTop}
              className="h-12 w-12 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-lg border border-slate-100 hover:scale-110 transition duration-200 cursor-pointer"
              title="Scroll to top"
              id="floating-top-widget"
            >
              <ArrowUp className="h-5.5 w-5.5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Call Trigger (mobile/desktop) */}
        <a
          href="tel:9565818068"
          className="h-12 w-12 rounded-full bg-brand-blue hover:bg-brand-navy text-white flex items-center justify-center shadow-lg shadow-brand-blue/30 hover:scale-110 transition duration-200 cursor-pointer"
          title="Call Nexcore Engineering"
          id="floating-call-widget"
        >
          <Phone className="h-5.5 w-5.5 fill-white/10" />
        </a>

        {/* WhatsApp Chat Widget */}
        <WhatsAppWidget />
      </div>

    </div>
  );
}
