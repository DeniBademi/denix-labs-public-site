import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subscription-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './subscription-modal.component.html',
  styleUrl: './subscription-modal.component.css'
})
export class SubscriptionModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() subscribe = new EventEmitter<string>();

  email: string = '';
  isSubmitting: boolean = false;
  isSubmitted: boolean = false;
  errorMessage: string = '';
  isEmailValid: boolean = false;
  hasUserTyped: boolean = false;

  onClose(): void {
    this.closeModal.emit();
  }

  onEmailChange(): void {
    this.hasUserTyped = true;
    this.isEmailValid = this.validateEmail(this.email);

    // Clear error message if email becomes valid
    if (this.isEmailValid && this.errorMessage) {
      this.errorMessage = '';
    }
  }

  onSubmit(): void {
    if (this.validateEmail(this.email)) {
      this.isSubmitting = true;
      this.errorMessage = '';

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.subscribe.emit(this.email);

        // Auto close after 2 seconds
        setTimeout(() => {
          this.onClose();
        }, 3000);
      }, 1000);
    } else {
      // This should be translated in a real app, but for now we'll keep it simple
      this.errorMessage = 'Please enter a valid email address.';
    }
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getEmailHint(): string {
    if (!this.hasUserTyped) {
      return '';
    }
    if (!this.email.trim()) {
      // These hint messages should be translated in a real app
      return 'Email address is required.';
    }
    if (!this.isEmailValid) {
      return 'Please enter a valid email address (e.g., user@example.com).';
    }
    return '';
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}