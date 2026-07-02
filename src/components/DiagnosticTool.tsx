import React, { useState } from 'react';
import { DiagnosticProblem } from '../types';
import { 
  AlertTriangle, 
  CheckCircle, 
  ChevronRight, 
  HelpCircle, 
  Sparkles, 
  RotateCcw,
  BookOpen,
  HelpCircle as QuestionIcon
} from 'lucide-react';

const BRANDS = [
  'Britânia Multipane',
  'Mondial Master Bread',
  'Cadence Padicollor',
  'Philco Pane Easy',
  'Arno La Baguette',
  'Outra Marca / Não sei'
];

const PROBLEMS: DiagnosticProblem[] = [
  {
    id: 'collapsed',
    label: 'O pão cresce, mas depois afunda/murcha no meio',
    description: 'O pão começa lindo, mas na hora de assar ele desinfla no centro igual a uma bexiga, ficando feio e murcho.',
    cause: 'Geralmente causado por excesso de água/leite em relação à farinha nacional, ou excesso de fermento. O teto da massa perde a estrutura e desaba com o vapor quente.',
    solutionPage: 'Página 14 do Guia Prático: A Fórmula Secreta de Proporção de Líquidos',
    advice: 'Experimente reduzir apenas 10ml a 15ml de água/leite na próxima vez. E certifique-se de que a água não esteja morna demais.'
  },
  {
    id: 'brick',
    label: 'O pão fica pesado, solado ou duro no dia seguinte',
    description: 'O pão sai quente e gostoso, mas horas depois vira uma pedra ou fica pesado, seco e difícil de mastigar.',
    cause: 'Falta de gordura correta para prender a umidade na massa ou uso excessivo de farinha na tentativa de dar ponto. Manuais comuns não ensinam a reter a umidade natural da farinha nacional.',
    solutionPage: 'Página 22 do Guia Prático: O Método Antidureza de 4 Dias',
    advice: 'Substituir o óleo por manteiga na proporção correta e usar o segredo do amido (revelado na pág. 22) mantém o pão macio por dias sem usar conservante químico.'
  },
  {
    id: 'not_rising',
    label: 'O pão não cresce quase nada e fica "solado"',
    description: 'O pão fica baixo, pesado, parecendo um bloco compacto de massa assada, sem alvéolos e sem leveza.',
    cause: 'Morte do fermento (líquidos quentes demais), contato prematuro do fermento com o sal na cuba, ou uso de fermento biológico que perdeu a força após aberto.',
    solutionPage: 'Página 19 do Guia Prático: A "Ordem Sagrada" de Camadas na Cuba',
    advice: 'O fermento NUNCA deve tocar o sal ou a água antes do início da mistura. Crie uma "cova" na farinha seca para depositar o fermento no topo.'
  },
  {
    id: 'dusty_machine',
    label: 'A máquina está encostada (medo de usar ou errar)',
    description: 'Você comprou com empolgação, errou as primeiras vezes, sentiu que jogou dinheiro fora e agora ela está acumulando poeira.',
    cause: 'Trauma causado pelos manuais de fábrica oficiais, que trazem receitas traduzidas de forma genérica sem considerar o clima úmido e as marcas de farinha do Brasil.',
    solutionPage: 'Página 7 do Guia Prático: O Manual de Resgate da Máquina em 10 Minutos',
    advice: 'A culpa nunca foi sua! Com a nossa receita de Pão de Leite de Colher (pág. 9), você vai perder o medo de primeira com um pão perfeito.'
  },
  {
    id: 'ciclo_massa',
    label: 'Quero usar o "Ciclo Massa" para formatos artesanais',
    description: 'Você quer fazer pizza, tranças, pães doces ou brioches em formatos bonitos, mas não sabe como usar a máquina para ajudar.',
    cause: 'A máquina é uma assistente fantástica que faz o trabalho pesado de sovar e descansar. Muita gente acha que ela serve apenas para assar em formato de "tijolinho".',
    solutionPage: 'Página 35 do Guia Prático: O Segredo do Ciclo Massa e Modelagem',
    advice: 'Deixe a máquina fazer a sova perfecta no ciclo "Massa" (geralmente 1h30). Tire a massa lisinha, modele como quiser, asse no seu forno convencional e surpreenda a todos!'
  }
];

export default function DiagnosticTool() {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedProblem, setSelectedProblem] = useState<DiagnosticProblem | null>(null);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setActiveStep(2);
  };

  const handleProblemSelect = (problem: DiagnosticProblem) => {
    setSelectedProblem(problem);
    setActiveStep(3);
  };

  const resetDiagnostic = () => {
    setSelectedBrand('');
    setSelectedProblem(null);
    setActiveStep(1);
  };

  return (
    <div id="diagnostic-tool" className="bg-white rounded-2xl border border-[#ece3d4] shadow-sm overflow-hidden max-w-3xl mx-auto">
      {/* Tool Header */}
      <div className="bg-[#FAF7F2] p-6 border-b border-[#ece3d4] text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Mini-Diagnóstico Gratuito e Instantâneo
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-[#2c1d11] font-bold">
          Descubra o que está sabotando seu pão
        </h3>
        <p className="text-sm text-amber-900/70 mt-1 max-w-md mx-auto">
          Selecione os detalhes abaixo para receber uma análise imediata de causa e efeito baseada na panificação brasileira.
        </p>
      </div>

      {/* Steps Progress */}
      <div className="flex border-b border-[#ece3d4] text-xs font-medium text-amber-900/50 bg-[#FCFAF7]">
        <div className={`flex-1 py-3 text-center border-r border-[#ece3d4] transition-colors ${activeStep === 1 ? 'text-amber-800 font-semibold bg-amber-50' : ''}`}>
          1. Sua Máquina
        </div>
        <div className={`flex-1 py-3 text-center border-r border-[#ece3d4] transition-colors ${activeStep === 2 ? 'text-amber-800 font-semibold bg-amber-50' : ''}`}>
          2. O Sintoma
        </div>
        <div className={`flex-1 py-3 text-center transition-colors ${activeStep === 3 ? 'text-amber-800 font-semibold bg-amber-50' : ''}`}>
          3. O Diagnóstico
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* STEP 1: Brand Selection */}
        {activeStep === 1 && (
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#2c1d11] font-semibold text-center mb-4">
              Qual é a marca ou modelo da sua panificadora?
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {BRANDS.map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandSelect(brand)}
                  className="p-4 rounded-xl border border-[#ece3d4] hover:border-amber-600 hover:bg-amber-50/50 transition text-sm font-medium text-[#2c1d11] text-center flex flex-col justify-center items-center gap-2 cursor-pointer"
                  id={`brand-btn-${brand.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-mono text-xs font-bold">
                    {brand[0]}
                  </span>
                  <span>{brand}</span>
                </button>
              ))}
            </div>
            <div className="text-center pt-4">
              <p className="text-xs text-amber-900/50 flex items-center justify-center gap-1">
                <QuestionIcon className="w-3.5 h-3.5" />
                Dica: O guia funciona perfeitamente para TODAS as marcas vendidas no Brasil!
              </p>
            </div>
          </div>
        )}

        {/* STEP 2: Problem Selection */}
        {activeStep === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <button 
                onClick={() => setActiveStep(1)}
                className="text-xs text-amber-700 hover:underline flex items-center gap-1 cursor-pointer"
                id="back-step-1"
              >
                ← Mudar máquina ({selectedBrand})
              </button>
              <span className="text-xs text-amber-900/60">Passo 2 de 3</span>
            </div>
            <h4 className="font-serif text-lg text-[#2c1d11] font-semibold text-center mb-4">
              Qual desses problemas mais te incomoda?
            </h4>
            <div className="space-y-4">
              {PROBLEMS.map((prob) => (
                <button
                  key={prob.id}
                  onClick={() => handleProblemSelect(prob)}
                  className="w-full p-4 rounded-xl border border-[#ece3d4] hover:border-amber-600 hover:bg-amber-50/50 transition text-left flex items-start gap-3 cursor-pointer"
                  id={`prob-btn-${prob.id}`}
                >
                  <div className="mt-0.5 p-1 rounded bg-amber-100 text-amber-800">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#2c1d11]">{prob.label}</p>
                    <p className="text-xs text-amber-900/60 mt-0.5">{prob.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto text-amber-900/40 shrink-0 self-center" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Diagnostic Report */}
        {activeStep === 3 && selectedProblem && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#ece3d4]/60 pb-3">
              <button 
                onClick={() => setActiveStep(2)}
                className="text-xs text-amber-700 hover:underline flex items-center gap-1 cursor-pointer"
                id="back-step-2"
              >
                ← Voltar aos problemas
              </button>
              <span className="text-xs font-mono text-amber-900/50 bg-amber-50 px-2 py-0.5 rounded">
                Equipamento: {selectedBrand}
              </span>
            </div>

            {/* Diagnostic Content */}
            <div className="bg-amber-50/40 rounded-xl p-6 border border-amber-600/10 space-y-4 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif text-[#2c1d11] font-bold text-base">
                    Análise do Sintoma: "{selectedProblem.label}"
                  </h5>
                  <p className="text-xs text-amber-900/70 mt-1">
                    {selectedProblem.description}
                  </p>
                </div>
              </div>

              {/* Cause and Effect */}
              <div className="border-t border-amber-600/10 pt-6 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-amber-800">Por que isso acontece? (A Causa Científica)</span>
                  <p className="text-sm text-amber-950 mt-1 leading-relaxed">
                    {selectedProblem.cause}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-[#ece3d4] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Dica de Resgate Imediato
                  </span>
                  <p className="text-sm text-emerald-950 mt-1 leading-relaxed">
                    {selectedProblem.advice}
                  </p>
                </div>
              </div>
            </div>

            {/* Integration with Pitch */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 rounded-xl p-6 border border-amber-600/20 text-center space-y-4 shadow-xs">
              <p className="text-xs text-amber-900/50 uppercase tracking-widest font-bold">Resolução Definitiva</p>
              <div className="flex items-center justify-center gap-1.5 text-[#2c1d11] font-bold">
                <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-serif text-sm md:text-base">{selectedProblem.solutionPage}</span>
              </div>
              <p className="text-xs text-amber-900/70 max-w-lg mx-auto">
                No Guia Prático, nós detalhamos não apenas essa dica, mas toda a tabela de ajuste fino de umidade brasileira que vai salvar 100% das suas próximas receitas de forma automática.
              </p>
              <div className="pt-2">
                <a 
                  href="#pricing-section" 
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  id="diagnostic-cta-btn"
                >
                  Garantir o Guia Completo por R$ 10 <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <button
                onClick={resetDiagnostic}
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-950 hover:underline cursor-pointer"
                id="reset-diagnostic-btn"
              >
                <RotateCcw className="w-3 h-3" /> Fazer outro diagnóstico
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
