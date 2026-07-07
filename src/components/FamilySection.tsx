import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import familyPizzaImage from "../assets/images/family_eating_gluten_free_pizza_1783446056549.jpg";

export default function FamilySection() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-8 border-y border-brand-text/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Emotionally Charged Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6 md:space-y-8 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current text-red-600 animate-pulse" />
            Liberdade à Mesa
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            ❤️ Muito mais do que simples receitas... É sobre pertencimento e afeto
          </h2>

          <div className="space-y-5 text-brand-text/85 font-sans text-sm md:text-base leading-relaxed">
            <p>
              Quem tem restrição alimentar sabe a dor silenciosa de ir a um aniversário, a um jantar com amigos ou a um almoço de família e ouvir: <strong>&ldquo;Ah, isso você não pode comer&rdquo;</strong>.
            </p>
            <p>
              Imagine nunca mais precisar levar sua própria marmita de pão seco para os lugares. Imagine nunca mais se sentir um fardo ou a pessoa &ldquo;complicada&rdquo; de convidar para comer.
            </p>
            <p>
              Imagine o prazer indescritível de assar um pão fresco, colocá-lo ainda quentinho no centro da mesa do café da manhã de domingo para toda a família e ver todo mundo comendo a mesma coisa.
            </p>
            <p className="font-semibold text-brand-green">
              E o melhor: ver seus filhos ou amigos pegarem uma fatia, morderem e dizerem espontaneamente:
            </p>
          </div>

          {/* Impactful Quote */}
          <div className="bg-brand-bg p-6 rounded-2xl border-l-4 border-brand-gold relative">
            <span className="absolute -top-4 -left-2 text-6xl text-brand-gold/20 font-title pointer-events-none">&ldquo;</span>
            <p className="font-title italic text-base md:text-lg text-brand-darkgreen font-semibold">
              &ldquo;Nossa, isso está maravilhoso! Nem parece que é sem glúten!&rdquo;
            </p>
          </div>

          <p className="text-brand-text/80 text-sm md:text-base font-sans">
            Isso não é apenas culinária. Isso é <strong>liberdade real</strong>. Isso é ter sua autonomia de volta. Isso é voltar a sentir puro prazer em alimentar quem você ama com carinho e segurança de verdade.
          </p>
        </motion.div>

        {/* Right Column: Beautiful Warm Photograph */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-brand-bg bg-neutral-100">
            <img
              src={familyPizzaImage}
              alt="Família brasileira reunida comendo pizza sem glúten"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Visual bottom stamp */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl text-center shadow-md border border-brand-green/10">
              <p className="text-xs text-brand-green font-bold uppercase tracking-widest font-sans flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                Resgate o prazer de comer em família
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
