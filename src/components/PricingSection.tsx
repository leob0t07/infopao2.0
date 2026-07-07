import { motion } from "motion/react";
import { Check, X, Shield, Star, Sparkles, HelpCircle } from "lucide-react";

interface PricingSectionProps {
  onPlanSelect: (planName: string, price: number) => void;
}

export default function PricingSection({ onPlanSelect }: PricingSectionProps) {
  return (
    <section id="pricing-section" className="bg-brand-bg py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative ambient blurred backgrounds */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#EAE3D2] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#EAE3D2] text-brand-text px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            Oportunidade Única
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            Escolha o seu plano e comece hoje mesmo
          </h2>

          <p className="text-sm md:text-base text-brand-text/75 font-sans">
            Acesso imediato e vitalício para transformar sua mesa. Escolha a melhor opção para a sua rotina:
          </p>
        </div>

        {/* 2 Plans Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Plan 1: Essencial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] border border-brand-text/5 shadow-md flex flex-col justify-between text-left relative hover:shadow-xl transition-all duration-300 group"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-text/50 font-bold font-sans">O Essencial</span>
                <h3 className="font-title font-bold text-2xl text-brand-text">PLANO ESSENCIAL</h3>
                <p className="text-xs text-brand-text/60">Perfeito para quem quer começar a testar as receitas básicas imediatamente.</p>
              </div>

              {/* Price */}
              <div className="py-2 border-y border-brand-text/5 flex items-baseline gap-2">
                <span className="text-sm text-brand-text/60 font-medium">R$</span>
                <span className="text-5xl font-bold font-title text-brand-text">9</span>
                <span className="text-xs text-brand-text/50 uppercase tracking-wider font-semibold font-sans">Pagamento Único</span>
              </div>

              {/* Included features list */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-brand-text/50 uppercase tracking-widest">O que está incluso:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/80">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Método Mesa Sem Glúten</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/80">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>+120 Receitas Testadas</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/80">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Organização por Refeição</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/80">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Acesso Imediato & Vitalício</span>
                  </li>
                  
                  {/* Excluded items */}
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/40">
                    <X className="w-4 h-4 text-brand-text/30 shrink-0 mt-0.5" />
                    <span className="line-through">Cardápio Completo de 30 dias</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/40">
                    <X className="w-4 h-4 text-brand-text/30 shrink-0 mt-0.5" />
                    <span className="line-through">Guia Detalhado das Farinhas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onPlanSelect("Plano Essencial", 9)}
                id="plan-essencial-btn"
                className="w-full bg-[#EAE3D2] hover:bg-brand-green hover:text-white text-brand-text font-bold py-4 px-6 rounded-xl text-sm transition-all duration-300 cursor-pointer text-center block"
              >
                QUERO O PLANO ESSENCIAL
              </button>
            </div>
          </motion.div>

          {/* Plan 2: Completo (Most Popular) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 md:p-10 rounded-[2.2rem] border-2 border-brand-green shadow-xl flex flex-col justify-between text-left relative hover:shadow-2xl transition-all duration-300 scale-105 md:scale-105"
          >
            {/* Visual Most Popular Tag */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-green text-white text-[10px] tracking-widest font-bold px-4 py-1.5 rounded-full uppercase shadow-md flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-brand-gold text-brand-gold animate-spin" />
              Mais Escolhido pelos Alunos
            </div>

            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-green font-bold font-sans">O Mais Completo</span>
                <h3 className="font-title font-bold text-2xl text-brand-text flex items-center gap-2">
                  PLANO COMPLETO
                  <span className="bg-brand-gold/15 text-brand-gold text-[9px] px-2 py-0.5 rounded-md font-sans">BEST VALUE</span>
                </h3>
                <p className="text-xs text-brand-text/60">Para quem quer domínio absoluto, economia máxima e sem chance de errar.</p>
              </div>

              {/* Price */}
              <div className="py-2 border-y border-brand-green/15 flex items-baseline gap-2">
                <span className="text-sm text-brand-green font-medium">R$</span>
                <span className="text-5xl font-bold font-title text-brand-green">17</span>
                <span className="text-xs text-brand-green/60 uppercase tracking-wider font-semibold font-sans">Pagamento Único</span>
              </div>

              {/* Included features list */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-brand-green uppercase tracking-widest">TUDO do Essencial + :</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/90 font-medium">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Cardápio inteligente de 30 dias</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/90 font-medium">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Guia Definitivo das Farinhas</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/90 font-medium">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Lista Inteligente de Compras</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/90 font-medium">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Método do Congelamento Exclusivo</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/90 font-medium">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Guia das Substituições Inteligentes</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/90 font-medium">
                    <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>Atualizações futuras 100% grátis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onPlanSelect("Plano Completo", 17)}
                id="plan-completo-btn"
                className="w-full bg-brand-green hover:bg-brand-darkgreen text-white font-bold py-4 px-6 rounded-xl text-sm shadow-md shadow-brand-green/20 hover:shadow-xl transition-all duration-300 cursor-pointer text-center block"
              >
                QUERO O PLANO COMPLETO AGORA ➜
              </button>
            </div>
          </motion.div>

        </div>

        {/* COMPARATIVE TABLE - Premium Apple/Notion Style */}
        <div className="pt-10 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-text/50 font-bold">Análise detalhada</span>
            <h3 className="font-title font-bold text-2xl text-brand-text">Tabela Comparativa Elegante</h3>
          </div>

          <div className="bg-white rounded-3xl border border-brand-text/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FBF9F6] border-b border-brand-text/5 text-brand-text">
                    <th className="p-4 sm:p-5 font-bold font-title">Conteúdo / Recurso</th>
                    <th className="p-4 sm:p-5 text-center font-bold">Essencial</th>
                    <th className="p-4 sm:p-5 text-center font-bold text-brand-green bg-brand-green/5">Completo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-text/5 font-sans">
                  <tr>
                    <td className="p-4 sm:p-5 font-medium text-brand-text">Guia Método Mesa Sem Glúten</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center bg-brand-green/5"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-medium text-brand-text">+120 Receitas de Manhã à Noite</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center bg-brand-green/5"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-medium text-brand-text">Acesso Imediato e Vitalício</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center bg-brand-green/5"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-medium text-brand-text">Cardápio Inteligente de 30 dias</td>
                    <td className="p-4 sm:p-5 text-center text-red-400 font-bold">-</td>
                    <td className="p-4 sm:p-5 text-center bg-brand-green/5"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-medium text-brand-text">Guia Definitivo de Farinhas e Pesos</td>
                    <td className="p-4 sm:p-5 text-center text-red-400 font-bold">-</td>
                    <td className="p-4 sm:p-5 text-center bg-brand-green/5"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-medium text-brand-text">Lista Inteligente de Compras</td>
                    <td className="p-4 sm:p-5 text-center text-red-400 font-bold">-</td>
                    <td className="p-4 sm:p-5 text-center bg-brand-green/5"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-medium text-brand-text">Manual Completo de Congelamento</td>
                    <td className="p-4 sm:p-5 text-center text-red-400 font-bold">-</td>
                    <td className="p-4 sm:p-5 text-center bg-brand-green/5"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-medium text-brand-text">Guia das Substituições Inteligentes</td>
                    <td className="p-4 sm:p-5 text-center text-red-400 font-bold">-</td>
                    <td className="p-4 sm:p-5 text-center bg-brand-green/5"><Check className="w-4 h-4 text-brand-green mx-auto" /></td>
                  </tr>
                  <tr className="bg-[#FBF9F6]">
                    <td className="p-4 sm:p-5 font-bold text-brand-text">Investimento Único</td>
                    <td className="p-4 sm:p-5 text-center font-bold text-brand-text">R$ 9</td>
                    <td className="p-4 sm:p-5 text-center font-bold text-brand-green bg-brand-green/5">R$ 17</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SECTION 12: GARANTIA DE 7 DIAS WITH SEAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-md border border-brand-green/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
        >
          {/* Sêlo Visual */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-36 h-36 bg-brand-gold/10 rounded-full flex items-center justify-center border-4 border-dashed border-brand-gold/40">
              <div className="w-28 h-28 bg-brand-gold text-white rounded-full flex flex-col items-center justify-center text-center shadow-lg transform hover:scale-105 transition-transform">
                <Shield className="w-7 h-7 stroke-[2.5]" />
                <span className="text-[10px] font-bold uppercase tracking-wider font-sans mt-1">Garantia</span>
                <span className="text-lg font-bold font-title">7 DIAS</span>
              </div>
            </div>
          </div>

          {/* Copy text */}
          <div className="md:col-span-8 space-y-4">
            <h4 className="font-title font-bold text-2xl text-brand-text flex items-center gap-2">
              🛡️ GARANTIA INCONDICIONAL DE 7 DIAS
            </h4>
            <div className="space-y-3 font-sans text-sm md:text-base text-brand-text/80 leading-relaxed">
              <p>
                Nós confiamos tanto na qualidade do <strong>Método Mesa Sem Glúten</strong> que tiramos todo o risco das suas costas. O seu risco aqui é zero absoluto.
              </p>
              <p>
                Acesse o método, faça o download, prepare as primeiras receitas do cardápio e comprove a maciez dos pães e a facilidade dos passos. Se dentro de 7 dias você sentir que as receitas não dão certo ou que o método não é para você, basta nos enviar um único e-mail.
              </p>
              <p className="font-semibold text-brand-green">
                Nós devolveremos 100% do seu dinheiro investido imediatamente, sem perguntas, sem burocracia e sem nenhum ressentimento.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
