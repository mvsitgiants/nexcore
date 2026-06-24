import React, { useState } from 'react';
import { Layers, ZoomIn, Eye, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA, GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'solar' | 'pump' | 'industrial'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Solar Installations', value: 'solar' },
    { label: 'Pumping Systems', value: 'pump' },
    { label: 'Industrial Machinery', value: 'industrial' }
  ];

  const imageUrls: Record<string, string> = {
    g1: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800', // solar panels
    g2: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800', // engineering pump setup
    g3: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800', // industry motors / workshop
    g4: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800', // solar irrigation fields
    g5: 'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800', // water pressure pipeline valves
    g6: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&q=80&w=800', // factory heavy industrial machinery
  };

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      {/* Soft light effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full">
            Engineering Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Our Installations & Showcases
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            A visual overview of commissioned grid-tied rooftop solar systems, agricultural irrigation channels, and massive electric induction motor units.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Filter Navigation Tab */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as any)}
              className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry/Flex Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const imgUrl = imageUrls[item.id] || imageUrls.g1;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                  className="group rounded-2xl overflow-hidden relative aspect-4/3 bg-slate-100 shadow-md hover:shadow-2xl border border-slate-100 cursor-zoom-in"
                >
                  {/* Photo zoom wrapper */}
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={imgUrl}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Gradient bottom overlay hover screen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
                    <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded">
                        {item.category === 'solar' ? 'Solar Installation' : item.category === 'pump' ? 'Pump System' : 'Heavy Industrial'}
                      </span>
                      <h3 className="text-base font-extrabold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-brand-gold font-bold uppercase tracking-wider pt-2">
                        <Eye className="h-3.5 w-3.5" />
                        <span>Inspect Installation</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Elegant Gallery Enlargement Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white overflow-hidden shadow-2xl z-10 border border-slate-100 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/10 bg-slate-900">
                <img
                  src={imageUrls[selectedItem.id] || imageUrls.g1}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 rounded-full p-1.5 bg-slate-900/60 text-white hover:bg-slate-900 transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Text Description inside Lightbox */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {selectedItem.category === 'solar' ? 'Solar Installation' : selectedItem.category === 'pump' ? 'Submersible Pump Grid' : 'Heavy Industrial'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                    <ShieldCheck className="h-4 w-4 fill-emerald-50" />
                    <span>Verified Installation Site</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedItem.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center flex-wrap gap-4">
                  <span className="text-xs text-slate-400">Direct distributor delivery guaranteed</span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-50 text-xs font-bold transition cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
