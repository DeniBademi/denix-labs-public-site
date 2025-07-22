import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../../_services/blog.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubscriptionModalComponent } from '../subscription-modal/subscription-modal.component';

@Component({
  selector: 'app-blog-hero',
  imports: [CommonModule, FormsModule, SubscriptionModalComponent],
  templateUrl: './blog-hero.component.html',
  styleUrl: './blog-hero.component.css'
})
export class BlogHeroComponent {
  @Output() searchQuery = new EventEmitter<string>();
  @Output() categorySelected = new EventEmitter<string>();
  @Output() subscribeClicked = new EventEmitter<void>();

  categories$: Observable<string[]>;
  searchText: string = '';
  selectedCategory: string = 'All';
  showSubscriptionModal: boolean = false;

  constructor(private blogService: BlogService) {
    this.categories$ = this.blogService.getCategories();
  }

  onSearch(): void {
    this.searchQuery.emit(this.searchText);
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }

  onSubscribe(): void {
    this.showSubscriptionModal = true;
  }

  onCloseModal(): void {
    this.showSubscriptionModal = false;
  }

  onSubscribeSubmit(email: string): void {
    this.subscribeClicked.emit();
    console.log('Subscribed email:', email);
    // Here you would typically send the email to your backend
  }
}