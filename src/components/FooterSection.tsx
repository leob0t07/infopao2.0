import { motion } from "motion/react";
import { ShieldCheck, CreditCard, Lock, Sparkles, AlertCircle } from "lucide-react";

interface FooterSectionProps {
  onCtaClick: () => void;
}

export default function FooterSection({ onCtaClick }: FooterSectionProps) {
  return (
    <footer className="relative overflow-hidden">
      {/* SECTION 15: ULTIMA SEÇÃO */}
      <div className="relative py-24 md:py-32 px-4 md:px-8 text-center bg-brand-darkgreen text-white">
        {/* Background Image Overlay with deep green tint */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200"
            alt="Mesa posta sofisticada rústica culinária"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#234233]/90 via-[#234233]/95 to-[#234233]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Sua Mesa Espera Por Você
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold leading-tight max-w-3xl mx-auto">
            Sua próxima refeição pode ser completamente diferente.
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto text-sm md:text-base text-white/80 font-sans leading-relaxed">
            <p>
              Você tem duas opções claras diante de você agora:
            </p>
            <p>
              Continuar refém de produtos industrializados secos que esfarelam, gastando uma fortuna toda semana no mercado para comer mal...
            </p>
            <p className="font-semibold text-brand-gold text-base md:text-lg">
              Ou aprender a cozinhar de forma fácil, deliciosa e econômica, enchendo sua mesa de prazer e saúde que sua família inteira vai amar.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={onCtaClick}
              id="footer-cta-btn"
              className="w-full sm:w-auto bg-brand-green hover:bg-white hover:text-brand-darkgreen text-white font-bold py-5 px-12 rounded-2xl text-base md:text-lg tracking-wider shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-4 cursor-pointer border border-white/20 mx-auto"
            >
              QUERO ENTRAR NO MÉTODO MESA SEM GLÚTEN AGORA ➜
            </button>
          </div>

          {/* Quick Security Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 pt-8 text-xs text-white/60 font-sans">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Garantia de 7 Dias Incondicional</span>
            </div>
            <div className="w-1 h-1 bg-white/25 rounded-full" />
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-brand-gold" />
              <span>Ambiente de Pagamento Criptografado</span>
            </div>
            <div className="w-1 h-1 bg-white/25 rounded-full" />
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-brand-gold" />
              <span>Acesso Imediato Via E-mail</span>
            </div>
          </div>
        </div>
      </div>

      {/* METADATA FOOTER */}
      <div className="bg-[#172D22] text-white/50 py-12 px-4 md:px-8 border-t border-white/5 text-xs font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
          
          {/* Logo Brand / Col 1 */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <span className="font-title font-bold text-lg tracking-wider">MÉTODO MESA SEM GLÚTEN</span>
            </div>
            <p className="leading-relaxed max-w-sm">
              Um guia digital premium focado em gastronomia sem glúten descomplicada, combinando sabor real, texturas incríveis e economia inteligente na rotina doméstica.
            </p>
          </div>

          {/* Links / Col 2 */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-bold text-white text-[10px] uppercase tracking-widest">Informações Legais</p>
            <ul className="space-y-2">
              <li><a href="#pricing-section" className="hover:text-white transition-colors">Termos de Uso e Serviço</a></li>
              <li><a href="#pricing-section" className="hover:text-white transition-colors">Políticas de Privacidade</a></li>
              <li><a href="#pricing-section" className="hover:text-white transition-colors">Regras Gerais de Reembolso</a></li>
              <li><a href="#pricing-section" className="hover:text-white transition-colors">Contato de Suporte</a></li>
            </ul>
          </div>

          {/* Disclaimer / Col 3 */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-bold text-white text-[10px] uppercase tracking-widest">Aviso Médico</p>
            <div className="flex gap-2.5 items-start leading-relaxed">
              <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <p>
                As informações e receitas contidas neste guia digital não substituem diagnósticos médicos ou recomendações dietéticas de nutricionistas credenciados. Celíacos devem sempre conferir os rótulos de marcas locais para mitigar riscos de contaminação cruzada industrial.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Método Mesa Sem Glúten. Todos os direitos reservados.</p>
          <p className="text-[10px]">
            Cozinhando com Amor e Segurança • Desenvolvido com Cuidado Premium
          </p>
        </div>
      </div>
    </footer>
  );
}
