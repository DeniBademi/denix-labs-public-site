import { Component, OnInit, LOCALE_ID, inject } from '@angular/core';
import { BlogService } from '../../_services/blog.service';
import { BlogPost } from '../../_models/BlogPost';
import { Observable } from 'rxjs';
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

  private locale = inject(LOCALE_ID);

  constructor(private blogService: BlogService) {
    this.featuredPost$ = this.blogService.getFeaturedPost();
    this.posts$ = this.blogService.getPostsByCategory('All');
  }

  ngOnInit(): void {
    this.posts$.subscribe(posts => {
      this.currentPosts = posts;
    });
  }

  onSearch(query: string): void {
    if (query.trim()) {
      this.blogService.searchPosts(query).subscribe(posts => {
        this.currentPosts = posts.filter(post => !post.featured);
      });
    } else {
      this.posts$ = this.blogService.getPostsByCategory('All');
      this.posts$.subscribe(posts => {
        this.currentPosts = posts;
      });
    }
  }

  onCategorySelect(category: string): void {
    this.blogService.getPostsByCategory(category).subscribe(posts => {
      this.currentPosts = posts;
    });
  }

}