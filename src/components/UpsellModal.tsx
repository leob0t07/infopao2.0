import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpsell: () => void; // Redirects to Plano Completo R$17
  onDeclineUpsell: () => void; // Redirects to Plano Básico R$9
}

export default function UpsellModal({
  isOpen,
  onClose,
  onAcceptUpsell,
  onDeclineUpsell,
}: UpsellModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with a soft dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-[2rem] max-w-md w-full p-6 md:p-8 shadow-2xl relative z-10 border border-[#EAE3D2]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-text/40 hover:text-brand-text w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content Container */}
            <div className="text-center space-y-6 pt-2">
              
              {/* Title: Espera! 👀 */}
              <h3 className="font-title font-bold text-3xl text-brand-text flex items-center justify-center gap-2">
                Espera! <span className="inline-block animate-bounce text-2xl">👀</span>
              </h3>

              {/* Main Copy */}
              <p className="text-sm md:text-base text-brand-text/80 font-sans leading-relaxed">
                Por só <strong className="text-brand-text font-bold">R$8</strong> a mais, você leva o plano{" "}
                <strong className="text-brand-text font-bold">Completo</strong> — com o Cardápio de 30 Dias e a Lista de Compras inclusos. Tem certeza que não quer aproveitar?
              </p>

              {/* Box comparison: Básico vs Completo */}
              <div className="bg-[#FAF6EC] border border-[#E9E1CD] rounded-2xl p-4 sm:p-5 text-left space-y-3 font-sans">
                <p className="text-xs sm:text-sm text-brand-text leading-relaxed">
                  <strong className="text-brand-text font-bold">Básico (R$9):</strong> só as receitas.
                </p>
                <p className="text-xs sm:text-sm text-brand-text leading-relaxed">
                  <strong className="text-brand-text font-bold">Completo (R$17):</strong> receitas + cardápio pronto + lista de compras.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col gap-3 pt-2">
                {/* Accept Upsell Button (Gold/Orange) */}
                <button
                  onClick={onAcceptUpsell}
                  className="w-full bg-[#D49E43] hover:bg-[#C28E37] text-white font-bold py-4 px-6 rounded-2xl text-sm transition-all duration-300 transform active:translate-y-0.5 shadow-[0_4px_0_0_#B08132] hover:shadow-[0_2px_0_0_#B08132] active:shadow-none border-b border-[#B08132] uppercase tracking-wider cursor-pointer"
                >
                  SIM, QUERO O COMPLETO POR R$17
                </button>

                {/* Decline/Only Basic Button (White with gray/brown border) */}
                <button
                  onClick={onDeclineUpsell}
                  className="w-full bg-white hover:bg-neutral-50 text-brand-text/90 font-bold py-3.5 px-6 rounded-2xl text-sm border border-neutral-300 hover:border-neutral-400 transition-colors tracking-wide cursor-pointer"
                >
                  Não, quero só o Básico por R$9
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
