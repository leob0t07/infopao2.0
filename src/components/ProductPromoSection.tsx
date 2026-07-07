import { motion } from "motion/react";
import { BookOpen, Sparkles, Smartphone, Tablet, FileText, Check } from "lucide-react";

interface ProductPromoSectionProps {
  onCtaClick: () => void;
}

export default function ProductPromoSection({ onCtaClick }: ProductPromoSectionProps) {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-8 border-b border-brand-text/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Visual Mockup purely designed via Tailwind */}
        <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1 pt-10 lg:pt-0">
          
          {/* Ambient Glow behind the mockups */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -z-10" />

          {/* Premium Multi-Device Simulation Mockup */}
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            
            {/* 1. Tablet Mockup Representation */}
            <motion.div
              initial={{ opacity: 0, x: -20, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute w-[80%] aspect-[3/4] bg-[#1C1917] rounded-[2.5rem] p-3 shadow-2xl border-4 border-[#3A3530]"
            >
              {/* Inner screen */}
              <div className="w-full h-full bg-[#FBF9F6] rounded-[1.8rem] overflow-hidden relative flex flex-col">
                {/* App Header */}
                <div className="bg-brand-green text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">🥧</span>
                    <span className="font-title font-bold text-xs tracking-wider">MESA SEM GLÚTEN</span>
                  </div>
                  <div className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">RECEITAS</div>
                </div>

                {/* Main Recipe Image */}
                <div className="h-1/2 relative bg-neutral-200">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
                    alt="Bolo decorado no aplicativo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <p className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">Café da Tarde</p>
                    <h5 className="font-title font-bold text-sm">Bolo Vulcão de Cenoura</h5>
                  </div>
                </div>

                {/* Details list inside tablet screen */}
                <div className="p-4 flex-1 space-y-2 text-left bg-[#FBF9F6]">
                  <p className="text-[10px] font-semibold text-brand-text/50 uppercase tracking-widest">Método da Proporção</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-brand-text/80 text-[10px]">
                      <Check className="w-3 h-3 text-brand-green" />
                      <span>Farinha de arroz fino (Proporção 6)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-text/80 text-[10px]">
                      <Check className="w-3 h-3 text-brand-green" />
                      <span>Farinha de amêndoas macia</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-text/80 text-[10px]">
                      <Check className="w-3 h-3 text-brand-green" />
                      <span>Psyllium puro hidratado</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-brand-text/10 flex justify-between items-center text-[9px] text-brand-text/60">
                    <span>⏱️ 45 min</span>
                    <span>🍰 10 porções</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Mobile Mockup Representation (Overlaid) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 30, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, y: 30, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute w-[45%] aspect-[9/19] bg-[#0C0A09] rounded-[2rem] p-1.5 shadow-2xl border-[3px] border-[#2E2A27] right-4 bottom-4"
            >
              {/* Phone screen */}
              <div className="w-full h-full bg-[#FCFBF9] rounded-[1.6rem] overflow-hidden relative flex flex-col">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-[#0C0A09] rounded-b-xl z-20" />
                
                {/* App Content */}
                <div className="bg-brand-darkgreen text-white p-3 pt-4 text-center">
                  <span className="text-xs font-semibold block">Cardápio Inteligente</span>
                </div>

                <div className="p-3 flex-1 space-y-2 text-left text-[9px] bg-[#FCFBF9]">
                  <p className="font-bold text-brand-text font-title">Segunda-Feira</p>
                  <div className="bg-brand-bg p-1.5 rounded-lg border border-brand-green/10 space-y-1">
                    <p className="font-bold text-[8px] text-brand-green">☀️ CAFÉ DA MANHÃ</p>
                    <p className="text-[8px] text-brand-text">Pão Artesanal Quentinho</p>
                  </div>
                  <div className="bg-brand-bg p-1.5 rounded-lg border border-brand-green/10 space-y-1">
                    <p className="font-bold text-[8px] text-brand-green">🍝 ALMOÇO</p>
                    <p className="text-[8px] text-brand-text">Fettuccine com Tomates</p>
                  </div>
                  <div className="bg-brand-bg p-1.5 rounded-lg border border-brand-green/10 space-y-1">
                    <p className="font-bold text-[8px] text-brand-green">🌙 JANTAR</p>
                    <p className="text-[8px] text-brand-text">Wrap Leve e Flexível</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating golden physical book style representation */}
            <div className="absolute -left-6 bottom-12 bg-brand-gold text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 transform -rotate-12 hidden md:flex">
              <BookOpen className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider font-sans">Livro Digital Interativo</span>
            </div>

          </div>
        </div>

        {/* Right Column: Copy text & Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-6 md:space-y-8 text-left order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Método Mesa Sem Glúten
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            🎁 O sistema completo criado para eliminar a maior dúvida do seu dia
          </h2>

          <p className="text-lg text-brand-green font-title font-light italic">
            &ldquo;O que eu vou comer hoje?&rdquo;
          </p>

          <div className="space-y-4 text-brand-text/80 font-sans text-sm md:text-base leading-relaxed">
            <p>
              O <strong>Método Mesa Sem Glúten</strong> não é apenas uma compilação de PDFs bagunçados que você baixa, esquece na lixeira do computador e nunca mais abre. 
            </p>
            <p>
              Nós projetamos um sistema completo, prático e 100% focado no seu cotidiano culinário. Tudo é organizado exatamente como sua rotina de alimentação de fato acontece: dividida por momentos do dia, com receitas simples que se complementam de forma inteligente.
            </p>
          </div>

          {/* Core Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-2.5">
              <div className="bg-brand-green/10 text-brand-green p-1.5 rounded-lg">
                <Tablet className="w-4 h-4" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-brand-text">100% Otimizado para Telas</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-brand-green/10 text-brand-green p-1.5 rounded-lg">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-brand-text">Acesso Rápido no Celular</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-brand-green/10 text-brand-green p-1.5 rounded-lg">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-brand-text">Layout de Fácil Leitura</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-brand-green/10 text-brand-green p-1.5 rounded-lg">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-brand-text">Suporte para Impressão</span>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onCtaClick}
              id="promo-cta-btn"
              className="w-full sm:w-auto bg-brand-green hover:bg-brand-darkgreen text-white font-semibold py-4 px-10 rounded-xl text-sm md:text-base tracking-wide shadow-lg shadow-brand-green/20 hover:shadow-xl transition-all duration-300 cursor-pointer text-center block"
            >
              QUERO COMEÇAR AGORA
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
