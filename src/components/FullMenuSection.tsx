import { motion } from "motion/react";
import { MENU_ITEMS } from "../data";
import { Coffee, UtensilsCrossed, Cookie, Moon, Sparkles, Check } from "lucide-react";

// Helper to render the correct Lucide icon
function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case "Coffee":
      return <Coffee className="w-5 h-5 text-brand-gold" />;
    case "UtensilsCrossed":
      return <UtensilsCrossed className="w-5 h-5 text-brand-gold" />;
    case "Cookie":
      return <Cookie className="w-5 h-5 text-brand-gold" />;
    case "Moon":
      return <Moon className="w-5 h-5 text-brand-gold" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5 text-brand-gold" />;
    default:
      return <Check className="w-5 h-5 text-brand-gold" />;
  }
}

export default function FullMenuSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-8 border-b border-brand-text/5">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Header section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#F8F4EC] text-brand-green px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-green/10"
          >
            🍽️ Cardápio Completo
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            🎯 O seu novo cardápio completo
          </h2>
          <p className="text-sm md:text-base text-brand-text/75 font-sans font-light">
            Nada de refeições monótonas. Tenha opções sofisticadas do amanhecer ao anoitecer.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-brand-bg rounded-3xl overflow-hidden border border-brand-text/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Cover Image */}
                <div className="aspect-[16/10] overflow-hidden relative bg-neutral-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Header Card */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="bg-white/95 backdrop-blur-xs p-1.5 rounded-lg text-brand-darkgreen">
                        {getCategoryIcon(item.icon)}
                      </div>
                      <h4 className="font-title font-bold text-lg leading-tight drop-shadow-md">{item.category}</h4>
                    </div>
                  </div>
                </div>

                {/* Subtitle list */}
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-xs font-semibold text-brand-green uppercase tracking-wider text-left">
                    {item.title}
                  </p>
                  
                  {/* Recipes List */}
                  <ul className="space-y-2.5 text-left">
                    {item.items.map((recipe, rIdx) => (
                      <li key={recipe} className="flex items-start gap-2.5 text-brand-text/80 text-sm font-sans">
                        <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{recipe}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="px-6 py-4 bg-white/40 border-t border-brand-text/5 text-left flex justify-between items-center text-[10px] text-brand-text/55">
                <span className="uppercase font-bold tracking-widest font-sans">100% Testado</span>
                <span>Farinhas acessíveis</span>
              </div>
            </motion.div>
          ))}

          {/* Special CTA Card inserted inside the grid to create rhythm and variation (Bento-box style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-brand-darkgreen text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between text-left lg:col-span-1 border border-brand-gold/20 shadow-lg relative overflow-hidden"
          >
            <div className="absolute -right-12 -bottom-12 w-44 h-44 bg-brand-gold/10 rounded-full blur-2xl" />

            <div className="space-y-4">
              <div className="bg-brand-gold text-brand-darkgreen w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                ⭐
              </div>
              <h4 className="font-title font-bold text-2xl leading-snug">E muito mais...</h4>
              <p className="text-sm text-white/80 font-sans leading-relaxed">
                As receitas são descritas com pesagens exatas em gramas e também em medidas caseiras, com tempos de forno detalhados e ponto de hidratação fotografado passo a passo para eliminação total de erros.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-brand-gold font-semibold uppercase tracking-wider font-sans">
              <span>+120 Receitas no guia</span>
              <span>•</span>
              <span>Acesso vitalício</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
