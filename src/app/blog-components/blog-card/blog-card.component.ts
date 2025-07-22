import { Component, Input } from '@angular/core';
import { BlogPost } from '../../_models/BlogPost';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [RouterModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input() post!: BlogPost;
  @Input() featured: boolean = false;
}