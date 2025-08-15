import { Component, Input, LOCALE_ID, inject } from '@angular/core';
import { BlogPost } from '../../_models/BlogPost';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-grid',
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.css'
})
export class BlogGridComponent {
  @Input() posts: BlogPost[] = [];
  @Input() loading: boolean = false;

  private locale = inject(LOCALE_ID);
}