import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FaqData } from '../_models/Faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private faqDataUrls = {
    'en': '/data/faq.json',
    'bg': '/data/faq-bg.json'
  };

  constructor(private http: HttpClient) { }

  getFaqData(locale: string = 'en'): Observable<FaqData> {
    // Default to English if locale is not supported
    const url = this.faqDataUrls[locale as keyof typeof this.faqDataUrls] || this.faqDataUrls['en'];
    return this.http.get<FaqData>(url);
  }
} 