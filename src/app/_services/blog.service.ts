import { Injectable } from '@angular/core';
import { BlogPost } from '../_models/BlogPost';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { SanityService } from './sanity';
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [];

  private categories: string[] = [
    'All',
    'AI & Machine Learning',
    'Business Intelligence',
    'Automation',
    'Data Science',
    'Voice Technology'
  ];

  sanityClientCredentials = {
    option: sanityClient({
      projectId: "5xdu1z5z",
      dataset: "blog-posts"
    })
  }
  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);


  constructor(private sanityService: SanityService) {
    this.getAllPosts().subscribe(posts => {
      this.blogPosts = posts;
    });
   }

   getAllPosts(): Observable<BlogPost[]> {
    return from(
      this.sanityClientCredentials.option.fetch(
        `*[_type == "blogPost"]{
          _id,
          title,
          description,
          category,
          date,
          readTime,
          slug,
          author,
          tags
        }`
      )
    );
  }

  getFeaturedPosts(): Observable<BlogPost[]> {
    return from(
      this.sanityClientCredentials.option.fetch(
        `*[_type == "blogPost" && featured == true]{
          _id,
          title,
          description,
          category,
          date,
          readTime,
          slug,
          author,
          tags
        }`
      )
    );
  }

  getPostsByCategory(category: string): Observable<BlogPost[]> {
    if (category === 'All') {
      return this.getAllPosts();
    }
    return from(
      this.sanityClientCredentials.option.fetch(
        `*[_type == "blogPost" && category == "${category}"]{
          _id,
          title,
          description,
          category,
          date,
          readTime,
          slug,
          author,
          tags
        }`
      )
    );
  }

  searchPosts(query: string): Observable<BlogPost[]> {
    return from(
      this.sanityClientCredentials.option.fetch(
        `*[_type == "blogPost" && title match "${query}" || description match "${query}" || category match "${query}"]{
          _id,
          title,
          description,
          category,
          date,
          readTime,
          slug,
          author,
          tags
        }`
      )
    );
  }

  getCategories(): Observable<string[]> {
    return from(
      this.sanityClientCredentials.option.fetch(
        `*[_type == "blogPost"]{ category }`
      )
    ).pipe(
      map((items: Array<{ category: string }>) =>
        Array.from(new Set(items.map(i => i.category)))
      )
    );
  }

  getPostBySlug(slug: string): Observable<BlogPost | undefined> {
    return from(
      this.sanityClientCredentials.option.fetch(
        `*[_type == "blogPost" && slug.current == "${slug}"]{
          _id,
          title,
          description,
          category,
          date,
          readTime,
          slug,
          author,
          tags,
          content
        }`
      )
    ).pipe(
      map((posts: BlogPost[]) => posts[0])
    );
  }

}