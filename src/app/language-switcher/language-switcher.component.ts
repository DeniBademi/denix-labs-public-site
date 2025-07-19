import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../_services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher">
      <button
        *ngFor="let lang of languages"
        (click)="switchLanguage(lang)"
        [class.active]="languageService.isCurrentLanguage(lang)"
        class="lang-btn"
        [attr.aria-label]="'Switch to ' + languageService.getLanguageName(lang)">
        {{ languageService.getLanguageName(lang) }}
      </button>
    </div>
  `,
  styles: [`
    .language-switcher {
      display: flex;
      gap: 0.25rem;
      align-items: center;
    }

    .lang-btn {
      padding: 0.25rem 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: transparent;
      color: white;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 2rem;
      text-align: center;
    }

    .lang-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .lang-btn.active {
      background: #6366F1;
      border-color: #6366F1;
      color: white;
    }

    .lang-btn:focus {
      outline: 2px solid #6366F1;
      outline-offset: 2px;
    }

  `]
})
export class LanguageSwitcherComponent {
  languages: Language[] = ['bg', 'en'];

  constructor(public languageService: LanguageService) {}

  switchLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}