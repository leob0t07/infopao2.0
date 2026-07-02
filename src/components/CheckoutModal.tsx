import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  CreditCard, 
  QrCode, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Copy, 
  ArrowRight, 
  Download, 
  FileText 
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  mockupImg: string;
  selectedTier?: 'basic' | 'complete';
}

export default function CheckoutModal({ isOpen, onClose, mockupImg, selectedTier = 'basic' }: CheckoutModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Info, 2: Pay, 3: Success
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [hasOrderBump, setHasOrderBump] = useState(false);
  const [pixCopied, setPixCopied] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Reset state on close
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setName('');
      setEmail('');
      setPaymentMethod('pix');
      setHasOrderBump(false);
      setPixCopied(false);
      setCardName('');
      setCardNumber('');
      setCardExpiry('');
      setCardCvv('');
      setIsProcessing(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const basePrice = selectedTier === 'complete' ? 15.00 : 9.99;
  const orderBumpPrice = 4.90;
  const totalPrice = (selectedTier === 'basic' && hasOrderBump) ? basePrice + orderBumpPrice : basePrice;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setStep(2);
    }
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 1500);
  };

  const copyPixCode = () => {
    setPixCopied(true);
    navigator.clipboard.writeText('00020101021226870014br.gov.bcb.pix2565mockpix.pagar.guia.maquina.pao.10reais.produtodigital');
    setTimeout(() => setPixCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF8F5] rounded-2xl w-full max-w-xl shadow-2xl border border-[#ece3d4] overflow-hidden relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-900/40 hover:text-amber-950 p-1.5 rounded-full hover:bg-amber-100/50 transition cursor-pointer"
          aria-label="Fechar"
          id="close-checkout-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#1e4620] text-white p-6 relative">
          <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-bold uppercase tracking-wider mb-1">
            <Lock className="w-3.5 h-3.5" /> Ambiente 100% Seguro & Criptografado
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold">Checkout Seguro do Guia Prático</h3>
          <p className="text-xs text-white/70 mt-1">Conclua sua compra para ter acesso instantâneo ao e-book.</p>
        </div>

        {/* Checkout Content */}
        <div className="p-6 md:p-8 space-y-6">
          
          {/* Progress Indicator (hidden on success step) */}
          {step !== 3 && (
            <div className="flex items-center gap-3 text-xs font-semibold text-amber-900/60 pb-2 border-b border-[#ece3d4]/60">
              <span className={`px-2 py-0.5 rounded ${step === 1 ? 'bg-amber-100 text-amber-950 font-bold' : 'bg-emerald-100 text-emerald-900'}`}>
                {step === 1 ? '1. Seus Dados' : '✓ Dados Cadastrados'}
              </span>
              <ArrowRight className="w-3 h-3 text-amber-900/30" />
              <span className={`px-2 py-0.5 rounded ${step === 2 ? 'bg-amber-100 text-amber-950 font-bold' : ''}`}>
                2. Pagamento (R$ {totalPrice.toFixed(2).replace('.', ',')})
              </span>
            </div>
          )}

          {/* STEP 1: Personal Info Form */}
          {step === 1 && (
            <form onSubmit={handleInfoSubmit} className="space-y-5">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-amber-950 uppercase tracking-wider mb-1">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#ece3d4] bg-white focus:outline-hidden focus:border-amber-600 text-sm text-[#2c1d11]"
                    id="checkout-name-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-amber-950 uppercase tracking-wider mb-1">E-mail para Envio do Material</label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: mariasilva@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#ece3d4] bg-white focus:outline-hidden focus:border-amber-600 text-sm text-[#2c1d11]"
                    id="checkout-email-input"
                  />
                  <span className="text-[10px] text-amber-900/50 mt-1 block">Importante: É neste e-mail que você receberá o link para baixar o seu e-book imediatamente.</span>
                </div>
              </div>

              {/* Order Bump Section */}
              {selectedTier === 'basic' && (
                <div className="bg-[#FCF8F2] border border-amber-600/30 rounded-xl p-4 space-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider animate-pulse-subtle">
                    OFERTA ESPECIAL
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={hasOrderBump}
                      onChange={(e) => setHasOrderBump(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-[#ece3d4] text-amber-700 focus:ring-amber-600"
                      id="checkout-orderbump-checkbox"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#2c1d11] flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Adicionar "O Manual de Geleias e Patês"
                      </p>
                      <p className="text-xs text-amber-950/70 leading-relaxed">
                        Toque final de mestre! 12 receitas secretas de geleias de frutas, patê de ervas e manteigas temperadas projetadas especialmente para casar com pães de máquina fresquinhos. 
                      </p>
                      <p className="text-xs font-bold text-emerald-700">
                        Leve agora por apenas + R$ 4,90 pago uma única vez!
                      </p>
                    </div>
                  </label>
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all transform active:scale-98 flex items-center justify-center gap-2 text-base cursor-pointer"
                id="checkout-step1-submit-btn"
              >
                Prosseguir para o Pagamento <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 2: Payment Simulator */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Payment Methods Selector Tabs */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-3 px-4 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition ${paymentMethod === 'pix' ? 'border-emerald-600 bg-emerald-50 text-emerald-950' : 'border-[#ece3d4] bg-white text-amber-900/60'}`}
                  id="pay-method-pix-btn"
                >
                  <QrCode className="w-4 h-4 text-emerald-600" /> Pix Instantâneo
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`py-3 px-4 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition ${paymentMethod === 'card' ? 'border-amber-600 bg-amber-50 text-amber-950' : 'border-[#ece3d4] bg-white text-amber-900/60'}`}
                  id="pay-method-card-btn"
                >
                  <CreditCard className="w-4 h-4 text-amber-700" /> Cartão de Crédito
                </button>
              </div>

              {/* PIX Option Interface */}
              {paymentMethod === 'pix' && (
                <div className="space-y-5 text-center">
                  <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-600/10 space-y-4 flex flex-col items-center">
                    <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Pague via Pix para Liberação Imediata</p>
                    
                    {/* Simulated QR Code Graphic */}
                    <div className="w-36 h-36 bg-white p-2 border border-emerald-600/20 rounded-lg flex items-center justify-center relative shadow-xs">
                      {/* Fake pixel grids for QR design */}
                      <div className="grid grid-cols-6 gap-1 w-full h-full opacity-85">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`rounded-xs ${((i*7+13)%5 === 0 || i < 6 || i % 6 === 0 || i > 30 || i % 6 === 5) && i !== 14 ? 'bg-[#1e4620]' : 'bg-transparent'}`} 
                          />
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#FAF8F5] p-1.5 rounded-full border border-[#ece3d4]">
                          <QrCode className="w-6 h-6 text-[#1e4620]" />
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-amber-950/70 max-w-sm">
                      Abra o aplicativo do seu banco, escolha a opção "Pagar com QR Code" e escaneie a imagem acima, ou copie o código Pix abaixo.
                    </p>

                    {/* Copy Pix button */}
                    <button
                      onClick={copyPixCode}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-amber-50 border border-[#ece3d4] rounded-lg text-xs font-bold text-amber-950 transition cursor-pointer"
                      id="copy-pix-btn"
                    >
                      <Copy className="w-3.5 h-3.5 text-amber-700" />
                      {pixCopied ? 'Código Copiado!' : 'Copiar Chave Copia e Cola'}
                    </button>
                  </div>

                  {/* Simulator Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={handleSimulatePayment}
                      disabled={isProcessing}
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/60 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 text-base cursor-pointer"
                      id="simulate-pix-pay-btn"
                    >
                      {isProcessing ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Confirmando transação no Pix...
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          Confirmar Pagamento Simulado (R$ {totalPrice.toFixed(2).replace('.', ',')}) <Check className="w-4 h-4" />
                        </span>
                      )}
                    </button>
                    <p className="text-[10px] text-amber-900/50 mt-1.5">
                      Ambiente de teste: Este botão simula a notificação instantânea do banco. O e-book será liberado de verdade!
                    </p>
                  </div>
                </div>
              )}

              {/* Credit Card Option Interface */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-amber-950 uppercase tracking-wider mb-0.5">Nome impresso no cartão</label>
                      <input
                        type="text"
                        placeholder="Ex: MARIA S SILVA"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value.toUpperCase())}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#ece3d4] bg-white focus:outline-hidden focus:border-amber-600 text-xs text-[#2c1d11]"
                        id="cc-name-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-amber-950 uppercase tracking-wider mb-0.5">Número do Cartão</label>
                      <input
                        type="text"
                        placeholder="4444 4444 4444 4444"
                        value={cardNumber}
                        maxLength={19}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#ece3d4] bg-white focus:outline-hidden focus:border-amber-600 text-xs text-[#2c1d11]"
                        id="cc-number-input"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-amber-950 uppercase tracking-wider mb-0.5">Validade (MM/AA)</label>
                        <input
                          type="text"
                          placeholder="12/30"
                          maxLength={5}
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-[#ece3d4] bg-white focus:outline-hidden focus:border-amber-600 text-xs text-[#2c1d11]"
                          id="cc-expiry-input"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-amber-950 uppercase tracking-wider mb-0.5">CVV (Código de segurança)</label>
                        <input
                          type="password"
                          placeholder="123"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-[#ece3d4] bg-white focus:outline-hidden focus:border-amber-600 text-xs text-[#2c1d11]"
                          id="cc-cvv-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleSimulatePayment}
                      disabled={isProcessing}
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/60 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 text-base cursor-pointer"
                      id="simulate-cc-pay-btn"
                    >
                      {isProcessing ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processando com a operadora...
                        </span>
                      ) : (
                        <span>Pagar Simulado (R$ {totalPrice.toFixed(2).replace('.', ',')})</span>
                      )}
                    </button>
                    <p className="text-[10px] text-amber-900/50 mt-1.5 text-center">
                      Mockup de teste: Não serão feitas cobranças reais. Qualquer dado preenchido servirá para liberar a simulação de download do guia.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: SUCCESS STATE / DIGITAL DELIVERY */}
          {step === 3 && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700 animate-pulse-subtle">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-widest">
                  Parabéns! Pagamento Aprovado
                </span>
                <h4 className="font-serif text-[#2c1d11] font-bold text-2xl md:text-3xl">
                  O Seu Acesso Está Liberado!
                </h4>
                <p className="text-sm text-amber-950/70 max-w-sm mx-auto">
                  Olá, <strong className="text-amber-950">{name || 'Padeiro(a)'}</strong>! Enviamos uma cópia para <strong className="text-amber-950">{email}</strong>, mas você já pode baixar os seus materiais digitais de alta conversão agora mesmo:
                </p>
              </div>

              {/* Download Assets Box */}
              <div className="bg-white rounded-xl p-4 border border-[#ece3d4] shadow-xs divide-y divide-[#ece3d4]/50 max-w-sm mx-auto">
                <div className="py-3 flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-amber-100 text-amber-900 rounded-lg">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-amber-950">Guia Prático da Máquina de Pão</p>
                      <p className="text-[10px] text-amber-900/50">Arquivo PDF - Completo (48 págs.)</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('Simulação: Download do PDF principal iniciado!'); }}
                    className="p-2 bg-[#1e4620] hover:bg-emerald-800 text-white rounded-lg transition"
                    title="Baixar Guia"
                    id="download-guide-btn"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>

                {selectedTier === 'complete' && (
                  <>
                    <div className="py-3 flex items-center justify-between gap-3 text-left">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-emerald-100 text-emerald-950 rounded-lg">
                          <Sparkles className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-amber-950">Manual do Pão Macio por 5 Dias</p>
                          <p className="text-[10px] text-amber-900/50">Arquivo PDF - Combo Premium</p>
                        </div>
                      </div>
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); alert('Simulação: Download do Manual do Pão Macio por 5 Dias iniciado!'); }}
                        className="p-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition"
                        title="Baixar Manual Conservação"
                        id="download-macio-btn"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="py-3 flex items-center justify-between gap-3 text-left">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-[#FAF7F2] text-amber-950 rounded-lg border border-[#ece3d4]">
                          <FileText className="w-5 h-5 text-amber-800" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-amber-950">Tabela de Tempos e Ciclos</p>
                          <p className="text-[10px] text-amber-900/50">Tabela de Consulta de Marcas</p>
                        </div>
                      </div>
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); alert('Simulação: Download da Tabela de Tempos e Ciclos iniciado!'); }}
                        className="p-2 bg-[#1e4620] hover:bg-emerald-800 text-white rounded-lg transition"
                        title="Baixar Tabela de Ciclos"
                        id="download-ciclos-btn"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </>
                )}

                {selectedTier === 'basic' && hasOrderBump && (
                  <div className="py-3 flex items-center justify-between gap-3 text-left">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-orange-100 text-orange-900 rounded-lg">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-950">Manual de Geleias e Patês</p>
                        <p className="text-[10px] text-amber-900/50">Arquivo PDF - Bônus Adicionado</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); alert('Simulação: Download do bônus de Geleias e Patês iniciado!'); }}
                      className="p-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition"
                      title="Baixar Bônus"
                      id="download-bonus-btn"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-2 text-xs text-amber-900/50 max-w-xs mx-auto flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                Garantia incondicional de 7 dias mantida com sucesso.
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold rounded-lg text-xs transition cursor-pointer"
                  id="checkout-close-success-btn"
                >
                  Voltar para a página de vendas
                </button>
              </div>
            </div>
          )}

          {/* Secure Footer badges */}
          {step !== 3 && (
            <div className="bg-amber-500/5 rounded-xl p-4 border border-amber-600/10 flex items-center justify-around gap-4 text-[10px] font-semibold text-amber-900/60 text-center">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-5 h-5 text-[#1e4620]" />
                <span>Garantia de 7 Dias</span>
              </div>
              <div className="w-px h-8 bg-amber-900/10" />
              <div className="flex flex-col items-center gap-1">
                <Lock className="w-5 h-5 text-[#1e4620]" />
                <span>Privacidade Segura</span>
              </div>
              <div className="w-px h-8 bg-amber-900/10" />
              <div className="flex flex-col items-center gap-1">
                <Sparkles className="w-5 h-5 text-[#1e4620]" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
