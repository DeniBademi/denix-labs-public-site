import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  public locale = inject(LOCALE_ID);

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

}
