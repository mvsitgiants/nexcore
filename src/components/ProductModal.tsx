import React from 'react';
import { X, Check, ShieldCheck, Tag, Target, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductType } from '../types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductType | null;
  onRequestQuote: (productId: string) => void;
}

export default function ProductModal({ isOpen, onClose, product, onRequestQuote }: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl z-10 border border-slate-100 flex flex-col"
        >
          {/* Top banner accent */}
          <div className="bg-brand-navy p-6 sm:p-8 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1.5 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition"
              id="close-product-btn"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                {product.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight pr-8">
              {product.title}
            </h3>
          </div>

          <div className="p-6 sm:p-8 space-y-6 flex-1">
            {/* Description */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">About the Product</h4>
              <p className="text-slate-600 text-sm leading-relaxed sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Split specifications and features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5 text-brand-blue" />
                  Key Features & Benefits
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5 text-brand-blue" />
                  Engineering Specifications
                </h4>
                <div className="border border-slate-100 rounded-xl overflow-hidden text-xs">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between p-2.5 ${
                        i % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                      } border-b border-slate-100 last:border-none`}
                    >
                      <span className="font-semibold text-slate-500">{spec.label}</span>
                      <span className="text-slate-800 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Applications & Warranty */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {/* Applications */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Primary Applications</h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warranty section */}
              <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100/40 flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-brand-blue shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-brand-navy text-sm">Official Manufacturer Warranty</h5>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    {product.warranty}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-b-2xl">
            <div className="text-center sm:text-left">
              <p className="text-xs text-slate-500">Need specific custom sizing?</p>
              <p className="text-sm font-semibold text-brand-navy">Consult our experts directly.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                Back to Products
              </button>
              <button
                onClick={() => {
                  onRequestQuote(product.id);
                  onClose();
                }}
                className="flex-1 sm:flex-initial rounded-xl bg-brand-blue hover:bg-brand-navy text-white px-5 py-2.5 text-sm font-medium shadow-md shadow-brand-blue/15 transition flex items-center justify-center gap-1.5 cursor-pointer"
                id="modal-request-quote-btn"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
