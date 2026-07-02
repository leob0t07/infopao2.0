import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, AlertTriangle, ArrowRight } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellModal({ isOpen, onClose, onAccept, onDecline }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-xs overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-[#FCFAF7] rounded-2xl w-full max-w-md shadow-2xl border border-amber-900/10 overflow-hidden max-h-[96vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2.5 right-3 text-amber-950/40 hover:text-amber-950 p-1 rounded-full hover:bg-amber-100/50 transition cursor-pointer z-10"
            aria-label="Fechar"
            id="close-upsell-modal-btn"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Warning / Attention Title Bar */}
          <div className="bg-amber-100 border-b border-amber-200/60 px-4 py-2 text-center flex items-center justify-center gap-1.5 shrink-0">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 animate-bounce" />
            <span className="text-[10px] sm:text-xs font-black text-amber-900 tracking-wider uppercase">
              ⚠️ ESPERE! NÃO LEVE APENAS METADE DA SOLUÇÃO...
            </span>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-3.5 text-center">
            
            {/* Headline */}
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-black text-[#2c1d11] leading-tight">
                Leve o Kit Ouro Panificação Completa por Apenas + R$ 5,00 extras!
              </h3>
              <div className="h-0.5 w-12 bg-amber-600 rounded-full mx-auto" />
            </div>

            {/* Value Proposal */}
            <p className="text-[11px] sm:text-xs text-amber-950/85 leading-relaxed text-left bg-amber-50/70 p-2.5 sm:p-3 rounded-lg border border-amber-900/5">
              <strong>87% das pessoas</strong> que compram a versão básica se arrependem depois por não levarem o <em>Manual de Conservação de 5 dias</em>. Receba a Versão Completa agora:
            </p>

            {/* Bullet Points */}
            <div className="space-y-1.5 text-left bg-white p-2.5 sm:p-3 rounded-lg border border-[#ece3d4]/80 shadow-xs">
              <div className="flex items-start gap-1.5 text-[11px] sm:text-xs">
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0 stroke-[3]" />
                <span className="text-amber-950/90 leading-tight">
                  <strong>Guia Prático Base</strong> (50+ Receitas Testadas)
                </span>
              </div>
              <div className="flex items-start gap-1.5 text-[11px] sm:text-xs">
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0 stroke-[3]" />
                <span className="text-amber-950/90 leading-tight">
                  <strong>Manual do Pão Macio por 5 Dias</strong> (Evita que o pão amanheça duro como pedra)
                </span>
              </div>
              <div className="flex items-start gap-1.5 text-[11px] sm:text-xs">
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0 stroke-[3]" />
                <span className="text-amber-950/90 leading-tight">
                  <strong>Tabela Secreta de Tempos e Ciclos</strong> para Britânia, Mondial, Philco, Cadence...
                </span>
              </div>
            </div>

            {/* Pricing Tag */}
            <div className="py-0.5">
              <div className="inline-flex items-baseline gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-600/10">
                <span className="text-[10px] text-emerald-800 font-bold">Combo Completo:</span>
                <span className="font-serif text-xl sm:text-2xl font-black text-emerald-800">
                  R$ 15,00
                </span>
                <span className="text-[9px] text-emerald-800/70 font-bold uppercase tracking-wider">
                  (Pagamento Único)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              {/* Button 1 (Ouro, Verde, Grande e Chamativo) */}
              <motion.button
                onClick={onAccept}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-500/20"
                id="upsell-accept-btn"
              >
                <span className="leading-tight">
                  SIM! QUERO A VERSÃO COMPLETA
                  <br />
                  POR APENAS R$ 15
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </motion.button>

              {/* Button 2 / Decline Link */}
              <button
                onClick={onDecline}
                className="block mx-auto text-[10px] sm:text-xs font-bold text-amber-900/60 hover:text-amber-950 underline transition duration-150 cursor-pointer py-1"
                id="upsell-decline-btn"
              >
                Não, quero apenas a versão básica por R$ 9,99
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
