import { WeekDayItem, MenuItem, TestimonialItem, FaqItem, FeatureCardItem } from "./types";

export const WEEK_DAYS: WeekDayItem[] = [
  {
    day: "Segunda",
    tag: "Café da Manhã",
    title: "Pão quentinho",
    description: "Um pão macio que corta sem esfarelar, exalando aquele aroma irresistível de padaria artesanal logo cedo.",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    day: "Terça",
    tag: "Almoço ou Jantar",
    title: "Pizza dourada",
    description: "Uma borda alta, crocante por fora e macia por dentro, com queijo derretido e molho de tomate fresco.",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
  },
  {
    day: "Quarta",
    tag: "Sobremesa",
    title: "Brownie macio",
    description: "A casquinha brilhante e craquelada por cima, com o interior super cremoso e intenso sabor de chocolate.",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800"
  },
  {
    day: "Quinta",
    tag: "Jantar Prático",
    title: "Jantar leve",
    description: "Um quiche aromático com massa crocante (Pâte Brisée) ou um wrap macio que enrola sem quebrar.",
    imageUrl: "/images/gluten_free_pasta_dinner_1783449502641.jpg"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    category: "Café da manhã",
    icon: "Coffee",
    title: "Pães fofinhos & Clássicos de Manhã",
    imageUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800",
    items: [
      "Pão de fôrma clássico",
      "Pão de queijo multigrãos",
      "Panquecas americanas fofas",
      "Waffles crocantes dourados",
      "Cookies com gotas de chocolate",
      "Bolo rápido de caneca"
    ]
  },
  {
    category: "Almoço",
    icon: "UtensilsCrossed",
    title: "Massas Artesanais & Pratos Principais",
    imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=800",
    items: [
      "Massa de pizza napolitana",
      "Nhoque de batata leve",
      "Lasanha com massa caseira",
      "Quiches gourmet recheadas",
      "Panquecas salgadas de espinafre",
      "Massa fresca para fettuccine"
    ]
  },
  {
    category: "Café da tarde",
    icon: "Cookie",
    title: "Bolos Caseiros & Biscoitos Crocantes",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    items: [
      "Bolo de cenoura com calda vulcão",
      "Biscoitos amanteigados",
      "Bolo de fubá cremoso",
      "Muffins de mirtilo e limão",
      "Pão de mel de tabuleiro",
      "Scones ingleses com geleia"
    ]
  },
  {
    category: "Jantar",
    icon: "Moon",
    title: "Wraps Leves, Sopas & Receitas Rápidas",
    imageUrl: "/images/gluten_free_focaccia_dinner_1783446768165.jpg",
    items: [
      "Wraps flexíveis (não quebram)",
      "Galette rústica de legumes",
      "Sopa cremosa com croutons caseiros",
      "Pão pita de frigideira rápida",
      "Torta salgada de liquidificador",
      "Focaccia alta e perfumada"
    ]
  },
  {
    category: "Sobremesas",
    icon: "Sparkles",
    title: "Doces Sofisticados & Texturas Irresistíveis",
    imageUrl: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800",
    items: [
      "Brownie fudge com nozes",
      "Cheesecake com calda de frutas vermelhas",
      "Mousse de chocolate aveludado",
      "Torta holandesa sem glúten",
      "Pavê clássico de baunilha",
      "Petit gâteau que escorre no prato"
    ]
  }
];

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    title: "❌ Fim da Massa Esponja",
    description: "Aprenda a identificar visualmente o ponto correto da hidratação para que seus pães fiquem incrivelmente leves, alveolados e macios de verdade.",
    icon: "Sparkles"
  },
  {
    title: "🛒 Substituição Inteligente",
    description: "Saiba exatamente quais farinhas e estruturantes podem substituir uns aos outros sem comprometer a textura, o crescimento ou o sabor final da receita.",
    icon: "Replace"
  },
  {
    title: "❄️ Método do Congelamento",
    description: "Prepare em lotes no final de semana e tenha pães e massas frescos na sua mesa em 5 minutos a qualquer hora, mantendo o sabor de recém-assado.",
    icon: "Snowflake"
  },
  {
    title: "💰 Economia Inteligente",
    description: "Pare de gastar fortunas com produtos industrializados secos e ruins. Aprenda a cozinhar do zero gastando menos do que compraria no supermercado.",
    icon: "BadgeDollarSign"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Mariana Alencar",
    role: "Celíaca há 4 anos",
    rating: 5,
    tag: "Pães perfeitos",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "Eu já tinha jogado dezenas de farinhas caras no lixo e desistido de comer pão decente. O método de proporções mudou tudo. Meu pão de forma agora cresce, fica incrivelmente fofo e dura dias macio sem esfarelar!"
  },
  {
    id: "2",
    name: "Rodrigo Mendonça",
    role: "Mãe de criança com restrição alimentar",
    rating: 5,
    tag: "Família feliz",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    text: "Meu filho foi diagnosticado com intolerância e o café da manhã tinha virado um drama. A receita de panquecas e o pão de queijo multigrãos viraram os favoritos dele. Toda a família come a mesma coisa agora, nem parece que é sem glúten!"
  },
  {
    id: "3",
    name: "Beatriz Santos",
    role: "Entusiasta de gastronomia saudável",
    rating: 5,
    tag: "Economia real",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    text: "Gastava facilmente mais de R$ 200 por mês só em pãezinhos de caixa sem glúten que vinham secos. Agora eu faço a minha própria focaccia e pão pita na frigideira em minutos. Gastos reduzidos a um terço e sabor mil vezes superior!"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "O material é digital? Como vou acessar?",
    answer: "Sim, o Método Mesa Sem Glúten é um produto digital premium. Você receberá o link de acesso imediato por e-mail logo após a confirmação do pagamento. O acesso é vitalício e você pode visualizar pelo celular, tablet, computador ou até mesmo imprimir as receitas."
  },
  {
    question: "Preciso de batedeira ou utensílios profissionais?",
    answer: "De forma alguma! A maioria das receitas do método foi projetada para ser feita manualmente com um batedor de arame (fouet) ou apenas uma tigela e espátula. Não há necessidade de investir em equipamentos caros de panificação."
  },
  {
    question: "Os ingredientes são difíceis de encontrar ou muito caros?",
    answer: "Não! Esse é um dos pilares do método. Nós priorizamos farinhas e ingredientes acessíveis e fáceis de encontrar em qualquer supermercado ou loja de produtos naturais de porte médio. Nada de ingredientes mirabolantes importados."
  },
  {
    question: "As receitas servem para quem tem doença celíaca?",
    answer: "Sim! Todas as receitas foram criadas de forma a garantir a total ausência de glúten e contaminação cruzada. Elas são 100% seguras para celíacos, autistas, intolerantes e sensíveis ao glúten não-celíacos."
  },
  {
    question: "E se eu não gostar das receitas?",
    answer: "Nós oferecemos uma garantia incondicional de 7 dias. Se você aplicar as proporções e achar que as receitas não entregam o pão fofinho, as massas deliciosas e a facilidade que prometemos, basta nos enviar um e-mail. Nós devolveremos 100% do seu investimento, sem burocracia ou perguntas chatas."
  }
];
