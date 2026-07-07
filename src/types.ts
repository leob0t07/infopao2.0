export interface WeekDayItem {
  day: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface MenuItem {
  category: string;
  title: string;
  imageUrl: string;
  items: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  image: string;
  text: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureCardItem {
  title: string;
  description: string;
  icon: string;
}
