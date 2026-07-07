import { motion } from "motion/react";
import { FEATURE_CARDS } from "../data";
import { Sparkles, ArrowDownUp, Snowflake, BadgeDollarSign, Heart } from "lucide-react";

// Icon helper
function getFeatureIcon(iconName: string) {
  switch (iconName) {
    case "Sparkles":
      return <Sparkles className="w-6 h-6 text-brand-gold" />;
    case "Replace":
      return <ArrowDownUp className="w-6 h-6 text-brand-gold" />;
    case "Snowflake":
      return <Snowflake className="w-6 h-6 text-brand-gold" />;
    case "BadgeDollarSign":
      return <BadgeDollarSign className="w-6 h-6 text-brand-gold" />;
    default:
      return <Heart className="w-6 h-6 text-brand-gold" />;
  }
}

export default function MoreThanRecipesSection() {
  return (
    <section className="bg-brand-bg py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#EAE3D2] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Header block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#EAE3D2] text-brand-text px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            Vantagens do Método
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            ⭐ Muito mais do que receitas
          </h2>
          
          <p className="text-sm md:text-base text-brand-text/75 font-sans font-light">
            Nós te ensinamos a ser autônomo na cozinha sem glúten, sem depender de receitas rígidas para sempre.
          </p>
        </div>

        {/* 4 Cards Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {FEATURE_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-brand-text/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start text-left group"
            >
              {/* Left Column: Icon Container */}
              <div className="bg-brand-bg p-4 rounded-2xl text-brand-gold shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                {getFeatureIcon(card.icon)}
              </div>

              {/* Right Column: Copy */}
              <div className="space-y-3">
                <h3 className="font-title font-bold text-xl md:text-2xl text-brand-text group-hover:text-brand-green transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-brand-text/70 font-sans leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-converting stat line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 text-center"
        >
          <div className="inline-block bg-white border border-brand-green/10 rounded-full px-6 py-2.5 shadow-sm">
            <p className="text-xs md:text-sm text-brand-text font-medium">
              💡 <strong className="text-brand-green">94% das alunas</strong> relatam economia na primeira semana e pães muito mais macios.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
