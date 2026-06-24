import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Toggler to view Office (Gonda, UP) vs Warehouse (Saket, Delhi) maps
  const [activeMapTab, setActiveMapTab] = useState<'office' | 'warehouse'>('office');

  const mapUrls = {
    office: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56885.34149692348!2d81.9329064115456!3d27.135456425146006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990ece64049b4db%3A0xb3de4340da75b3b!2sGonda%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719223345431!5m2!1sen!2sin',
    warehouse: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.21550882676!2d77.19946453912198!3d28.538101416301306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f7ff3f79ef%3A0x95cf5cb617cfd024!2sSaket%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1719223385203!5m2!1sen!2sin'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+()]/g, ''))) {
      newErrors.phone = 'Please provide a valid 10-digit number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 bg-brand-gray relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Contact Our Engineering Specialists
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Have questions about VFD drives, solar panel dimensions, or borewell discharge? Write to us, dial directly, or initiate a WhatsApp discussion with our team.
          </p>
          <div className="h-1.5 w-16 bg-brand-gold mx-auto rounded-full" />
        </div>

        {/* Contacts Core Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Address details, maps, fast call buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md space-y-6">


              {/* Direct Quick Info rows */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <a
                  href="mailto:nexcoreengineeringsolution@gmail.com"
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100 group"
                >
                  <div className="h-9 w-9 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                    <span className="font-semibold text-slate-700 truncate block group-hover:text-brand-blue">
                      nexcoreengineeringsolution@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-2.5 rounded-xl border border-transparent">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mobile Numbers</span>
                    <div className="flex flex-col gap-1.5">
                      <a href="tel:9565818068" className="font-semibold text-slate-700 hover:text-brand-blue block leading-none">
                        +91 9565818068
                      </a>
                      <a href="tel:9971028750" className="font-semibold text-slate-700 hover:text-brand-blue block leading-none">
                        +91 99710 28750
                      </a>
                      <a href="tel:9354529883" className="font-semibold text-slate-700 hover:text-brand-blue block leading-none">
                        +91 93545 29883
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-2.5 rounded-xl border border-transparent">
                  <div className="h-9 w-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Registered Office</span>
                    <span className="font-semibold text-slate-700 block mt-0.5">
                      Gonda, Uttar Pradesh, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-2.5 rounded-xl border border-transparent">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 text-brand-gold flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Strategic Warehouse</span>
                    <span className="font-semibold text-slate-700 block mt-0.5">
                      Saket, New Delhi, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant Call CTA Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <a
                  href="tel:9565818068"
                  className="rounded-xl bg-brand-blue hover:bg-brand-navy text-white text-center py-2.5 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                  id="direct-call-btn"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Directly</span>
                </a>
                <a
                  href="https://wa.me/919565818068?text=Hello%20Nexcore%20Engineering,%20I%20am%20interested%20in%20your%20products.%20Please%20guide."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2.5 text-xs font-bold transition flex items-center justify-center gap-1.5"
                  id="direct-whatsapp-btn"
                >
                  <MessageCircle className="h-3.5 w-3.5 fill-white/10" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href="mailto:nexcoreengineeringsolution@gmail.com?subject=Inquiry%20for%20Nexcore%20Engineering%20Solutions"
                  className="rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-center py-2.5 text-xs font-bold transition flex items-center justify-center gap-1.5"
                  id="direct-email-btn"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email Now</span>
                </a>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-md space-y-3 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Interactive Location Maps</span>
                <div className="flex rounded-lg bg-slate-100 p-0.5 border">
                  <button
                    onClick={() => setActiveMapTab('office')}
                    className={`rounded-md px-2.5 py-1 text-[11px] font-extrabold uppercase transition cursor-pointer ${
                      activeMapTab === 'office' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Office (UP)
                  </button>
                  <button
                    onClick={() => setActiveMapTab('warehouse')}
                    className={`rounded-md px-2.5 py-1 text-[11px] font-extrabold uppercase transition cursor-pointer ${
                      activeMapTab === 'warehouse' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Warehouse (Delhi)
                  </button>
                </div>
              </div>

              {/* Map Iframe frame */}
              <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-50 border relative flex-1">
                <iframe
                  title="Nexcore Site Map"
                  src={mapUrls[activeMapTab]}
                  className="w-full h-full border-none"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Custom Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md h-full flex flex-col justify-center">
              {!isSuccess ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy tracking-tight">
                      Send Quick Message
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1">
                      Fill out the engineering dispatch form. Our team guarantees a complete diagnostic review and callbacks within 2 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border px-3.5 py-3 text-sm focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'
                        }`}
                        placeholder="e.g., Harpal Singh"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full rounded-xl border px-3.5 py-3 text-sm focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'
                          }`}
                          placeholder="e.g., info@yourfarm.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full rounded-xl border px-3.5 py-3 text-sm focus:outline-none focus:ring-2 ${
                            errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'
                          }`}
                          placeholder="10-digit number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Detailed Message / Requirement Specifications (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        placeholder="Detail your submersible requirements (flow rates, HP), industrial machinery needs, or local solar panel rooftop space details..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-semibold py-3.5 px-4 shadow-lg shadow-brand-blue/15 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                        id="submit-contact-form"
                      >
                        {isSubmitting ? (
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Send Secure Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center p-8 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6"
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Your engineering inquiry has been registered. Our team will call you at <span className="font-semibold text-brand-blue">{formData.phone}</span> shortly.
                  </p>
                  <div className="bg-slate-50 rounded-xl p-4 w-full text-left space-y-2 mb-6 border border-slate-100 text-xs text-slate-600">
                    <p className="font-semibold text-slate-700">Inquiry Receipt Registered:</p>
                    <p>• Category: Engineering Product / Solvers Sizing</p>
                    <p>• Verification: Sent to nexcoreengineeringsolution@gmail.com</p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="rounded-xl border border-slate-200 px-6 py-2.5 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
