import React from 'react';
import { Testimonial } from '../types';
import { Star, MessageCircle, Heart, ThumbsUp, Sparkles } from 'lucide-react';

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Gisele Vasconcelos',
    role: 'Compradora Recente (Britânia Multipane)',
    avatarFallback: 'GV',
    text: 'Eu tinha acabado de comprar a máquina e estava apavorada lendo relatos na internet de pães que davam errado. Decidi arriscar esses R$ 10 antes mesmo de ligar a tomada pela primeira vez. Resultado: meu primeiríssimo pão de leite ficou igualzinho ao de comercial, super macio, inflou certinho e perfumou a casa toda! O método de camadas é genial e evita qualquer erro. Recomendo muito!',
    tag: 'Comprador Recente',
    rating: 5
  },
  {
    name: 'Carlos Henrique M.',
    role: 'Aparelho Resgatado (Mondial Master Bread)',
    avatarFallback: 'CH',
    text: 'Minha máquina ficou guardada no armário por quase dois anos. Toda vez que eu olhava para ela, sentia uma culpa terrível por ter desperdiçado dinheiro. Meus pães sempre solavam ou viravam uma pedra dura no dia seguinte. Quando li sobre a diferença das farinhas brasileiras nas receitas traduzidas do manual oficial, tudo fez sentido! Fiz os ajustes do guia e, pela primeira vez, comi um pão de máquina fofinho que durou macio até o terceiro dia. Vale cada centavo!',
    tag: 'Máquina Resgatada',
    rating: 5
  },
  {
    name: 'Regina Célia',
    role: 'Prática de Cozinha (Philco Easy)',
    avatarFallback: 'RC',
    text: 'Eu comprei a máquina só para fazer o trabalho pesado de sovar e adorei as instruções sobre o Ciclo Massa. O guia ensina a ordem perfeita dos ingredientes e o tempo exato para retirar a massa. Agora faço pizza italiana, brioche e pão de hambúrguer de padaria sem dar uma única sovada na mão e sem sujar a pia. Minha cozinha fica limpa e a máquina faz toda a força física para mim!',
    tag: 'Prático (Ciclo Massa)',
    rating: 5
  }
];

export default function ReviewList() {
  return (
    <div id="reviews-section" className="space-y-12">
      <div className="text-center space-y-4">
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1d11]">
          Quem aplicou o método, nunca mais comeu pão solado
        </h3>
        <p className="text-sm text-amber-900/60 max-w-lg mx-auto leading-relaxed">
          Resultados reais de pessoas comuns que economizaram ingredientes, resgataram suas máquinas e redescobriram o prazer do pão caseiro perfeito.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((test, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl border border-[#ece3d4] p-6 shadow-xs relative flex flex-col justify-between hover:shadow-md transition duration-300"
            id={`testimonial-card-${idx}`}
          >
            {/* Tag Badge */}
            <div className="absolute top-4 right-4">
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                test.tag === 'Comprador Recente' ? 'bg-blue-50 text-blue-800 border border-blue-100' :
                test.tag === 'Máquina Resgatada' ? 'bg-orange-50 text-orange-800 border border-orange-100' :
                'bg-emerald-50 text-emerald-800 border border-emerald-100'
              }`}>
                {test.tag}
              </span>
            </div>

            <div className="space-y-4">
              {/* Stars */}
              <div className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-amber-950/80 leading-relaxed italic">
                "{test.text}"
              </p>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-3 border-t border-[#ece3d4]/60 pt-4 mt-6">
              <div className="w-10 h-10 rounded-full bg-amber-100/80 flex items-center justify-center font-bold text-[#2c1d11] text-sm shrink-0">
                {test.avatarFallback}
              </div>
              <div>
                <p className="font-bold text-sm text-[#2c1d11]">{test.name}</p>
                <p className="text-[10px] text-amber-900/60 font-medium">{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Callout */}
      <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#ece3d4] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-2xl mx-auto text-center sm:text-left shadow-xs">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="p-3 bg-white text-emerald-800 rounded-xl border border-[#ece3d4] shrink-0 shadow-xs">
            <ThumbsUp className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-[#2c1d11]">Avaliação Média: 4.9/5 estrelas</p>
            <p className="text-xs text-amber-900/60 leading-relaxed">Baseado em mais de 1.240 leitores em todo o Brasil desde 2025.</p>
          </div>
        </div>
        <div className="text-xs font-bold text-amber-900/70 flex items-center gap-1.5 shrink-0 bg-white px-3 py-1.5 rounded-full border border-[#ece3d4]">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Compra Garantida de R$ 9,99
        </div>
      </div>
    </div>
  );
}
