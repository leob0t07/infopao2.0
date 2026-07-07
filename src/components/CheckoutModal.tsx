import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, Lock, CreditCard, Sparkles, CheckCircle2, QrCode, Clipboard } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: number;
}

export default function CheckoutModal({ isOpen, onClose, planName, price }: CheckoutModalProps) {
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("00020101021226830014br.gov.bcb.pix0136ad7051e2-72e5-4474-949c-dd78615a14d4520400005303986540517.005802BR5925METODO MESA SEM GLUTEN6009Sao Paulo62070503***6304FC72");
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate premium payment processing gateway
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#234233]/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative z-10 border border-brand-green/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-text/50 hover:text-brand-text w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Header */}
                <div className="space-y-1.5 pr-8">
                  <div className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Lock className="w-3 h-3" />
                    Ambiente 100% Seguro
                  </div>
                  <h3 className="font-title font-bold text-xl md:text-2xl text-brand-text">
                    Inicie sua transformação na cozinha
                  </h3>
                  <p className="text-xs text-brand-text/60">
                    Você está adquirindo o <strong className="text-brand-green">{planName}</strong> com acesso vitalício.
                  </p>
                </div>

                {/* Selected Plan Details Box */}
                <div className="bg-brand-bg p-4 rounded-2xl flex justify-between items-center border border-brand-green/10">
                  <div>
                    <p className="font-title font-bold text-brand-darkgreen text-sm">{planName}</p>
                    <p className="text-[10px] text-brand-text/50 font-sans">Acesso imediato via e-mail</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-brand-text/50 uppercase tracking-widest font-bold">Investimento</p>
                    <p className="font-title font-bold text-lg text-brand-green">R$ {price},00</p>
                  </div>
                </div>

                {/* Email input (CRITICAL) */}
                <div className="space-y-1.5">
                  <label htmlFor="checkout-email" className="text-xs font-bold text-brand-text/75 uppercase tracking-wider block">
                    Seu Melhor E-mail (Onde receberá o acesso)
                  </label>
                  <input
                    type="email"
                    id="checkout-email"
                    required
                    placeholder="exemplo@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-brand-bg border border-brand-green/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green transition-colors text-brand-text font-sans"
                  />
                  <p className="text-[10px] text-brand-text/50">
                    Enviaremos seu login, senha e links de download para este e-mail imediatamente.
                  </p>
                </div>

                {/* Payment Methods selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text/75 uppercase tracking-wider block">
                    Escolha a Forma de Pagamento
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("pix")}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === "pix"
                          ? "border-brand-green bg-brand-green/10 text-brand-green"
                          : "border-brand-text/10 hover:bg-brand-bg text-brand-text/75"
                      }`}
                    >
                      <span className="text-base">⚡</span> PIX (Aprovação imediata)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === "card"
                          ? "border-brand-green bg-brand-green/10 text-brand-green"
                          : "border-brand-text/10 hover:bg-brand-bg text-brand-text/75"
                      }`}
                    >
                      <CreditCard className="w-4 h-4" /> Cartão de Crédito
                    </button>
                  </div>
                </div>

                {/* Payment Fields (Card vs Pix) */}
                {paymentMethod === "card" ? (
                  <div className="space-y-3 pt-1">
                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Número do Cartão"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-brand-bg border border-brand-green/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green text-brand-text font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Nome como no Cartão"
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full bg-brand-bg border border-brand-green/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green text-brand-text font-sans"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM/AA"
                        required
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-brand-bg border border-brand-green/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green text-brand-text font-sans text-center"
                      />
                      <input
                        type="password"
                        placeholder="CVC"
                        maxLength={4}
                        required
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full bg-brand-bg border border-brand-green/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green text-brand-text font-sans text-center"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="bg-brand-bg p-4 rounded-2xl border border-brand-green/10 text-center space-y-3">
                    <div className="flex justify-center">
                      <QrCode className="w-24 h-24 text-brand-green" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-brand-text">Código PIX gerado para cópia:</p>
                      <p className="text-[9px] text-brand-text/50 font-mono truncate max-w-xs mx-auto">
                        00020101021226830014br.gov.bcb.pix0136ad7051e2-72e5-4474-949c-dd78615a14d4520400005303986540517.00
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="inline-flex items-center gap-1.5 bg-brand-green text-white text-xs px-4 py-2 rounded-xl font-bold cursor-pointer hover:bg-brand-darkgreen"
                    >
                      <Clipboard className="w-3.5 h-3.5" />
                      {copiedPix ? "Código Copiado!" : "Copiar Código Copia e Cola"}
                    </button>
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-green hover:bg-brand-darkgreen disabled:bg-neutral-300 text-white font-bold py-4 px-6 rounded-xl text-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processando compra segura...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>FINALIZAR PAGAMENTO AGORA</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Footer seal */}
                <div className="flex items-center justify-center gap-2 text-center text-[10px] text-brand-text/50 pt-2 border-t border-brand-text/5">
                  <Lock className="w-3 h-3 text-brand-gold" />
                  <span>Seus dados pessoais e financeiros estão totalmente protegidos por criptografia SSL de 256 bits.</span>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1 bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 animate-spin" />
                    Pagamento Aprovado
                  </div>
                  <h4 className="font-title font-bold text-2xl text-brand-text">Bem-vinda à Mesa Sem Glúten! 🎉</h4>
                  <p className="text-xs text-brand-text/70 max-w-sm mx-auto">
                    Agradecemos sua confiança! O e-mail de confirmação com seus dados de acesso vitalício foi enviado para <strong className="text-brand-green">{email}</strong>.
                  </p>
                </div>

                {/* Simulated Download Resources Container */}
                <div className="bg-brand-bg p-4 rounded-2xl border border-brand-green/10 text-left space-y-3">
                  <p className="text-xs font-bold text-brand-text/80 uppercase tracking-widest">Seus materiais para Download imediato:</p>
                  
                  <div className="space-y-2">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="p-3 bg-white rounded-xl border border-brand-text/5 flex items-center justify-between text-xs hover:border-brand-green transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">📖</span>
                        <div>
                          <p className="font-bold text-brand-text">Método Mesa Sem Glúten (E-book principal)</p>
                          <p className="text-[10px] text-brand-text/50">PDF Completo • +120 Receitas</p>
                        </div>
                      </div>
                      <span className="text-brand-green font-bold group-hover:translate-x-0.5 transition-transform">Baixar ➜</span>
                    </a>

                    {planName.includes("Completo") && (
                      <>
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="p-3 bg-white rounded-xl border border-brand-text/5 flex items-center justify-between text-xs hover:border-brand-green transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-base">📅</span>
                            <div>
                              <p className="font-bold text-brand-text">Cardápio Inteligente 30 Dias</p>
                              <p className="text-[10px] text-brand-text/50">PDF Estruturado com lista de compras</p>
                            </div>
                          </div>
                          <span className="text-brand-green font-bold group-hover:translate-x-0.5 transition-transform">Baixar ➜</span>
                        </a>

                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="p-3 bg-white rounded-xl border border-brand-text/5 flex items-center justify-between text-xs hover:border-brand-green transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-base">🌾</span>
                            <div>
                              <p className="font-bold text-brand-text">Manual Completo de Substituições & Farinhas</p>
                              <p className="text-[10px] text-brand-text/50">Guia de pesos, equivalências e congelamento</p>
                            </div>
                          </div>
                          <span className="text-brand-green font-bold group-hover:translate-x-0.5 transition-transform">Baixar ➜</span>
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="w-full bg-[#EAE3D2] hover:bg-brand-green hover:text-white text-brand-text font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 cursor-pointer"
                  >
                    FECHAR E VOLTAR À PÁGINA
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
