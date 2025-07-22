import { Injectable } from '@angular/core';
import { BlogPost } from '../_models/BlogPost';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: What Every Leader Should Know',
      description: 'Explore how artificial intelligence is reshaping industries and discover key strategies for integrating AI into your business operations for competitive advantage.',
      category: 'AI & Machine Learning',
      date: 'Dec 15, 2024',
      readTime: 8,
      slug: 'future-ai-business-leaders',
      featured: true,
      author: 'DenixLabs Team',
      tags: ['AI', 'Business Strategy', 'Leadership']
    },
    {
      id: '2',
      title: 'Automating Business Processes with Machine Learning',
      description: 'Learn practical approaches to implementing ML-driven automation in your organization to reduce costs and increase productivity.',
      category: 'Automation',
      date: 'Dec 10, 2024',
      readTime: 10,
      slug: 'automating-business-processes-ml',
      author: 'DenixLabs Team',
      tags: ['Automation', 'Machine Learning', 'Productivity']
    },
    {
      id: '3',
      title: 'Data-Driven Decision Making: Best Practices',
      description: 'Discover how to transform raw data into actionable insights that drive strategic business decisions and measurable outcomes.',
      category: 'Data Science',
      date: 'Dec 8, 2024',
      readTime: 7,
      slug: 'data-driven-decision-making',
      author: 'DenixLabs Team',
      tags: ['Data Science', 'Analytics', 'Decision Making']
    },
    {
      id: '4',
      title: 'Voice Agents: Revolutionizing Customer Service',
      description: 'Deep dive into how voice AI technology is transforming customer interactions and improving service efficiency across industries.',
      category: 'Voice Technology',
      date: 'Dec 12, 2024',
      readTime: 6,
      slug: 'voice-agents-customer-service',
      author: 'DenixLabs Team',
      tags: ['Voice AI', 'Customer Service', 'Automation']
    },
    {
      id: '5',
      title: 'ROI of AI Implementation: Measuring Success',
      description: 'Learn how to measure and demonstrate the return on investment for AI initiatives in your organization.',
      category: 'Business Intelligence',
      date: 'Dec 3, 2024',
      readTime: 9,
      slug: 'roi-ai-implementation',
      author: 'DenixLabs Team',
      tags: ['ROI', 'AI Implementation', 'Business Intelligence']
    },
    {
      id: '6',
      title: 'Building Intelligent Systems: A Technical Deep Dive',
      description: 'Technical insights into architecting AI systems that scale, from model selection to deployment strategies and performance optimization.',
      category: 'AI & Machine Learning',
      date: 'Dec 5, 2024',
      readTime: 12,
      slug: 'building-intelligent-systems',
      author: 'DenixLabs Team',
      tags: ['AI Architecture', 'Technical', 'Scalability']
    },
    {
      id: '7',
      title: 'The Rise of Intelligent Process Automation',
      description: 'Explore how combining RPA with AI capabilities is creating more intelligent and adaptive automation solutions.',
      category: 'Automation',
      date: 'Nov 28, 2024',
      readTime: 5,
      slug: 'intelligent-process-automation',
      author: 'DenixLabs Team',
      tags: ['RPA', 'Automation', 'AI Integration']
    }
  ];

  private categories: string[] = [
    'All',
    'AI & Machine Learning',
    'Business Intelligence',
    'Automation',
    'Data Science',
    'Voice Technology'
  ];

  constructor() { }

  getAllPosts(): Observable<BlogPost[]> {
    return of(this.blogPosts);
  }

  getFeaturedPost(): Observable<BlogPost | undefined> {
    const featured = this.blogPosts.find(post => post.featured) || undefined;
    return of(featured);
  }

  getPostsByCategory(category: string): Observable<BlogPost[]> {
    if (category === 'All') {
      return of(this.blogPosts.filter(post => !post.featured));
    }
    return of(this.blogPosts.filter(post => post.category === category && !post.featured));
  }

  getCategories(): Observable<string[]> {
    return of(this.categories);
  }

  searchPosts(query: string): Observable<BlogPost[]> {
    const filtered = this.blogPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase()) ||
      post.category.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered);
  }

  getPostBySlug(slug: string): Observable<BlogPost | undefined> {
    const post = this.blogPosts.find(post => post.slug === slug);
    return of(post);
  }
}