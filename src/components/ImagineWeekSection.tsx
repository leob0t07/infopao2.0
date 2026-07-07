import { motion } from "motion/react";
import { WEEK_DAYS } from "../data";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

export default function ImagineWeekSection() {
  return (
    <section className="bg-brand-bg py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Soft background aesthetics */}
      <div className="absolute top-1/2 right-1/10 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#EAE3D2] text-brand-text px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5 text-brand-green" />
            Sua Nova Realidade
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            ✨ Imagine sua nova semana
          </h2>
          
          <p className="text-xs md:text-sm text-brand-text/60 uppercase tracking-widest font-semibold font-sans">
            Acabe de vez com o estresse culinário do dia a dia
          </p>
        </div>

        {/* 4 Cards Grid - Polaroid Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 pt-4">
          {WEEK_DAYS.map((item, idx) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-4 pb-6 rounded-2xl shadow-md border border-brand-text/5 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card Image Area */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-neutral-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Day tag */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-brand-darkgreen text-xs font-semibold px-2.5 py-1 rounded-lg shadow-sm font-title">
                    {item.day}
                  </span>

                  {/* Floating category tag */}
                  <span className="absolute bottom-3 right-3 bg-brand-green text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="text-left space-y-2">
                  <h4 className="font-title font-bold text-xl text-brand-text flex items-center gap-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-brand-text/75 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Minimalist bottom line */}
              <div className="pt-4 mt-4 border-t border-brand-text/10 flex items-center justify-between text-[11px] text-brand-green font-semibold">
                <span className="uppercase tracking-wider font-sans">Sem Glúten</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Short persuasive text box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/80 border border-brand-green/10 p-6 rounded-2xl max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Sparkles className="w-5 h-5 text-brand-gold animate-pulse shrink-0" />
          <p className="text-xs md:text-sm text-brand-text/80 font-sans font-medium">
            De segundas solitárias a jantares festivos de fim de semana: cozinhar com prazer virará o seu novo hábito saudável.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
