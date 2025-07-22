export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  slug: string;
  featured?: boolean;
  content?: string;
  author?: string;
  tags?: string[];
}