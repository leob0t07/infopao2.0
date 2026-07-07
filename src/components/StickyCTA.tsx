import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShoppingCart } from "lucide-react";

interface StickyCTAProps {
  onCtaClick: () => void;
}

export default function StickyCTA({ onCtaClick }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 500 pixels
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-brand-green/10 p-4 shadow-2xl flex md:hidden items-center justify-between gap-4"
        >
          {/* Product and Price tag */}
          <div className="text-left">
            <p className="font-title font-bold text-xs text-brand-text flex items-center gap-1">
              Mesa Sem Glúten
            </p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[10px] text-brand-text/50">Por apenas</span>
              <span className="text-base font-bold text-brand-green font-title">R$ 9,99</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={onCtaClick}
            id="sticky-cta-mobile-btn"
            className="flex-1 bg-brand-green active:bg-brand-darkgreen text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-green/20"
          >
            <ShoppingCart className="w-4 h-4 text-brand-gold fill-brand-gold/10" />
            <span>QUERO COMEÇAR AGORA</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
