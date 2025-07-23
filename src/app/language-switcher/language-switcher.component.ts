import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  locale: string = this.getCurrentLocale();

  switchLanguage(lang: 'en' | 'bg') {
    if (this.locale === lang) return;
    this.locale = lang;
    // Change the locale by reloading the page with the new locale path prefix
    if (typeof window === 'undefined') {
      return;
    }
    const currentUrl = window.location.pathname;
    let newUrl = currentUrl;

    // Remove existing locale prefix if present
    if (currentUrl.startsWith('/en/')) {
      newUrl = currentUrl.replace(/^\/en/, '/bg');
    } else if (currentUrl.startsWith('/bg/')) {
      newUrl = currentUrl.replace(/^\/bg/, '/en');
    }

    // Remove double slashes
    newUrl = newUrl.replace(/\/{2,}/g, '/');

    window.location.pathname = newUrl;
  }

  getCurrentLocale() {
    if (typeof window === 'undefined') {
      return 'en';
    }
    const path = window.location.pathname;
    if (path.startsWith('/bg/')) {
      return 'bg';
    }
    return 'en';
  }
}
