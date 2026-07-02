/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  ShoppingBag, 
  Award, 
  HelpCircle, 
  Clock, 
  RefreshCw,
  TrendingUp,
  FileText
} from 'lucide-react';

// Components
import DiagnosticTool from './components/DiagnosticTool';
import CheckoutModal from './components/CheckoutModal';
import UpsellModal from './components/UpsellModal';
import ReviewList from './components/ReviewList';

// Images
import paoPerfeito from './assets/images/pao_perfeito_cortado_1783002699935.jpg';
import paoAfundado from './assets/images/pao_afundado_1783002712173.jpg';
import paoSolado from './assets/images/pao_solado_tijolo_1783002722077.jpg';
import maquinaArmario from './assets/images/maquina_no_armario_1783002731065.jpg';
import paoManteiga from './assets/images/pao_manteiga_derretendo_1783002741566.jpg';
import guiaMockup from './assets/images/guia_mockup_3d_1783002757289.jpg';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como vou receber o Guia Prático?',
    answer: 'O envio é imediato e 100% digital. Assim que o pagamento (via Pix ou cartão) for detectado pelo sistema, você receberá um link de download direto no seu e-mail cadastrado. Você pode ler no seu celular, tablet, computador ou até mesmo imprimir se preferir ter na cozinha.'
  },
  {
    question: 'Serve para qual marca de máquina de pão?',
    answer: 'Serve para TODAS as marcas e modelos comercializados no Brasil, incluindo Britânia Multipane, Mondial Master Bread, Cadence Padicollor, Philco, Arno, Oster, West Bend, Cadence, etc. Os princípios da panificação brasileira explicados no livro são universais.'
  },
  {
    question: 'O Guia vem com receitas sem glúten ou integrais?',
    answer: 'Sim! Além das receitas clássicas e do pão de leite fofinho, incluímos receitas adaptadas para pão integral fofinho (que geralmente fica duro se feito pelo manual tradicional) e opções de pão de arroz/aveia sem glúten testados em máquinas domésticas.'
  },
  {
    question: 'Por que o valor é tão barato? Apenas R$ 9,99?',
    answer: 'Acreditamos que o conhecimento de uma boa alimentação caseira deve ser acessível. Colocamos o preço simbólico de R$ 9,99 (que é menos que o preço de um pão francês na padaria hoje em dia) para que qualquer pessoa possa resgatar sua máquina sem medo de perder dinheiro com ingredientes caros. É uma oferta rápida de teste para eliminar qualquer desculpa!'
  },
  {
    question: 'E se mesmo assim meu pão der errado?',
    answer: 'Você tem nossa Garantia Incondicional de 7 Dias. Se você aplicar os ajustes recomendados no livro e seu pão não ficar alto, macio e delicioso, basta nos enviar um e-mail e nós devolveremos seus R$ 9,99 na hora. O risco é 100% nosso.'
  }
];

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'basic' | 'complete'>('basic');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
      <div className="bg-[#1e4620] text-emerald-100 py-2.5 px-4 text-center text-xs md:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 relative z-10 border-b border-emerald-900/30">
        <div className="flex items-center gap-1.5">
          <span className="bg-amber-500 text-amber-950 px-1.5 py-0.5 rounded text-[10px] uppercase font-black tracking-wider shrink-0 animate-pulse-subtle">
            OFERTA DE LANÇAMENTO
          </span>
          <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        </div>
        <span className="whitespace-normal leading-normal">
          De R$ 127 por apenas <strong className="text-white">R$ 9,99</strong>
        </span>
      </div>

      {/* 2. HERO SECTION / BANNER DE TOPO */}
      <header className="relative py-12 md:py-20 px-6 max-w-4xl mx-auto border-b border-[#ece3d4]/50 text-center flex flex-col items-center space-y-8 md:space-y-12">
        
        {/* Sparkles Badge */}
        <span className="inline-flex items-center gap-1 bg-amber-100/80 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse-subtle" /> Guia Prático de Panificação Doméstica
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
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-[#2c1d11] tracking-tight leading-tight max-w-3xl">
          Pão Quentinho, Macio e <span className="text-amber-700 underline decoration-amber-500/40 underline-offset-4">Perfeito</span> Logo na Primeira Tentativa!
        </h1>
        
        {/* Paragraph text with block layout for breathing room */}
        <p className="text-sm md:text-lg text-amber-950/80 leading-relaxed max-w-2xl text-center">
          Mesmo que você nunca tenha assado nada, já tenha errado várias vezes ou sua máquina esteja pegando poeira no armário...
          <span className="block mt-4 text-amber-900 font-medium text-xs sm:text-sm md:text-base">
            Descubra o ajuste simples de 2 minutos para contornar manuais mal traduzidos e transformar farinha de supermercado em pão de padaria artesanal.
          </span>
        </p>

        {/* CTA Button containing everything nicely */}
        <div className="w-full max-w-lg pt-2">
          <motion.button 
            onClick={() => {
              const pricingEl = document.getElementById('pricing-section');
              pricingEl?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/20 text-center break-words select-none"
            id="hero-cta-btn"
          >
            <span>QUERO PÃES DE MÁQUINA PERFEITOS</span>
          </motion.button>
        </div>
      </header>

      {/* 3. AGITAÇÃO DO PROBLEMA E IDENTIFICAÇÃO (OS TRÊS CENÁRIOS) */}
      <section className="py-16 md:py-24 px-6 bg-[#FCFAF6] border-b border-[#ece3d4]/50">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-black text-amber-700">Por que a maioria das pessoas desiste?</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1d11]">
              A panificadora doméstica deveria ser sinônimo de pão quente e facilidade... Mas virou frustração?
            </h2>
            <p className="text-sm md:text-base text-amber-900/70">
              Você acorda ansioso com o bipe da máquina e, ao abrir a tampa, se depara com um desses três cenários desanimadores:
            </p>
          </div>

          {/* Grid of 3 Scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Scenario 1 */}
            <div className="bg-white rounded-2xl border border-[#ece3d4] overflow-hidden shadow-xs flex flex-col justify-between" id="scenario-card-1">
              <div>
                <div className="relative aspect-video">
                  <img 
                    src={paoAfundado} 
                    alt="Pão com o topo totalmente afundado e murcho" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    id="scenario-img-1"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">
                    Sintoma Comum
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#2c1d11] flex items-center gap-1.5">
                    1. O Pão "Vulcão" Desinflado
                  </h3>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    Ele começa crescendo lindo, ultrapassa a borda e você fica empolgado. Mas de repente, no meio do cozimento, a massa desaba inteira. O resultado é um pão murcho, com o topo afundado e textura úmida e desagradável por dentro.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 text-xs font-semibold text-red-700 bg-red-50/50 border-t border-red-100 flex items-center gap-1">
                ⚠️ Causa: Excesso oculto de líquidos/fermentação.
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white rounded-2xl border border-[#ece3d4] overflow-hidden shadow-xs flex flex-col justify-between" id="scenario-card-2">
              <div>
                <div className="relative aspect-video">
                  <img 
                    src={paoSolado} 
                    alt="Pão solado pesado como tijolo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    id="scenario-img-2"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">
                    Sintoma Comum
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#2c1d11] flex items-center gap-1.5">
                    2. O "Tijolo" Duro e Pesado
                  </h3>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    O pão sai tão pesado que parece pegar um quilo. A casca fica grossa e, algumas horas após sair da máquina, o miolo endurece tanto que se torna impossível de mastigar no dia seguinte. Uma pedra perfeita para estragar o café da manhã.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 text-xs font-semibold text-red-700 bg-red-50/50 border-t border-red-100 flex items-center gap-1">
                ⚠️ Causa: Falta de gordura emoliente e umidade correta.
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white rounded-2xl border border-[#ece3d4] overflow-hidden shadow-xs flex flex-col justify-between" id="scenario-card-3">
              <div>
                <div className="relative aspect-video">
                  <img 
                    src={maquinaArmario} 
                    alt="Máquina de pão pegando poeira no fundo do armário" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    id="scenario-img-3"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">
                    O Peso na Consciência
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#2c1d11] flex items-center gap-1.5">
                    3. O Eletrodoméstico Encostado
                  </h3>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    Depois de perder leite, farinha especial e fermento biológico caro em várias tentativas frustradas, você simplesmente desiste. Guarda a máquina no armário escuro e sente aquele "remorso financeiro" velado toda vez que vê o aparelho pegando poeira.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 text-xs font-semibold text-red-700 bg-red-50/50 border-t border-red-100 flex items-center gap-1">
                ⚠️ Causa: Medo do prejuízo e falta de lógica de ponto.
              </div>
            </div>

          </div>

          {/* Agitation Copywriter Hook */}
          <div className="bg-[#FAF4EB] rounded-2xl p-6 md:p-10 border border-amber-600/10 text-center max-w-3xl mx-auto space-y-4 shadow-xs">
            <h4 className="font-serif text-xl font-bold text-[#2c1d11] leading-snug">
              "Você não está apenas jogando pão fora... Você está jogando dinheiro e tempo na lixeira."
            </h4>
            <p className="text-sm text-amber-950/85 leading-relaxed">
              Fazer pão em casa deveria te poupar dinheiro e dar orgulho. Mas com o preço atual do fermento biológico seco, farinhas especiais, manteiga e leite de boa qualidade, cada erro custa caro. Ficar esperando 3 horas pelo ciclo terminar para no final ter que jogar tudo fora gera uma frustração horrível. 
            </p>
            <p className="text-sm font-bold text-amber-900 uppercase tracking-wide">
              A boa notícia? A culpa por esses fracassos NUNCA foi sua.
            </p>
          </div>

        </div>
      </section>

      {/* 4. A REVELAÇÃO DO MECANISMO ÚNICO (A CULPA NÃO É SUA) */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] border-b border-[#ece3d4]/50">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* PARTE 1: A GRANDE SABOTAGEM DOS MANUAIS */}
          <div className="space-y-10">
            {/* Header */}
            <div className="text-center md:text-left space-y-3 max-w-3xl mx-auto md:mx-0">
              <span className="text-xs sm:text-sm uppercase tracking-widest font-black text-[#BF360C] block">
                A Grande Sabotagem dos Manuais
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#BF360C] leading-tight">
                Por que as receitas oficiais quebram a sua cara no Brasil?
              </h2>
              <p className="text-sm sm:text-base text-[#3E2723] leading-relaxed max-w-2xl">
                Quando você compra sua panificadora de marcas tradicionais, recebe um manual impresso com dezenas de receitas. Parece ótimo, certo? <strong className="text-red-700 font-bold">Errado.</strong>
                <br className="hidden sm:inline" /> Esses manuais são simplesmente <strong className="text-[#3E2723] font-bold">traduções literais brutas</strong> de livros desenvolvidos para a realidade de farinhas e climas dos Estados Unidos e da Europa.
              </p>
            </div>

            {/* Grid for two villains */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto md:mx-0">
              {/* Card 1: A nossa Farinha */}
              <div className="bg-white rounded-2xl p-6 border border-[#ece3d4]/70 shadow-xs space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-[#BF360C] font-black text-sm">
                    🌾
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#3E2723]">
                    A nossa Farinha
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E2723]/85 leading-relaxed">
                  A farinha de trigo brasileira possui um teor de glúten inferior e uma taxa de absorção de umidade drasticamente diferente das farinhas americanas e europeias.
                </p>
              </div>

              {/* Card 2: O nosso Clima */}
              <div className="bg-white rounded-2xl p-6 border border-[#ece3d4]/70 shadow-xs space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-[#BF360C] font-black text-sm">
                    ☀️
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#3E2723]">
                    O nosso Clima
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3E2723]/85 leading-relaxed">
                  Nosso clima tropical úmido faz com que o fermento biológico trabalhe até <strong className="text-[#3E2723] font-bold">duas vezes mais rápido</strong> do que o previsto nos manuais originais.
                </p>
              </div>
            </div>

            {/* Alert / blockquote box */}
            <blockquote className="border-l-4 border-[#BF360C] bg-[#BF360C]/5 p-5 rounded-r-2xl max-w-3xl space-y-2">
              <div className="flex items-start gap-2 text-sm sm:text-base font-bold text-[#BF360C]">
                <span className="text-lg leading-none">❌</span>
                <span>O resultado inevitável de seguir o manual?</span>
              </div>
              <p className="text-xs sm:text-sm text-[#3E2723]/90 leading-relaxed italic">
                Se você seguir cegamente as medidas de xícaras do manual impresso, o seu pão inevitavelmente vai desabar no centro como um vulcão ou virar um tijolo duro e pesado que ninguém consegue mastigar.
              </p>
            </blockquote>

            {/* Method of Domo explanation */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-amber-600/10 max-w-3xl space-y-2 shadow-xs">
              <h4 className="font-serif text-lg font-bold text-[#3E2723] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-700" /> A Resolução: O Método do Domo de Massa
              </h4>
              <p className="text-xs sm:text-sm text-[#3E2723]/90 leading-relaxed">
                É exatamente isso que o <strong className="text-[#3E2723] font-bold">Guia Prático da Máquina de Pão</strong> resolve. Através do <strong className="text-[#3E2723] font-bold">"Método do Domo de Massa"</strong>, você aprende a fazer um teste visual simples de 3 segundos para calibrar o ponto perfeito e corrigir a umidade sem precisar de balanças caras.
              </p>
            </div>
          </div>

          <div className="h-px bg-[#ece3d4]/50 w-full" />

          {/* PARTE 2: O GANCHO DE OURO - O "CICLO MASSA/SOVAR" */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-black text-[#BF360C] block">
                  O Gancho de Ouro: O "Ciclo Massa/Sovar"
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#BF360C] leading-tight">
                  Quem disse que você precisa assar o pão dentro da máquina?
                </h2>
              </div>

              {/* Steps / checklist */}
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs sm:text-sm shrink-0 shadow-xs border border-emerald-600/10">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#3E2723]">
                      Sem Sujeira na Cozinha
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3E2723]/85 leading-relaxed">
                      A máquina bate e sova a massa perfeitamente sem sujar suas mãos ou encher a bancada da cozinha de farinha.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs sm:text-sm shrink-0 shadow-xs border border-emerald-600/10">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#3E2723]">
                      Massa Perfeita e Elástica
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3E2723]/85 leading-relaxed">
                      A panificadora executa a primeira fermentação no calor e tempo milimetricamente ideais, entregando uma massa lisinha e pronta para modelar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs sm:text-sm shrink-0 shadow-xs border border-emerald-600/10">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#3E2723]">
                      Liberdade Total para Criar
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3E2723]/85 leading-relaxed">
                      Retire a massa e asse no seu forno convencional nos formatos mais incríveis: tranças doces e salgadas recheadas, massas de pizza artesanal super crocantes, esfihas fofinhas ou brioches irresistíveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Image placeholder styled nicely */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden border border-[#ece3d4] shadow-md bg-white p-2">
                <img 
                  src={paoManteiga} 
                  alt="Close-up de pão quentinho com manteiga derretendo sobre o miolo macio" 
                  className="w-full rounded-xl object-cover aspect-4/3"
                  referrerPolicy="no-referrer"
                  id="revelation-secondary-img"
                />
              </div>
              <div className="text-center text-[10px] text-amber-900/50 font-bold uppercase tracking-wider">
                A conveniência da tecnologia com a alma da panificação tradicional!
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE DIAGNOSTIC TOOL SECTION */}
      <section className="py-16 md:py-24 px-6 bg-[#FAF7F2] border-t border-b border-[#ece3d4]/50">
        <div className="max-w-6xl mx-auto">
          <DiagnosticTool />
        </div>
      </section>

      {/* 6. O QUE VOCÊ VAI ENCONTRAR DENTRO DO GUIA (EMPILHAMENTO DA OFERTA) */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-black text-amber-700">Por Dentro do Infoproduto</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1d11]">
            O que você vai encontrar dentro do Guia Prático da Máquina de Pão?
          </h2>
          <p className="text-sm text-amber-900/60">
            Um compilado prático de panificação projetado para ir direto ao ponto, sem enrolações técnicas e focado em resultados rápidos na cozinha.
          </p>
        </div>

        {/* Content Stacking Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-[#ece3d4] p-6 space-y-4 hover:border-amber-600/40 hover:shadow-xs transition">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#2c1d11]">
              O Mapa Antifalhas (50+ Receitas)
            </h4>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              Esqueça as xícaras genéricas. Tenha acesso a receitas com medidas exatas testadas com farinhas nacionais baratas (de supermercado comum) e reajustadas para crescer fofinhas e cheirosas logo no primeiro ciclo automático.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-[#ece3d4] p-6 space-y-4 hover:border-amber-600/40 hover:shadow-xs transition">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#2c1d11]">
              O Método Antidureza de 4 Dias
            </h4>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              O segredo natural de panificação para reter a umidade dentro do miolo de forma orgânica. Seu pão não vai virar uma pedra no dia seguinte! Aprenda a manter fatias macias, úmidas e saborosas por até 96 horas seguidas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-[#ece3d4] p-6 space-y-4 hover:border-amber-600/40 hover:shadow-xs transition">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#2c1d11]">
              O Segredo do Ciclo Massa / Sovar
            </h4>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              Transforme a panificadora doméstica em sua assistente pessoal de sova. Prepare massas elásticas e perfeitas para pizzas, roscas, pães doces de leite e sonhos gourmet sem cansar o braço e sem fazer bagunça na cozinha.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl border border-[#ece3d4] p-6 space-y-4 hover:border-amber-600/40 hover:shadow-xs transition">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#2c1d11]">
              Tabela de Ajuste Climático
            </h4>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              Um infográfico simples e direto de 1 página para você consultar rápido na geladeira: saiba exatamente como ajustar a água da receita quando o dia estiver extremamente quente, frio, chuvoso ou seco na sua região.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl border border-[#ece3d4] p-6 space-y-4 hover:border-amber-600/40 hover:shadow-xs transition">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#2c1d11]">
              Checklist de Fermento Correto
            </h4>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              O fermento é a alma do pão, mas 80% das pessoas erram na hora de comprar no supermercado. Aprenda a ler os rótulos e entenda a diferença exata do fermento biológico seco instantâneo para evitar pães murchos e solados.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl border border-[#ece3d4] p-6 space-y-4 hover:border-amber-600/40 hover:shadow-xs transition border-dashed bg-gradient-to-br from-amber-500/5 to-orange-500/5">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-xs">
              BÔNUS
            </div>
            <h4 className="font-serif font-bold text-lg text-emerald-900">
              Grupo de Padeiros Domésticos
            </h4>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              Como bônus de boas-vindas, você receberá acesso a um painel de suporte por e-mail exclusivo onde nossa equipe responde pessoalmente suas dúvidas de panificação e te ajuda com fotos de erros de pão a cada ciclo.
            </p>
          </div>

        </div>
      </section>

      {/* 7. SEÇÃO DE PROVA SOCIAL (QUEBRANDO O CETICISMO) */}
      <section className="py-16 md:py-24 px-6 bg-[#FCFAF6] border-t border-b border-[#ece3d4]/50">
        <div className="max-w-6xl mx-auto">
          <ReviewList />
        </div>
      </section>

      {/* 8. FECHAMENTO DA OFERTA, VALORIZAÇÃO E CTA FINAL */}
      <section id="pricing-section" className="py-16 md:py-24 px-6 max-w-3xl mx-auto text-center space-y-12 md:space-y-16">
        <div className="bg-white rounded-3xl border border-[#ece3d4] shadow-xl overflow-hidden p-6 sm:p-10 md:p-12 space-y-8 md:space-y-10">
          
          {/* Centered Badge */}
          <div className="flex justify-center">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-600/10">
              Livro Digital Completo (PDF)
            </span>
          </div>

          {/* Centered Title */}
          <h3 className="font-serif text-3xl md:text-4xl font-black text-[#2c1d11] leading-tight max-w-xl mx-auto">
            Resgate a sua máquina hoje e pare de errar receitas!
          </h3>

          {/* Centered Mockup Image */}
          <div className="relative max-w-xs mx-auto py-4">
            <img 
              src={guiaMockup} 
              alt="Mockup digital 3D do Guia Prático da Máquina de Pão ao lado de pão fresco" 
              className="w-full h-auto drop-shadow-2xl rounded-2xl object-contain mx-auto max-h-[260px]"
              referrerPolicy="no-referrer"
              id="pricing-mockup-img"
            />
            <div className="text-center mt-3 text-[10px] sm:text-xs text-amber-900/50 font-bold uppercase tracking-wider">
              Acesso imediato • Envio instantâneo no seu e-mail
            </div>
          </div>

          {/* Centered Description */}
          <p className="text-xs sm:text-sm md:text-base text-amber-950/80 leading-relaxed max-w-xl mx-auto">
            Adquirindo o <strong>Guia Prático da Máquina de Pão</strong> agora, você leva o método antifalhas completo adaptado para o trigo brasileiro, a tabela de ajuste fino de umidade e o manual de boas-vindas.
          </p>

          {/* Centered Price Display */}
          <div className="bg-[#FAF7F2] rounded-2xl p-6 md:p-8 border border-[#ece3d4]/70 max-w-md mx-auto space-y-3 shadow-xs">
            <span className="text-xs text-red-700/80 font-bold line-through block">De R$ 127,00</span>
            <div className="flex items-baseline justify-center gap-1.5 text-emerald-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900/60">Por apenas</span>
              <span className="font-serif text-4xl sm:text-5xl font-black">R$ 9,99</span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-emerald-700 block uppercase tracking-widest bg-emerald-50 py-1 px-3 rounded-full border border-emerald-600/5 max-w-[180px] mx-auto">
              (Pagamento Único)
            </span>
            <p className="text-[10px] text-amber-900/50 pt-1">Sem mensalidades ou assinaturas ocultas. Pague uma vez e acesse para sempre.</p>
          </div>

          {/* Centered CTA Action Button without shopping bag icon */}
          <div className="space-y-4 max-w-md mx-auto pt-2">
            <motion.button
              onClick={handleOpenUpsell}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/20 text-center uppercase tracking-wide select-none"
              id="pricing-cta-btn"
            >
              <span>SIM! QUERO O GUIA POR R$ 9,99</span>
            </motion.button>

            <p className="text-[10px] text-center text-amber-900/50 flex items-center justify-center gap-1.5 font-medium">
              <Lock className="w-3.5 h-3.5 text-emerald-700" /> Checkout 100% seguro com criptografia militar via Pix ou Cartão.
            </p>
          </div>

        </div>

        {/* 7-DAY GUARANTEE BOX */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50/40 rounded-2xl p-6 md:p-10 border border-amber-600/10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-xs">
          <div className="p-3 bg-white rounded-xl border border-[#ece3d4] shadow-xs shrink-0 mx-auto md:mx-0">
            <Award className="w-12 h-12 text-amber-700 stroke-[1.5]" />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-[#2c1d11]">
              Garantia Incondicional de 7 Dias: Risco Zero de Verdade
            </h4>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              O risco de testar está totalmente nas nossas costas. Faça a sua primeira receita aplicando as dicas do guia. Se o pão não crescer alto, macio e fofinho, ou se você simplesmente achar que o conteúdo não vale R$ 9,99, envie um e-mail para nós. Devolvemos seu dinheiro na mesma hora, sem perguntas burocráticas nem ressentimentos. Amizade mantida!
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section className="py-16 md:py-24 px-6 bg-[#FAF7F2] border-t border-[#ece3d4]/50">
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <HelpCircle className="w-8 h-8 text-amber-700 mx-auto" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2c1d11]">
              Perguntas Frequentes (FAQ)
            </h3>
            <p className="text-xs md:text-sm text-amber-900/60">
              Tem alguma dúvida sobre o funcionamento do guia ou da liberação? Veja as respostas rápidas abaixo.
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
                    className="w-full p-6 text-left font-bold text-sm md:text-base text-[#2c1d11] flex items-center justify-between gap-4 transition hover:bg-amber-50/20 cursor-pointer"
                    id={`faq-trigger-${idx}`}
                  >
                    <span>{item.question}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-amber-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-amber-700 shrink-0" />
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
                        <div className="p-6 pt-0 text-xs md:text-sm text-amber-950/80 leading-relaxed border-t border-[#ece3d4]/40 bg-amber-50/10">
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
      <footer className="bg-amber-950 text-amber-200/60 py-16 px-6 text-center text-xs space-y-6 border-t border-amber-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-serif font-bold text-amber-100 text-sm">O Guia Prático da Máquina de Pão</p>
          <p className="max-w-2xl mx-auto text-[11px] leading-relaxed">
            Este produto digital é uma apostila de receitas e técnicas de panificação e não possui qualquer afiliação, representação ou endosso oficial de marcas registradas como Britânia, Mondial, Philco, Cadence, Arno, Oster ou qualquer outra fabricante de eletrodomésticos.
          </p>
          <div className="h-px bg-amber-900/40 w-16 mx-auto my-4" />
          <p className="text-[10px]">
            © {new Date().getFullYear()} Guia Prático da Máquina de Pão. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* CHECKOUT MODAL DRAWER */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        mockupImg={guiaMockup}
        selectedTier={selectedTier}
      />

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
