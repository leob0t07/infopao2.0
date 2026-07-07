import { motion } from "motion/react";
import { AlertCircle, Trash2, ArrowRight, Ban, XCircle } from "lucide-react";
import staleBreadImage from "../assets/images/stale_bread_hammer_1783434692822.jpg";

export default function ChallengeSection() {
  return (
    <div className="bg-white py-20 md:py-28 px-4 md:px-8 border-y border-brand-text/5">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">
        
        {/* SECTION 2: O DESAFIO DIÁRIO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image of crumbly dry bread */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-xl border border-brand-text/5 bg-neutral-100">
              <img
                src={staleBreadImage}
                alt="Pão duro como pedra com martelo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[10%] contrast-[105%]"
              />
              <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
              
              {/* Danger floating label */}
              <div className="absolute top-4 right-4 bg-red-50/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-red-100 flex items-center gap-2">
                <Ban className="w-4 h-4 text-red-600" />
                <span className="text-xs font-semibold text-red-700 font-sans uppercase">Esfarela e Sem Sabor</span>
              </div>
            </div>

            {/* Price tags visuals showing absolute overpricing */}
            <div className="absolute -bottom-6 -right-4 bg-brand-bg border border-brand-green/20 p-4 rounded-2xl shadow-lg space-y-1.5 hidden sm:block">
              <p className="text-[10px] text-brand-text/50 uppercase tracking-widest font-bold">Preço Médio Industrializado</p>
              <div className="flex items-center gap-3">
                <span className="text-xs line-through text-red-400">R$ 15,00</span>
                <span className="text-base font-bold text-red-600 font-title">R$ 29,90 / un</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              O Desafio Diário
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
              Comer sem glúten virou um estresse na sua rotina?
            </h2>

            <div className="space-y-4 text-brand-text/80 font-sans leading-relaxed text-sm md:text-base">
              <p>
                Tudo começa de forma inocente no supermercado... Você vai comprar um simples pão para poder tomar um café digno de manhã.
              </p>
              <p>
                Mas quando olha a etiqueta da versão sem glúten na prateleira especial, seu coração gela:
              </p>

              {/* Price visual timeline */}
              <div className="grid grid-cols-3 gap-3 pt-2 pb-2">
                <div className="bg-red-50/50 p-3 rounded-xl border border-red-100 text-center">
                  <span className="block text-xs text-brand-text/60">Pão de fôrma</span>
                  <span className="text-base md:text-lg font-bold text-red-700">R$ 20</span>
                </div>
                <div className="bg-red-50/50 p-3 rounded-xl border border-red-100 text-center scale-105 shadow-sm">
                  <span className="block text-xs text-brand-text/60">Pão Artesanal</span>
                  <span className="text-base md:text-lg font-bold text-red-700">R$ 25</span>
                </div>
                <div className="bg-red-50/55 p-3 rounded-xl border border-red-200 text-center">
                  <span className="block text-xs text-brand-text/60">Pão Rústico</span>
                  <span className="text-base md:text-lg font-bold text-red-700">R$ 30+</span>
                </div>
              </div>

              <p className="italic text-brand-text/70">
                Às vezes, mais de trinta reais por um único pão pequeno. Mesmo com o valor abusivo, você compra. Afinal, você precisa comer.
              </p>
              <p>
                No dia seguinte, ansiosa pela primeira fatia, você aperta o pão levemente... <strong>Ele quebra</strong>. O miolo está seco, sem qualquer elasticidade, sem gosto e com a textura de areia.
              </p>
            </div>

            <div className="pt-2 border-l-4 border-red-500 pl-4">
              <p className="font-title italic text-base md:text-lg text-brand-text/90">
                &ldquo;Não é possível que eu paguei tudo isso por algo que parece papelão seco.&rdquo;
              </p>
            </div>
          </motion.div>

        </div>

        {/* SECTION 3: O CICLO DA FRUSTRAÇÃO */}
        <div className="max-w-4xl mx-auto pt-8">
          
          {/* Centered Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#EAE3D2] text-brand-text/80 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <XCircle className="w-3.5 h-3.5 text-brand-gold" />
              O Ciclo da Frustração
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
              De receitas de internet a tijolos assados em casa
            </h2>

            <div className="space-y-4 text-brand-text/80 font-sans leading-relaxed text-sm md:text-base">
              <p>
                Revoltada com os preços abusivos, você decide tomar as rédeas da cozinha: <span className="font-semibold text-brand-text">&ldquo;Vou aprender a fazer em casa!&rdquo;</span>
              </p>
              <p>
                Você abre o Instagram, depois o YouTube, depois navega por horas no Google. Mas aí começa a verdadeira confusão mental. Cada chef ensina uma técnica diferente:
              </p>

              <ul className="space-y-2 pl-2">
                <li className="flex items-center gap-2 text-brand-text/90">
                  <span className="text-brand-gold font-bold">➜</span> Uma receita usa 5 tipos de farinhas importadas.
                </li>
                <li className="flex items-center gap-2 text-brand-text/90">
                  <span className="text-brand-gold font-bold">➜</span> Outra exige 7 misturas e gomas de nomes estranhos.
                </li>
                <li className="flex items-center gap-2 text-brand-text/90">
                  <span className="text-brand-gold font-bold">➜</span> Outras dizem que você precisa de ingredientes quase impossíveis de achar.
                </li>
              </ul>

              <p>
                Você compra tudo, gasta mais uma pequena fortuna, gasta tempo pesando cada miligrama, mistura, espera crescer ansiosamente e assa.
              </p>
              <p>
                E quando finalmente tira do forno... <strong>O pão não cresce.</strong> A massa vira um bloco pesado, duro como tijolo. O bolo desmonta inteiro ao desenformar. O desperdício de ingredientes caros dói no bolso.
              </p>
            </div>

            <div className="pt-2 bg-brand-bg p-4 rounded-2xl border border-brand-text/5">
              <p className="font-semibold text-brand-text text-sm md:text-base flex items-center gap-2">
                <span>🤯</span> Você começa a acreditar que cozinhar sem glúten gostoso é impossível.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
