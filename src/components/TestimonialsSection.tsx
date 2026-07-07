import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, MessageSquare, CheckCircle } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-8 border-b border-brand-text/5 relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F8F4EC] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#F8F4EC] text-brand-green px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-green/10"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Depoimentos de Sucesso
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            ⭐ Quem provou, aprovou a transformação
          </h2>

          <p className="text-sm md:text-base text-brand-text/75 font-sans">
            Descubra a história de pessoas reais que recuperaram a alegria de comer bem, economizaram e revolucionaram suas cozinhas:
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-brand-bg p-8 rounded-3xl border border-brand-text/5 flex flex-col justify-between text-left hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Star Rating & Quote Accent */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-brand-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  {/* Category Tag */}
                  <span className="bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>

                {/* Main text content */}
                <p className="text-brand-text/85 text-sm md:text-base font-sans leading-relaxed italic pt-1">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* User Profile Info */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-brand-text/10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-green/20">
                  <img
                    src={t.image}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-title font-bold text-brand-text text-sm md:text-base flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle className="w-4 h-4 text-brand-green fill-brand-green/10 shrink-0" />
                  </h4>
                  <p className="text-xs text-brand-text/60 font-sans">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic customer trust statement */}
        <div className="text-center pt-4">
          <p className="text-xs text-brand-text/50 font-sans">
            ⚡ Relatos reais e voluntários enviados por e-mail e comunidade de alunas.
          </p>
        </div>

      </div>
    </section>
  );
}
