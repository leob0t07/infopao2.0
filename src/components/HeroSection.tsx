import { motion } from "motion/react";
import { Check, Star, Shield, Zap, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 lg:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F1ECE1] rounded-full blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-12 left-10 w-72 h-72 bg-[#EAE3D2] rounded-full blur-3xl -z-10 opacity-50" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            Últimas vagas com preço promocional!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-brand-text leading-tight tracking-tight"
          >
            O Guia Definitivo para Comer Bem Sem Glúten{" "}
            <span className="text-brand-green block md:inline font-normal italic">
              (De Manhã à Noite)
            </span>
          </motion.h1>

          {/* Newly requested appetizing cheese-pull image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-video sm:aspect-[21/9] lg:aspect-[16/7] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-green/10"
          >
            <img
              src="/images/gluten_free_cheese_pull_1783445313365.jpg"
              alt="Pão de queijo quentinho com queijo derretido e frango desfiado"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest bg-brand-green text-white px-2.5 py-1 rounded-full shadow-md">
                Sabor & Textura Irresistíveis
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-text/80 font-sans font-light max-w-xl"
          >
            Sem ficar preso a comidas sem graça, secas que esfarelam, e sem precisar falir no supermercado.
          </motion.p>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 pt-2"
          >
            <div className="flex items-start gap-3">
              <div className="bg-brand-green/10 p-1.5 rounded-lg text-brand-green mt-0.5">
                <span className="text-base">🚀</span>
              </div>
              <div>
                <p className="font-semibold text-brand-text text-sm md:text-base">
                  +120 Receitas Testadas & Aprovadas
                </p>
                <p className="text-xs md:text-sm text-brand-text/75">
                  Organizadas perfeitamente de acordo com a sua refeição e rotina.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-brand-green/10 p-1.5 rounded-lg text-brand-green mt-0.5">
                <span className="text-base">👩‍🍳</span>
              </div>
              <div>
                <p className="font-semibold text-brand-text text-sm md:text-base">
                  Para Iniciantes Absolutos
                </p>
                <p className="text-xs md:text-sm text-brand-text/75">
                  Mesmo que você nunca tenha feito um único pão ou bolo na vida.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-brand-green/10 p-1.5 rounded-lg text-brand-green mt-0.5">
                <span className="text-base">💸</span>
              </div>
              <div>
                <p className="font-semibold text-brand-text text-sm md:text-base">
                  Chega de Industrializados Caros
                </p>
                <p className="text-xs md:text-sm text-brand-text/75">
                  Diga adeus a pães industrializados secos de R$ 25 e receitas de internet que dão errado.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onCtaClick}
              id="hero-cta-btn"
              className="bg-brand-green hover:bg-brand-darkgreen text-white font-semibold py-4 px-8 rounded-xl text-sm md:text-base tracking-wide shadow-lg shadow-brand-green/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              QUERO COZINHAR COM PRAZER AGORA <span className="font-sans text-brand-gold">➜</span>
            </button>
          </motion.div>

          {/* Badges/Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-y-4 gap-x-6 pt-4 border-t border-brand-text/10"
          >
            <div className="flex items-center gap-1 text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-1 text-brand-text font-semibold text-xs md:text-sm">5.0 (482 avaliações)</span>
            </div>

            <div className="flex items-center gap-4 text-xs md:text-sm text-brand-text/80">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-brand-green" />
                <span>Compra segura</span>
              </div>
              <div className="w-1.5 h-1.5 bg-brand-text/25 rounded-full" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-brand-gold" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="w-1.5 h-1.5 bg-brand-text/25 rounded-full" />
              <span>Acesso imediato</span>
            </div>
          </motion.div>
        </div>

        {/* Beautiful Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Main image container */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-brand-card">
            <img
              src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=1200"
              alt="Mesa de café da manhã sem glúten com pães, panquecas, waffles e bolos artesanais"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Visual ambient shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-brand-green/10 flex items-center gap-3">
              <div className="bg-brand-green text-white p-2.5 rounded-xl">
                <span className="text-xl">🥞</span>
              </div>
              <div>
                <p className="text-xs text-brand-text/60 uppercase tracking-widest font-bold">Lançamento Exclusivo</p>
                <p className="font-title font-bold text-brand-text text-sm md:text-base">O prazer de comer voltou à mesa</p>
              </div>
            </div>
          </div>

          {/* Floating decorative absolute card */}
          <div className="absolute -top-6 -right-6 md:-right-8 bg-brand-gold text-white px-5 py-3 rounded-2xl shadow-xl font-title text-center transform rotate-6 hidden sm:block">
            <p className="text-xs uppercase tracking-wider font-sans">Sem Glúten</p>
            <p className="text-lg md:text-xl font-bold font-title">100% Saboroso</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
