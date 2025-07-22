import { Component, Input } from '@angular/core';
import { BlogPost } from '../../_models/BlogPost';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-featured',
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-featured.component.html',
  styleUrl: './blog-featured.component.css'
})
export class BlogFeaturedComponent {
  @Input() post?: BlogPost | null;
}