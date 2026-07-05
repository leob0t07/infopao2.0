/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Flame, 
  Lock, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  HelpCircle, 
  Clock, 
  ThumbsUp,
  Star,
  ArrowRight
} from 'lucide-react';

// Components
import CheckoutModal from './components/CheckoutModal';
import UpsellModal from './components/UpsellModal';
import ReviewList from './components/ReviewList';

// Images
import paoPerfeito from './assets/images/pao_perfeito_cortado_1783002699935.jpg';
import paoAfundado from './assets/images/pao_afundado_1783002712173.jpg';
import paoSolado from './assets/images/pao_solado_tijolo_1783002722077.jpg';
import paoGrudento from './assets/images/pao_grudento_desastre_1783208863273.jpg';
import paoManteiga from './assets/images/pao_manteiga_derretendo_1783002741566.jpg';
import guiaMockup from './assets/images/guia_mockup_3d_1783002757289.jpg';
import ingredientesBotao from './assets/images/ingredientes_botao_maquina_1783209956970.jpg';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Minha sovadeira é de uma marca simples, funciona mesmo assim?',
    answer: 'Sim. As receitas foram pensadas para funcionar em qualquer modelo com programas básicos (pão, integral, rápido e massa), independente da marca.'
  },
  {
    question: 'Nunca usei a máquina, vou conseguir seguir?',
    answer: 'Sim. Cada receita traz a ordem certa de colocar os ingredientes, o programa a usar e o ponto que a massa deve ter.'
  },
  {
    question: 'Como recebo o material?',
    answer: 'Assim que o pagamento é aprovado, você recebe o link de acesso no e-mail e no WhatsApp cadastrados na compra.'
  },
  {
    question: 'E se eu não gostar?',
    answer: 'Você tem 7 dias de garantia. Se não fizer sentido pra você, devolvemos 100% do valor, sem burocracia.'
  }
];

const RECIPE_CATEGORIES = {
  paes: {
    title: 'Pães do dia a dia',
    icon: '🍞',
    recipes: [
      'Pão de forma tradicional',
      'Pão de leite fofinho',
      'Pão integral com sementes',
      'Pão de batata',
      'Pão sem lactose',
      'Pão de milho',
      'Pão multigrãos',
      'Pão de fermentação natural fácil'
    ]
  },
  doces: {
    title: 'Bolos e doces',
    icon: '🍰',
    recipes: [
      'Bolo de milho cremoso',
      'Bolo de fubá com erva-doce',
      'Bolo de chocolate fofinho',
      'Bolo de cenoura com cobertura',
      'Pão doce de banana e canela',
      'Cinnamon roll caseiro',
      'Geleia de frutas na máquina',
      'Doce de leite na máquina'
    ]
  },
  massas: {
    title: 'Massas e salgados',
    icon: '🍕',
    recipes: [
      'Massa de pizza crocante',
      'Massa para pastel',
      'Massa para esfiha',
      'Pão de hambúrguer',
      'Pão de cachorro-quente',
      'Focaccia com ervas',
      'Massa de macarrão fresca',
      'Massa para torta salgada'
    ]
  },
  especiais: {
    title: 'Especiais e festivos',
    icon: '✨',
    recipes: [
      'Panetone caseiro',
      'Chocotone recheado',
      'Rosca de Páscoa',
      'Pão amanteigado (brioche)',
      'Pão australiano escuro',
      'Pão de mel com especiarias',
      'Mix de farinha caseiro',
      'Guia de substituição de ingredientes'
    ]
  }
};

type CategoryKey = keyof typeof RECIPE_CATEGORIES;

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'basic' | 'complete'>('basic');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<CategoryKey>('paes');
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 500px
      if (window.scrollY > 500) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  const handleOpenUpsell = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsUpsellOpen(true);
  };

  const handleAcceptUpsell = () => {
    window.open('https://pay.cakto.com.br/ttadqb9_953826', '_blank');
    setIsUpsellOpen(false);
  };

  const handleDeclineUpsell = () => {
    window.open('https://pay.cakto.com.br/xtrakpo_953780', '_blank');
    setIsUpsellOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2c1d11] font-sans antialiased selection:bg-amber-100 selection:text-[#2c1d11]">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#3B2116] text-amber-100 py-2.5 px-4 text-center text-xs md:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 relative z-10 border-b border-[#3B2116]/30">
        <div className="flex items-center gap-1.5">
          <span className="bg-[#B54A3A] text-white px-2 py-0.5 rounded text-[10px] uppercase font-black tracking-wider shrink-0 animate-pulse-subtle">
            OFERTA DE LANÇAMENTO
          </span>
          <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        </div>
        <span className="whitespace-normal leading-normal">
          De R$ 37 por apenas <strong className="text-white">R$ 9,99</strong>
        </span>
      </div>

      {/* 2. HERO SECTION */}
      <header className="relative py-12 md:py-20 px-6 max-w-4xl mx-auto border-b border-[#ece3d4]/50 text-center flex flex-col items-center space-y-8 md:space-y-12">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 bg-[#5B6E4F]/10 border border-[#5B6E4F]/20 text-[#465A3B] px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#B54A3A] inline-block" /> receitas para sovadeira / panificadora
        </span>

        {/* IMAGE BEFORE THE HEADLINE */}
        <div className="relative w-full max-w-xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[#ece3d4] shadow-md bg-white p-2">
            <img 
              src={paoPerfeito} 
              alt="Pão de máquina lindo, fofinho e cortado ao meio revelando miolo macio" 
              className="w-full rounded-xl object-cover aspect-16/10 max-h-[340px]"
              referrerPolicy="no-referrer"
              id="hero-main-img"
            />
            <div className="absolute bottom-4 right-4 bg-amber-950/90 text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-md font-mono flex items-center gap-1 border border-[#ece3d4]/20 backdrop-blur-xs">
              <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Pão Perfeito de Fábrica? Não, feito em casa!
            </div>
          </div>
          {/* Background decorative blobs */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-200/10 rounded-full blur-xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange-200/10 rounded-full blur-xl -z-10" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-[#3B2116] tracking-tight leading-tight max-w-3xl">
          Pão Fofinho, Bolo Molhadinho e Massa no Ponto — <span className="text-[#B54A3A] underline decoration-amber-500/40 underline-offset-4 italic">Toda Vez</span> Que Sua Máquina Trabalhar Por Você
        </h1>
        
        {/* Paragraph text with block layout for breathing room */}
        <p className="text-sm md:text-lg text-[#5E4634] leading-relaxed max-w-2xl text-center">
          +50 receitas prontas pra sua sovadeira fazer o trabalho pesado enquanto você só aproveita o resultado. Sem errar a mão, sem desperdiçar farinha, sem complicação.
        </p>

        {/* Price Tag Box */}
        <div className="inline-flex items-center gap-4 bg-white border border-[#ece3d4] rounded-2xl p-4 sm:px-6 shadow-xs">
          <span className="font-mono text-3xl sm:text-4xl font-bold text-[#B54A3A] whitespace-nowrap">R$ 9,99</span>
          <div className="text-left leading-tight text-xs text-[#5E4634]">
            <b className="block text-sm text-[#3B2116]">Acesso Vitalício</b>
            Pagamento único • Sem assinatura
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-lg pt-2">
          <motion.button 
            onClick={() => {
              document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 bg-[#B54A3A] hover:bg-[#9d3a2c] text-white font-extrabold text-sm sm:text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-1 cursor-pointer border border-[#B54A3A]/20 text-center uppercase tracking-wider select-none"
            id="hero-cta-btn"
          >
            <span>QUERO MINHAS RECEITAS AGORA</span>
            <span className="text-[10px] sm:text-xs font-normal normal-case opacity-90 leading-none">Acesso imediato no e-mail e WhatsApp</span>
          </motion.button>
        </div>
      </header>

      {/* 5. INTERACTIVE RECIPE CATEGORIES TABS */}
      <section className="py-16 md:py-24 px-6 bg-white border-b border-[#ece3d4]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-[#5B6E4F]/10 border border-[#5B6E4F]/20 text-[#465A3B] px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
              o que você recebe
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B2116]">
              +50 receitas prontas, organizadas por categoria
            </h2>
            <p className="text-sm sm:text-base text-[#5E4634]">
              Cada receita traz as quantidades exatas pro copo medidor da sua máquina e o programa certo pra usar. Sem terminologia complicada, sem adivinhação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Vertical tabs on tablet/desktop, wrap list on mobile */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2 bg-[#FDFBF7] p-2 rounded-2xl border border-[#ece3d4] shrink-0 justify-center">
              {(Object.keys(RECIPE_CATEGORIES) as CategoryKey[]).map((catKey) => {
                const cat = RECIPE_CATEGORIES[catKey];
                const isActive = activeTab === catKey;
                return (
                  <button
                    key={catKey}
                    onClick={() => setActiveTab(catKey)}
                    className={`flex-1 lg:flex-none text-left px-4 py-3 rounded-xl font-medium text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer select-none ${
                      isActive 
                        ? 'bg-[#B54A3A] text-white shadow-xs font-bold' 
                        : 'text-[#5E4634] hover:bg-amber-100/30'
                    }`}
                  >
                    <span className="text-base sm:text-lg">{cat.icon}</span>
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* List Panel */}
            <div className="lg:col-span-8 bg-[#FFFBF2] border border-[#ece3d4] rounded-2xl p-6 sm:p-8 shadow-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 border-b border-[#ece3d4] pb-4">
                    <span className="text-2xl sm:text-3xl">{RECIPE_CATEGORIES[activeTab].icon}</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2116]">
                      {RECIPE_CATEGORIES[activeTab].title}
                    </h3>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {RECIPE_CATEGORIES[activeTab].recipes.map((recipe, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#5E4634] font-medium">
                        <CheckCircle className="w-4 h-4 text-[#5B6E4F] shrink-0 mt-0.5" />
                        <span>{recipe}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Sova Callout block */}
          <div className="bg-[#5B6E4F] text-[#FFFBF2] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm mt-8 border border-[#5B6E4F]/20">
            <div className="text-4xl sm:text-5xl shrink-0 p-3 bg-white/10 rounded-xl border border-white/10">🥖</div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                Não precisa assar na máquina se você não quiser
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE6D8] leading-relaxed">
                Dá pra usar a sovadeira <strong className="text-white">só no modo "massa/sovar"</strong> — ela sova e faz a primeira fermentação, e você molda e assa no forno normal, com casquinha de padaria de verdade. O guia ensina os dois caminhos: 100% na máquina ou só pra sovar.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white border-b border-[#ece3d4]/50">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Benefit 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#5B6E4F]/10 border border-[#5B6E4F]/20 text-[#465A3B] px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
                benefício 01
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3B2116] leading-tight">
                Coloque os ingredientes, aperte o botão e pronto
              </h2>
              <p className="text-sm sm:text-base text-[#5E4634] leading-relaxed">
                Você não precisa saber sovar, não precisa ter jeito com massa nem entender de fermentação. Sua máquina já faz isso — as receitas certas é que faltavam. Com as quantidades exatas pro seu modelo, o resultado sai igual todas as vezes.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#ece3d4] shadow-xs bg-[#FFFBF2] p-2">
              <img 
                src={ingredientesBotao} 
                alt="Ingredientes na máquina de pão e apertando o botão iniciar" 
                className="w-full rounded-xl object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Benefit 2 - Reversed on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center md:flex-row-reverse">
            <div className="space-y-4 md:order-2">
              <span className="inline-flex items-center gap-1.5 bg-[#5B6E4F]/10 border border-[#5B6E4F]/20 text-[#465A3B] px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
                benefício 02
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3B2116] leading-tight">
                Muito além de pão: bolo, massa, pizza e mais
              </h2>
              <p className="text-sm sm:text-base text-[#5E4634] leading-relaxed">
                Sua sovadeira faz mais do que pão de forma. Com as receitas certas, ela também prepara massa de pizza, bolo molhadinho, macarrão fresco e até panetone — tudo sem sujar a cozinha toda.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#ece3d4] shadow-xs bg-[#FFFBF2] p-2 md:order-1">
              <img 
                src={paoManteiga} 
                alt="Bolo e pizza de massa perfeita" 
                className="w-full rounded-xl object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#5B6E4F]/10 border border-[#5B6E4F]/20 text-[#465A3B] px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
                benefício 03
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3B2116] leading-tight">
                Chega de desperdiçar farinha tentando adivinhar
              </h2>
              <p className="text-sm sm:text-base text-[#5E4634] leading-relaxed">
                Cada receita traz a medida exata, o programa certo e o ponto que a massa deve ter. Você para de gastar ingrediente tentando acertar sozinho e começa a usar sua máquina do jeito que ela foi feita pra ser usada: fácil.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#ece3d4] shadow-xs bg-[#FFFBF2] p-2">
              <img 
                src={guiaMockup} 
                alt="Chega de desperdiçar" 
                className="w-full rounded-xl object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. PAIN AGITATION ("Você reconhece algum desses três?") */}
      <section className="py-16 md:py-24 px-6 bg-[#FCFAF6] border-b border-[#ece3d4]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="bg-[#FFFBF2] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#ece3d4] shadow-xs space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest font-black text-[#B54A3A] font-mono block">
                se já aconteceu com você
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B2116]">
                Você reconhece algum desses três?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pain Card 1 */}
              <div className="bg-[#FDFBF7] rounded-2xl border border-[#ece3d4] overflow-hidden flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img src={paoAfundado} alt="Pão Vulcão" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 left-2 bg-[#B54A3A] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                      Vulcão
                    </div>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#3B2116]">O Pão "Vulcão"</h4>
                  <p className="text-xs text-[#5E4634] leading-relaxed">
                    Cresce torto e desinfla assim que esfria, deixando o topo totalmente murcho.
                  </p>
                </div>
              </div>

              {/* Pain Card 2 */}
              <div className="bg-[#FDFBF7] rounded-2xl border border-[#ece3d4] overflow-hidden flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img src={paoSolado} alt="Pão Tijolo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 left-2 bg-[#B54A3A] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                      Tijolo
                    </div>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#3B2116]">O "Tijolo" Duro</h4>
                  <p className="text-xs text-[#5E4634] leading-relaxed">
                    Pesado, seco, com casca extremamente grossa e miolo duro difícil até de cortar.
                  </p>
                </div>
              </div>

              {/* Pain Card 3 */}
              <div className="bg-[#FDFBF7] rounded-2xl border border-[#ece3d4] overflow-hidden flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img src={paoGrudento} alt="Desastre" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 left-2 bg-[#B54A3A] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                      Desastre
                    </div>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#3B2116]">O Desastre Grudento</h4>
                  <p className="text-xs text-[#5E4634] leading-relaxed">
                    Gruda na forma inteira, não assa direito e vira uma massa gosmenta ou crua por dentro.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>



      {/* 6. TARGET AUDIENCE ("para quem é") */}
      <section className="py-16 md:py-24 px-6 bg-[#FAF7F2] border-t border-b border-[#ece3d4]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-[#5B6E4F]/10 border border-[#5B6E4F]/20 text-[#465A3B] px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
              para quem é
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B2116]">
              Essas receitas foram pensadas pra você, se...
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white border border-[#ece3d4] rounded-2xl p-6 flex gap-4 items-start shadow-xs hover:shadow-md transition">
              <span className="text-3xl shrink-0">📦</span>
              <p className="text-sm text-[#5E4634] leading-relaxed">
                Comprou a máquina recentemente e ainda não sabe por onde começar a usar.
              </p>
            </div>

            <div className="bg-white border border-[#ece3d4] rounded-2xl p-6 flex gap-4 items-start shadow-xs hover:shadow-md transition">
              <span className="text-3xl shrink-0">🗄️</span>
              <p className="text-sm text-[#5E4634] leading-relaxed">
                Tem a máquina há tempos guardada porque já errou antes e desanimou.
              </p>
            </div>

            <div className="bg-white border border-[#ece3d4] rounded-2xl p-6 flex gap-4 items-start shadow-xs hover:shadow-md transition">
              <span className="text-3xl shrink-0">🍞</span>
              <p className="text-sm text-[#5E4634] leading-relaxed">
                Já usa pra pão, mas quer variar — bolo, massa, pizza, doces.
              </p>
            </div>

            <div className="bg-white border border-[#ece3d4] rounded-2xl p-6 flex gap-4 items-start shadow-xs hover:shadow-md transition">
              <span className="text-3xl shrink-0">⏱️</span>
              <p className="text-sm text-[#5E4634] leading-relaxed">
                Não tem tempo pra sovar na mão e quer a máquina fazendo o trabalho pesado.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white border-b border-[#ece3d4]/50">
        <div className="max-w-4xl mx-auto">
          <ReviewList />
        </div>
      </section>

      {/* 8. PRICING OFFER SECTION */}
      <section id="oferta" className="py-16 md:py-24 px-6 max-w-xl mx-auto text-center space-y-12">
        <div className="bg-[#FFFBF2] rounded-3xl border-2 border-[#3B2116] shadow-xl overflow-hidden p-6 sm:p-10 md:p-12 space-y-8">
          
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-[#B54A3A]/10 border border-[#B54A3A]/20 text-[#B54A3A] px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-bold">
              oferta de lançamento
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#3B2116] leading-tight">
              Pacote Completo de Receitas para Sovadeira
            </h2>
          </div>

          <ul className="text-left space-y-3 border-t border-b border-[#ece3d4] py-6 my-4">
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E4634] font-medium">
              <span className="shrink-0 text-base">🍞</span>
              <span>+50 receitas com medidas exatas para sua máquina</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E4634] font-medium">
              <span className="shrink-0 text-base">🍞</span>
              <span>Guia "modo sova" — como usar sem assar na máquina</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E4634] font-medium">
              <span className="shrink-0 text-base">🍞</span>
              <span>Guia de substituição de ingredientes</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E4634] font-medium">
              <span className="shrink-0 text-base">🍞</span>
              <span>Acesso vitalício, direto no e-mail e WhatsApp</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E4634] font-medium">
              <span className="shrink-0 text-base">🍞</span>
              <span>Garantia incondicional de 7 dias</span>
            </li>
          </ul>

          <div className="space-y-1">
            <span className="text-sm text-[#5E4634] line-through block">R$ 37,00</span>
            <div className="flex items-baseline justify-center gap-1 text-[#B54A3A]">
              <span className="font-serif text-5xl sm:text-6xl font-black">R$ 9,99</span>
            </div>
            <p className="text-xs text-[#5E4634] font-medium pt-1">
              Pagamento único via Pix ou cartão — sem assinatura
            </p>
          </div>

          {/* Action button */}
          <div className="space-y-4 pt-2">
            <motion.button
              onClick={handleOpenUpsell}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 bg-[#B54A3A] hover:bg-[#9d3a2c] text-white font-extrabold text-base rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer border border-[#B54A3A]/20 text-center uppercase tracking-wider select-none"
              id="pricing-cta-btn"
            >
              <span>QUERO MINHAS RECEITAS AGORA</span>
            </motion.button>

            <p className="text-[10px] text-center text-amber-900/50 flex items-center justify-center gap-1.5 font-medium">
              <Lock className="w-3.5 h-3.5 text-[#5B6E4F]" /> Checkout 100% seguro com criptografia militar via Pix ou Cartão.
            </p>
          </div>

        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section className="py-16 md:py-24 px-6 bg-[#FAF7F2] border-t border-[#ece3d4]/50">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <HelpCircle className="w-8 h-8 text-[#B54A3A] mx-auto" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#3B2116]">
              Dúvidas frequentes
            </h3>
            <p className="text-xs md:text-sm text-[#5E4634]">
              Antes de você decidir, veja as respostas para as perguntas mais comuns.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl border border-[#ece3d4] overflow-hidden"
                  id={`faq-item-${idx}`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left font-bold text-sm md:text-base text-[#3B2116] flex items-center justify-between gap-4 transition hover:bg-amber-50/20 cursor-pointer select-none"
                    id={`faq-trigger-${idx}`}
                  >
                    <span>{item.question}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#B54A3A] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#B54A3A] shrink-0" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-6 pt-0 text-xs md:text-sm text-[#5E4634]/90 leading-relaxed border-t border-[#ece3d4]/40 bg-amber-50/10">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. PROFESSIONAL FOOTER */}
      <footer className="bg-[#3B2116] text-amber-200/60 py-16 px-6 text-center text-xs space-y-8 border-t border-[#3B2116]/80">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center">
            <motion.button
              onClick={handleOpenUpsell}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="py-3 px-6 bg-[#B54A3A] hover:bg-[#9d3a2c] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition cursor-pointer uppercase tracking-wider select-none border border-[#B54A3A]/20"
            >
              QUERO MINHAS RECEITAS POR R$ 9,99
            </motion.button>
          </div>
          <p className="max-w-2xl mx-auto text-[11px] leading-relaxed text-amber-100/70">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade é inteiramente do nosso site.
          </p>
          <div className="h-px bg-[#ece3d4]/10 w-16 mx-auto my-4" />
          <p className="text-[10px] text-amber-200/40">
            © {new Date().getFullYear()} +50 Receitas para Sovadeira. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* STICKY CTA FOR MOBILE */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div 
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ece3d4] p-3 sm:p-4 z-50 shadow-[0_-6px_20px_rgba(0,0,0,0.06)] block"
          >
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
              <div className="leading-tight">
                <span className="text-lg font-mono font-bold text-[#B54A3A]">R$ 9,99</span>
                <div className="text-[10px] text-[#5E4634] font-medium">+50 receitas prontas</div>
              </div>
              <motion.button
                onClick={handleOpenUpsell}
                whileTap={{ scale: 0.95 }}
                className="py-2.5 px-5 bg-[#B54A3A] hover:bg-[#9d3a2c] text-white font-black text-xs sm:text-sm rounded-lg shadow-sm transition uppercase tracking-wider cursor-pointer"
              >
                QUERO AGORA
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UPSELL MODAL */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAccept={handleAcceptUpsell}
        onDecline={handleDeclineUpsell}
      />

    </div>
  );
}
