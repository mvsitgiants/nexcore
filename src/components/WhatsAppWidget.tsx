import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isSummary?: boolean;
}

export default function WhatsAppWidget({
  phoneNumber = '919565818068'
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0); // 0: Name, 1: Product, 2: Details, 3: Completed
  
  const [userData, setUserData] = useState({
    name: '',
    product: '',
    details: ''
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Helper to get formatted current time
  const getFormattedTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  // Initialize first message on mount
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: 'Hello! 👋 Welcome to Nexcore Engineering Sourcing. I am your assistant. To start your custom inquiry, may I know your full name?',
        timestamp: getFormattedTime()
      }
    ]);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, step]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    const time = getFormattedTime();
    
    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: time
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Handle bot conversational steps
    setTimeout(() => {
      const botTime = getFormattedTime();
      if (step === 0) {
        // Save Name and ask for Product
        setUserData(prev => ({ ...prev, name: text }));
        setStep(1);
        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `Pleasure to meet you, ${text}! What product category are you interested in?`,
            timestamp: botTime
          }
        ]);
      } else if (step === 2) {
        // Save Details and show Summary
        setUserData(prev => ({ ...prev, details: text }));
        setStep(3);
        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: 'Excellent. Here is a summary of your inquiry. Click the button below to instantly connect with our team on WhatsApp!',
            timestamp: botTime
          },
          {
            id: `summary-${Date.now()}`,
            sender: 'bot',
            text: '',
            timestamp: botTime,
            isSummary: true
          }
        ]);
      }
    }, 600);
  };

  const handleProductSelect = (productName: string) => {
    const time = getFormattedTime();
    
    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: productName,
      timestamp: time
    };

    setUserData(prev => ({ ...prev, product: productName }));
    setStep(2);
    setMessages(prev => [...prev, userMsg]);

    // Bot asks for requirements
    setTimeout(() => {
      const botTime = getFormattedTime();
      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Great choice. Please describe your specifications or installation location (e.g. 5 HP pump, 10kW solar system, or Gonda, UP).`,
          timestamp: botTime
        }
      ]);
    }, 600);
  };

  const sendToWhatsApp = () => {
    const formattedText = 
`*New Sourcing Inquiry*
--------------------------
👤 *Name:* ${userData.name}
📦 *Product:* ${userData.product}
🔧 *Details:* ${userData.details}
--------------------------
_Sent from Nexcore Solutions Website_`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset bot conversation back to step 0
    setTimeout(() => {
      setStep(0);
      setUserData({ name: '', product: '', details: '' });
      setMessages([
        {
          id: `reset-${Date.now()}`,
          sender: 'bot',
          text: 'Hello! 👋 Sourcing request sent. If you have another requirement, please let me know your name to start a new inquiry.',
          timestamp: getFormattedTime()
        }
      ]);
    }, 1000);
  };

  return (
    <div className="relative flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-14 right-0 w-[310px] sm:w-[350px] h-[440px] bg-[#efeae2] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200/50 z-50 origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-[#008069] text-white p-4 flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#008069] font-bold text-lg shadow-inner overflow-hidden border border-emerald-600/30">
                    <img 
                      src="/logo.png" 
                      alt="Nexcore Logo" 
                      className="h-8 w-8 object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#008069]" />
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm tracking-wide">Nexcore Sourcing</span>
                    <span className="bg-emerald-400 text-white rounded-full p-0.5 flex items-center justify-center w-3 h-3 shrink-0">
                      <Check className="h-2 w-2 stroke-[4]" />
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-100/90 flex items-center gap-1">
                    Online • Typically replies in minutes
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-black/10 flex items-center justify-center transition cursor-pointer text-emerald-100 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              className="flex-1 p-4 overflow-y-auto space-y-4 relative flex flex-col"
              style={{
                backgroundImage: 'radial-gradient(#0000000a 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            >
              {/* Security info note */}
              <div className="relative z-10 flex justify-center shrink-0">
                <span className="bg-[#ffeecd] text-[10px] text-amber-900 px-3 py-1.5 rounded-lg shadow-sm font-medium border border-amber-200/40 text-center max-w-[90%] leading-relaxed">
                  🔒 Conversational Assistant. Sending opens WhatsApp.
                </span>
              </div>

              {/* Message log */}
              <div className="flex-1 space-y-4">
                {messages.map((msg) => {
                  if (msg.isSummary) {
                    return (
                      <div key={msg.id} className="relative z-10 flex flex-col items-center justify-center my-2 max-w-[95%] mx-auto animate-fade-in">
                        <div className="bg-[#d9fdd3] text-slate-800 text-xs p-4 rounded-xl shadow-md border border-emerald-200 w-full space-y-2.5">
                          <p className="font-extrabold text-[#008069] border-b border-emerald-300/60 pb-1.5 uppercase text-[10px] tracking-wider">
                            Inquiry Summary
                          </p>
                          <div className="space-y-1.5 text-slate-700">
                            <p>👤 <strong className="text-slate-800">Name:</strong> {userData.name}</p>
                            <p>📦 <strong className="text-slate-800">Product:</strong> {userData.product}</p>
                            <p>🔧 <strong className="text-slate-800">Details:</strong> {userData.details}</p>
                          </div>
                          <button
                            onClick={sendToWhatsApp}
                            className="mt-3 w-full bg-[#00a884] hover:bg-[#008069] text-white font-bold py-2.5 px-3 rounded-lg shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Send to WhatsApp</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  }

                  const isBot = msg.sender === 'bot';
                  return (
                    <div key={msg.id} className={`relative z-10 flex items-start gap-2 max-w-[85%] ${isBot ? '' : 'ml-auto'}`}>
                      <div className={`${
                        isBot 
                          ? 'bg-white rounded-tl-none border-slate-100 text-slate-800' 
                          : 'bg-[#d9fdd3] rounded-tr-none border-emerald-100 text-slate-800 ml-auto'
                      } text-xs p-3 rounded-xl shadow-sm relative border`}>
                        <p className="leading-relaxed whitespace-pre-line">
                          {msg.text}
                        </p>
                        <span className="text-[9px] text-slate-400 block text-right mt-1.5">
                          {msg.timestamp}
                        </span>
                        
                        {/* Speech bubble arrow decoration */}
                        {isBot ? (
                          <svg className="absolute top-0 -left-2 text-white h-4 w-2 fill-current" viewBox="0 0 8 16">
                            <path d="M8,0 C8,0 3,1 0,4 C0,4 0,0 8,0 Z" />
                          </svg>
                        ) : (
                          <svg className="absolute top-0 -right-2 text-[#d9fdd3] h-4 w-2 fill-current" viewBox="0 0 8 16">
                            <path d="M0,0 C0,0 5,1 8,4 C8,4 8,0 0,0 Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Product Selection Options (only show when step is 1) */}
                {step === 1 && messages.length > 0 && messages[messages.length - 1].sender === 'bot' && (
                  <div className="relative z-10 flex flex-col gap-2 max-w-[85%] pl-2 animate-fade-in">
                    {[
                      '☀️ Solar Panel Modules',
                      '💧 Submersible Pumps',
                      '⚡ Industrial Motors',
                      '❓ General Sourcing'
                    ].map((prod) => (
                      <button
                        key={prod}
                        onClick={() => handleProductSelect(prod)}
                        className="bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#008069] border border-slate-200 hover:border-emerald-300 rounded-xl px-4 py-2.5 text-left text-xs font-semibold shadow-sm transition cursor-pointer hover:scale-[1.01]"
                      >
                        {prod}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div ref={chatEndRef} />
            </div>

            {/* Input Form Footer */}
            <form onSubmit={handleSendMessage} className="bg-[#f0f2f5] p-3 flex items-center gap-2 border-t border-slate-200 shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={step === 1 || step === 3}
                placeholder={
                  step === 0 
                    ? 'Type your name...' 
                    : step === 1 
                      ? 'Choose product type above...' 
                      : step === 2 
                        ? 'Type details or location...' 
                        : 'Submit details above!'
                }
                className="flex-1 bg-white disabled:bg-slate-100 disabled:text-slate-400 text-slate-800 rounded-xl px-4 py-2 text-sm outline-none border border-slate-200 focus:border-[#008069] shadow-sm transition placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || step === 1 || step === 3}
                className="h-9 w-9 rounded-full bg-[#00a884] disabled:bg-slate-300 text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition shrink-0 cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-12 w-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ${
          isOpen 
            ? 'bg-slate-800 text-white shadow-slate-900/20' 
            : 'bg-[#25D366] text-white shadow-[#25D366]/30'
        }`}
        title={isOpen ? "Close Chat" : "Chat with us on WhatsApp"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-5.5 w-5.5" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <MessageCircle className="h-5.5 w-5.5 fill-white/10" />
              {/* Small notification badge */}
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
