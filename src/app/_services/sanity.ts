// src/app/service/sanity.service.ts

import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { BlogPost } from '../_models/BlogPost';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  constructor() { }

  sanityClientCredentials = {
    option: sanityClient({
      projectId: "5xdu1z5z",
      dataset: "blog-posts"
    })
  }

  urlFor = (source: any) =>
  imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async geAllPosts(): Promise<BlogPost[]> {
    return await this.sanityClientCredentials.option.fetch(
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
    );
  }

  async getFeaturedPosts(): Promise<BlogPost[]> {
    return await this.sanityClientCredentials.option.fetch(
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
    );
  }

  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    return await this.sanityClientCredentials.option.fetch(
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
    );
  }

  async searchPosts(query: string): Promise<BlogPost[]> {
    return await this.sanityClientCredentials.option.fetch(
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
    );
  }

  async getCategories(): Promise<string[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "blogPost"]{
        category
      }`
    );
  }

  async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    let posts = await this.sanityClientCredentials.option.fetch(
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
    );
    return posts[0];
  }
}