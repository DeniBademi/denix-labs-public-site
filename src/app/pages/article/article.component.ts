import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownWrapperComponent } from '../../markdown-wrapper/markdown-wrapper.component';
import { SanityService } from '../../_services/sanity';
import { BlogPost } from '../../_models/BlogPost';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownWrapperComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  articleId: string = '';
  articleData: BlogPost | null = null;
  loadingArticle: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private sanityService: SanityService) {

  }

  ngOnInit(): void {
    // Get the article ID from the route parameters
    this.route.params.subscribe(params => {
      this.articleId = params['id'];

      // Load article data from our JSON object
      this.loadArticleData();
    });
  }

  private loadArticleData(): void {
    this.loadingArticle = true;
    this.articleData = null;
    // Fetch article data
    this.sanityService
      .getPostBySlug(this.articleId)
      .then((post) => {
        if (!post) {
          this.router.navigate(['/not-found']);
          return;
        }
        this.articleData = post;
        this.loadingArticle = false;
      })
      .catch(() => this.router.navigate(['/not-found']))
      .finally(() => {
        this.loadingArticle = false;
      });
  }
}