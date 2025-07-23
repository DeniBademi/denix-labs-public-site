import { Component, OnInit, LOCALE_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqService } from '../_services/faq.service';
import { FaqData, Faq } from '../_models/Faq';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
  faqData$: Observable<FaqData> | null = null;
  isLoading: boolean = true;
  error: string | null = null;

  private locale = inject(LOCALE_ID);

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.loadFaqData();
  }

  private loadFaqData(): void {
    this.faqData$ = this.faqService.getFaqData(this.locale);
    
    this.faqData$.subscribe({
      next: (data) => {
        this.isLoading = false;
        // Sort FAQs by order
        data.faqs.sort((a, b) => a.order - b.order);
      },
      error: (error) => {
        console.error('Error loading FAQ data:', error);
        this.error = 'Failed to load FAQ data';
        this.isLoading = false;
      }
    });
  }

  trackByFaqId(index: number, faq: Faq): string {
    return faq.id;
  }
}
