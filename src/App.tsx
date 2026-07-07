/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

// Sub-components
import HeroSection from "./components/HeroSection";
import ChallengeSection from "./components/ChallengeSection";
import TruthSection from "./components/TruthSection";
import WhySection from "./components/WhySection";
import ProductPromoSection from "./components/ProductPromoSection";
import ImagineWeekSection from "./components/ImagineWeekSection";
import FullMenuSection from "./components/FullMenuSection";
import MoreThanRecipesSection from "./components/MoreThanRecipesSection";
import FamilySection from "./components/FamilySection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import FooterSection from "./components/FooterSection";
import StickyCTA from "./components/StickyCTA";
import UpsellModal from "./components/UpsellModal";

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  // Smooth scroll handler
  const handleScrollToPricing = () => {
    const section = document.getElementById("pricing-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Open checkout or upsell with correct parameters
  const handleOpenCheckout = (planName: string, price: number) => {
    if (price === 9) {
      setIsUpsellOpen(true);
    } else {
      window.location.href = "https://pay.cakto.com.br/ttadqb9";
    }
  };

  const handleAcceptUpsell = () => {
    window.location.href = "https://pay.cakto.com.br/ttadqb9";
  };

  const handleDeclineUpsell = () => {
    window.location.href = "https://pay.cakto.com.br/xtrakpo_953780";
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans antialiased selection:bg-brand-green/20 selection:text-brand-darkgreen">
      
      {/* 1. PREMIUM HEADER / TOP-BAR */}
      <header className="sticky top-0 z-40 bg-brand-bg/90 backdrop-blur-md border-b border-brand-green/5 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo brand */}
          <div className="flex items-center gap-2">
            <span className="font-title font-bold text-sm md:text-base tracking-wider text-brand-darkgreen uppercase">
              Mesa Sem Glúten
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-brand-text/75">
            <a href="#challenge-intro" onClick={(e) => {
              e.preventDefault();
              document.querySelector(".bg-white")?.scrollIntoView({ behavior: "smooth" });
            }} className="hover:text-brand-green transition-colors">
              O Desafio
            </a>
            <a href="#proportion-method" onClick={(e) => {
              e.preventDefault();
              document.querySelector(".bg-brand-darkgreen")?.scrollIntoView({ behavior: "smooth" });
            }} className="hover:text-brand-green transition-colors">
              Método Base
            </a>
            <a href="#full-menu" onClick={(e) => {
              e.preventDefault();
              document.querySelector(".bg-white.py-20")?.scrollIntoView({ behavior: "smooth" });
            }} className="hover:text-brand-green transition-colors">
              Cardápio
            </a>
            <a href="#testimonials" onClick={(e) => {
              e.preventDefault();
              document.querySelector(".bg-white.py-20")?.scrollIntoView({ behavior: "smooth" });
            }} className="hover:text-brand-green transition-colors">
              Avaliações
            </a>
          </nav>

          {/* Action Button Header */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleScrollToPricing}
              className="bg-brand-green hover:bg-brand-darkgreen text-white font-semibold py-2.5 px-5 rounded-xl text-xs md:text-sm tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm shadow-brand-green/15 cursor-pointer"
            >
              QUERO COMEÇAR
            </button>
          </div>
        </div>
      </header>

      {/* 2. PROMOTIONAL FLOATING BAR */}
      <div className="bg-brand-darkgreen text-white py-2.5 px-4 text-center text-xs font-medium tracking-wide flex items-center justify-center gap-2 relative z-10">
        <Sparkles className="w-4 h-4 text-brand-gold animate-pulse shrink-0" />
        <span>Garantia estendida de satisfação ou reembolso total por 7 dias. Aproveite!</span>
      </div>

      {/* 3. HERO SECTION */}
      <HeroSection onCtaClick={handleScrollToPricing} />

      {/* 4. THE CHALLENGE & FRUSTRATION SECTIONS (Seção 2 & Seção 3) */}
      <ChallengeSection />

      {/* 5. TRUTH SECTION (Seção 4: Método da Proporção Base™) */}
      <TruthSection />

      {/* 6. WHY GLUTEN FREE SECTION (Seção 5) */}
      <WhySection />

      {/* 7. PRODUCT PROMO / APP PRESENTATION (Seção 6) */}
      <ProductPromoSection onCtaClick={handleScrollToPricing} />

      {/* 8. IMAGINE YOUR WEEK TIMELINE (Seção 7) */}
      <ImagineWeekSection />

      {/* 9. FULL MEAL CARD MENU (Seção 8) */}
      <FullMenuSection />

      {/* 10. ADVANTAGES PILLARS (Seção 9) */}
      <MoreThanRecipesSection />

      {/* 11. EMOTIONAL INCLUSION / FAMILY ACCENTS (Seção 10) */}
      <FamilySection />

      {/* 12. PRICING OFFERS & COMPARISON TABLE (Seção 11 & Seção 12) */}
      <PricingSection onPlanSelect={handleOpenCheckout} />

      {/* 13. TESTIMONIALS MODERN CARDS (Seção 13) */}
      <TestimonialsSection />

      {/* 14. ELEGANT ACCORDION FAQ (Seção 14) */}
      <FaqSection />

      {/* 15. FINAL CALL TO ACTION & COMPREHENSIVE FOOTER (Seção 15) */}
      <FooterSection onCtaClick={handleScrollToPricing} />

      {/* 16. PERSISTENT MOBILE STICKY CTA BAR */}
      <StickyCTA onCtaClick={handleScrollToPricing} />

      {/* 17. SECURE UPSELL MODAL */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAcceptUpsell={handleAcceptUpsell}
        onDeclineUpsell={handleDeclineUpsell}
      />

    </div>
  );
}
