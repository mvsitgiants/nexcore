import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, preSelectedProduct = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: preSelectedProduct || 'general',
    message: '',
    city: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (preSelectedProduct) {
      setFormData(prev => ({ ...prev, product: preSelectedProduct }));
    }
  }, [preSelectedProduct]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+()]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.city.trim()) newErrors.city = 'City/Location is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: 'general',
      message: '',
      city: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => { resetForm(); onClose(); }}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10 border border-slate-100"
        >
          {/* Top colored accent bar */}
          <div className="h-2 bg-gradient-to-r from-brand-blue to-brand-navy" />

          {/* Close button */}
          <button
            onClick={() => { resetForm(); onClose(); }}
            className="absolute top-4 right-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
            id="close-quote-btn"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSuccess ? (
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-brand-navy tracking-tight mb-2">
                Request a Custom Quote
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Fill in the details below. Our technical specialists will review your requirements and provide a detailed quotation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'
                      }`}
                      placeholder="e.g., Harpal Singh"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                        errors.city ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'
                      }`}
                      placeholder="e.g., Gonda, UP"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'
                      }`}
                      placeholder="e.g., client@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'
                      }`}
                      placeholder="10-digit number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Product / Engineering Solution
                  </label>
                  <select
                    value={formData.product}
                    onChange={e => setFormData({ ...formData, product: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="general">General Engineering Sourcing</option>
                    <option value="solar-panels">Solar Panel Systems</option>
                    <option value="submersible-pumps">Submersible Pumps & Motors</option>
                    <option value="industrial-motors">Three-Phase Industrial Motors</option>
                    <option value="agricultural-pumps">Agricultural Irrigation Solutions</option>
                    <option value="water-pumping">Complete Water Pumping Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Requirements Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="Briefly detail your HP requirement, well depth, pipe size, flow rate or solar space..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-medium py-3 px-4 shadow-lg shadow-brand-blue/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    id="submit-quote-btn"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Quotation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-8 text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6"
              >
                <CheckCircle2 className="h-10 w-10" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Request Received!
              </h3>
              <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
                Thank you, <span className="font-semibold">{formData.name}</span>. Your request for <span className="font-semibold text-brand-blue">{formData.product.replace('-', ' ')}</span> has been registered successfully.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 w-full text-left space-y-2 mb-6 border border-slate-100 text-xs text-slate-600">
                <p className="font-semibold text-slate-700">What happens next?</p>
                <p>1. Our engineering specialists will review your details.</p>
                <p>2. We will call you at <span className="font-semibold">{formData.phone}</span> to finalize custom specs.</p>
                <p>3. A complete commercial quote will be sent to <span className="font-semibold">{formData.email}</span>.</p>
              </div>

              <div className="flex gap-3 w-full">
                <button
                  onClick={() => { resetForm(); onClose(); }}
                  className="flex-1 rounded-xl border border-slate-200 py-2 text-slate-700 hover:bg-slate-50 font-medium transition text-sm cursor-pointer"
                >
                  Close Window
                </button>
                <a
                  href="https://wa.me/919565818068?text=Hello%20Nexcore%20Engineering,%20I%20just%20submitted%20a%20quote%20request%20for%20a%20solution.%20Please%20verify."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 transition text-sm flex items-center justify-center gap-1.5"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp Confirm</span>
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
