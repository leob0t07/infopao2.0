import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-[#F8F4EC] py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#EAE3D2] text-brand-text px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-green" />
            Perguntas Frequentes
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-brand-text leading-tight">
            🤔 Dúvidas Frequentes
          </h2>

          <p className="text-sm md:text-base text-brand-text/75 font-sans">
            Tem alguma dúvida sobre o método? Veja as respostas para as perguntas mais comuns dos nossos alunos:
          </p>
        </div>

        {/* Elegant Accordions List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-brand-text/5 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-title font-bold text-base md:text-lg text-brand-text cursor-pointer hover:text-brand-green transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center shrink-0 text-brand-green transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-brand-green text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-brand-text/75 font-sans leading-relaxed border-t border-brand-bg pt-4 text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Support block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-4 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white p-5 rounded-2xl border border-brand-green/10 shadow-sm">
            <div className="w-10 h-10 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs md:text-sm font-semibold text-brand-text">Ainda com alguma dúvida?</p>
              <p className="text-xs text-brand-text/60">Fale com nosso suporte dedicado: <strong className="text-brand-green">suporte@mesasemgluten.com.br</strong></p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
