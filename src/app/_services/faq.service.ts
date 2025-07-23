import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FaqData } from '../_models/Faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private faqDataUrl = '/data/faq.json';

  constructor(private http: HttpClient) { }

  getFaqData(): Observable<FaqData> {
    return this.http.get<FaqData>(this.faqDataUrl);
  }
} 