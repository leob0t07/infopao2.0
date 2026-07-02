export interface DiagnosticProblem {
  id: string;
  label: string;
  description: string;
  cause: string;
  solutionPage: string;
  advice: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatarUrl?: string;
  avatarFallback: string;
  text: string;
  tag: 'Comprador Recente' | 'Máquina Resgatada' | 'Prático (Ciclo Massa)';
  rating: number;
}
