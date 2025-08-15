export interface Faq {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface FaqData {
  title: string;
  subtitle?: string;
  faqs: Faq[];
} 