import { motion } from "motion/react";
import { Wheat, Droplets, Fingerprint, CookingPot, Plus, MoveDown, HelpCircle, CheckCircle } from "lucide-react";

export default function TruthSection() {
  return (
    <section className="bg-brand-darkgreen text-white py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Background soft glow effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#355C4B]/45 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/10 right-1/10 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-12 md:space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            A verdade oculta
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-title font-bold leading-tight"
          >
            ⚡ A verdade que não te contam na internet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 font-sans font-light italic"
          >
            O problema das suas receitas darem errado nunca foi você.
          </motion.p>
        </div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl text-left max-w-3xl mx-auto space-y-4 font-sans text-white/90 text-sm md:text-base leading-relaxed"
        >
          <p>
            As receitas de Instagram e YouTube mostram apenas uma lista fria de ingredientes. Eles dizem: &ldquo;use 150g de farinha X e 100g de farinha Y&rdquo;, mas <strong>escondem a lógica essencial</strong> que faz a panificação sem glúten funcionar de verdade.
          </p>
          <p>
            Sem glúten, não há a rede elástica tradicional que retém os gases do fermento. Se você apenas mistura farinhas sem entender a proporção exata, o resultado sempre será um tijolo pesado ou um miolo molhado esfarelento.
          </p>
          <p>
            Foi justamente para resolver essa adivinhação que desenvolvemos uma ciência culinária simplificada:
          </p>
        </motion.div>

        {/* METODO DA PROPORCAO BASE™ - Interactive elegant flowchart */}
        <div className="space-y-8 pt-4">
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">A LÓGICA QUE NUNCA FALHA</span>
            <h3 className="text-2xl md:text-3xl font-title font-semibold mt-1">Método da Proporção Base™</h3>
          </div>

          {/* Flowchart graphic */}
          <div className="relative max-w-4xl mx-auto">
            {/* Horizontal Line connector (Desktop only) */}
            <div className="hidden md:block absolute top-[64px] left-[15%] right-[15%] h-0.5 border-t border-dashed border-white/20 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start relative z-10">
              
              {/* Pillar 1: Farinhas */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center space-y-3 hover:border-brand-gold/40 transition-colors group relative"
              >
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform">
                  <Wheat className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-2 right-2 text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded-full text-white/60">
                  Pilar 01
                </div>
                <h4 className="font-title font-bold text-lg text-brand-gold">Farinhas Estruturais</h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Arroz, aveia sem glúten, painço ou milho. Fornecem a base sólida, o peso e o miolo macio.
                </p>
              </motion.div>

              {/* Pillar 2: Líquidos */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center space-y-3 hover:border-brand-gold/40 transition-colors group relative"
              >
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-2 right-2 text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded-full text-white/60">
                  Pilar 02
                </div>
                <h4 className="font-title font-bold text-lg text-brand-gold">Hidratação Precisa</h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Água, leite vegetal ou sucos. Ativam a fermentação e garantem que o pão não fique seco.
                </p>
              </motion.div>

              {/* Pillar 3: Estruturantes */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center space-y-3 hover:border-brand-gold/40 transition-colors group relative"
              >
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform">
                  <Fingerprint className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-2 right-2 text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded-full text-white/60">
                  Pilar 03
                </div>
                <h4 className="font-title font-bold text-lg text-brand-gold">Liga e Alveolado</h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Psyllium, linhaça ou ovos. Substituem as redes elásticas do glúten para prender os gases.
                </p>
              </motion.div>

            </div>

            {/* Downward indicator block */}
            <div className="flex justify-center my-6">
              <div className="bg-brand-gold text-brand-darkgreen p-3 rounded-full shadow-lg border-4 border-brand-darkgreen relative animate-bounce">
                <MoveDown className="w-6 h-6 stroke-[3px]" />
              </div>
            </div>

            {/* Target Outcome Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white text-brand-text max-w-md mx-auto p-6 rounded-3xl shadow-2xl border-2 border-brand-gold text-center space-y-2 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white text-[10px] tracking-widest font-bold px-3 py-1 rounded-full uppercase">
                O Resultado Infalível
              </div>
              <div className="text-4xl py-2">🍞✨</div>
              <h4 className="font-title font-bold text-xl text-brand-darkgreen">Pão Incrivelmente Leve e Macio</h4>
              <p className="text-xs text-brand-text/75 font-sans">
                A proporção exata e equilibrada que garante alvéolos, casca crocante e textura elástica perfeita.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Final Bullet points text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 max-w-4xl mx-auto text-left"
        >
          <div className="flex gap-2.5 items-start">
            <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <p className="text-xs text-white/90 font-sans">
              <strong className="text-brand-gold">Ingredientes Comuns:</strong> Compre tudo no supermercado do seu bairro.
            </p>
          </div>
          <div className="flex gap-2.5 items-start">
            <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <p className="text-xs text-white/90 font-sans">
              <strong className="text-brand-gold">Sem Farinhas Impossíveis:</strong> Chega de ingredientes de nomes indecifráveis.
            </p>
          </div>
          <div className="flex gap-2.5 items-start">
            <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <p className="text-xs text-white/90 font-sans">
              <strong className="text-brand-gold">Sem Desperdício:</strong> Receitas com pesos exatos para acertar de primeira.
            </p>
          </div>
          <div className="flex gap-2.5 items-start">
            <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <p className="text-xs text-white/90 font-sans">
              <strong className="text-brand-gold">Sem Adivinhação:</strong> Temperatura, tempo e ponto visual explicados passo a passo.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
