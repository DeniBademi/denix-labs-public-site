import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../_services/blog.service';
import { BlogPost } from '../../_models/BlogPost';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { BlogHeroComponent } from '../../blog-components/blog-hero/blog-hero.component';
import { BlogFeaturedComponent } from '../../blog-components/blog-featured/blog-featured.component';
import { BlogGridComponent } from '../../blog-components/blog-grid/blog-grid.component';

@Component({
  selector: 'app-blog',
  imports: [
    AsyncPipe,
    BlogHeroComponent,
    BlogFeaturedComponent,
    BlogGridComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  featuredPost$: Observable<BlogPost | undefined>;
  posts$: Observable<BlogPost[]>;
  currentPosts: BlogPost[] = [];
  loadingPosts: boolean = true;

  constructor(private blogService: BlogService) {
    this.featuredPost$ = this.blogService.getFeaturedPosts().pipe(
      map((posts: BlogPost[]) => posts[0])
    );
    this.posts$ = this.blogService.getPostsByCategory('All');
  }

  ngOnInit(): void {
    this.loadingPosts = true;
    this.posts$
      .pipe(finalize(() => (this.loadingPosts = false)))
      .subscribe(posts => {
        this.currentPosts = posts;
      });
  }

  onSearch(query: string): void {
    if (query.trim()) {
      this.loadingPosts = true;
      this.blogService
        .searchPosts(query)
        .pipe(finalize(() => (this.loadingPosts = false)))
        .subscribe((posts: BlogPost[]) => {
          this.currentPosts = posts.filter(post => !post.featured);
        });
    } else {
      this.loadingPosts = true;
      this.blogService
        .getPostsByCategory('All')
        .pipe(finalize(() => (this.loadingPosts = false)))
        .subscribe((posts: BlogPost[]) => {
          this.currentPosts = posts;
        });
    }
  }

  onCategorySelect(category: string): void {
    this.loadingPosts = true;
    this.blogService
      .getPostsByCategory(category)
      .pipe(finalize(() => (this.loadingPosts = false)))
      .subscribe((posts: BlogPost[]) => {
        this.currentPosts = posts;
      });
  }

  onSubscribe(): void {
    // Handle subscribe functionality
    console.log('Subscribe clicked');
    alert('Thank you for subscribing to our blog!');
  }
}