import { motion } from "motion/react";
import { Brain, Heart, HeartHandshake, Smile, AlertCircle } from "lucide-react";

export default function WhySection() {
  return (
    <section className="bg-brand-bg py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#EAE3D2] text-brand-text px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Brain className="w-3.5 h-3.5 text-brand-green" />
            Consciência e Bem-Estar
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            Por que tanta gente está escolhendo uma alimentação sem glúten?
          </h2>

          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mt-4" />
        </div>

        {/* Narrative introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-brand-text/85 font-sans font-light max-w-3xl mx-auto text-center leading-relaxed"
        >
          O glúten é uma proteína complexa de difícil digestão encontrada principalmente no <strong>trigo, cevada e centeio</strong>. O que antes era restrito a pequenos nichos, hoje se tornou uma escolha de bem-estar para milhões de pessoas.
        </motion.p>

        {/* Grids representing profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          {/* Profile 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-brand-text/5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-title font-bold text-lg text-brand-text">Doença Celíaca</h3>
            <p className="text-xs md:text-sm text-brand-text/75 font-sans leading-relaxed">
              Uma condição autoimune severa onde a mínima partícula de glúten danifica as paredes do intestino delgado, exigindo uma exclusão 100% rígida para o resto da vida.
            </p>
          </motion.div>

          {/* Profile 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-brand-text/5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-title font-bold text-lg text-brand-text">Sensibilidade Não-Celíaca</h3>
            <p className="text-xs md:text-sm text-brand-text/75 font-sans leading-relaxed">
              Pessoas que sofrem com distensão abdominal, dores de cabeça, nevoeiro mental e fadiga crônica ao ingerir glúten, sentindo melhora imediata ao retirá-lo.
            </p>
          </motion.div>

          {/* Profile 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-3xl border border-brand-text/5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-50 text-brand-green rounded-2xl flex items-center justify-center">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="font-title font-bold text-lg text-brand-text">Estilo de Vida & Saúde</h3>
            <p className="text-xs md:text-sm text-brand-text/75 font-sans leading-relaxed">
              Milhares de pessoas optam por reduzir o consumo por recomendação médica, nutricional ou simplesmente para diminuir processos inflamatórios e melhorar a digestão diária.
            </p>
          </motion.div>

        </div>

        {/* The Real Challenge Conclusion Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-green text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto"
        >
          <div className="p-4 bg-white/10 rounded-2xl text-brand-gold shrink-0">
            <AlertCircle className="w-10 h-10 stroke-[2.5]" />
          </div>
          <div className="space-y-3 text-left">
            <h3 className="font-title font-bold text-xl md:text-2xl text-white">
              O verdadeiro desafio nunca foi &ldquo;retirar&rdquo; o glúten...
            </h3>
            <p className="text-sm text-white/85 font-sans leading-relaxed">
              Excluir o trigo é a parte fácil. O verdadeiro obstáculo é encontrar receitas alternativas que sejam <strong>realmente saborosas, fofinhas e econômicas</strong> de preparar. Ninguém quer viver comendo comidas insossas e duras. O Método Mesa Sem Glúten foi criado justamente para trazer a alegria e a maciez de volta ao seu prato.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
