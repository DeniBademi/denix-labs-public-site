import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  locale: string = this.getCurrentLocale();

  constructor(private router: Router) {}
  ngOnInit() {
    this.locale = this.getCurrentLocale();
  }
  switchLanguage(lang: 'en' | 'bg') {
  if (this.locale === lang) return;
  this.locale = lang;
  // Change the locale by reloading the page with the new locale path prefix
  const currentUrl = window.location.pathname;
  let newUrl = currentUrl;
  let currentDomain = window.location.origin;

  // Remove existing locale prefix if present
  if (currentUrl.startsWith('/en/')) {
    newUrl = currentUrl.replace(/^\/en/, '/bg/');
  } else if (currentUrl.startsWith('/bg/')) {
    newUrl = currentUrl.replace(/^\/bg/, '/en/');
  }


  // Remove double slashes
  newUrl = newUrl.replace(/\/{2,}/g, '/');
  console.log(currentDomain + '/' + lang + newUrl);

  
  window.location.href = currentDomain + '/' + lang + newUrl;


  // window.location.reload();
  }

  getCurrentLocale() {
    const path = window.location.pathname;
    if (path.startsWith('/bg/')) {
      return 'bg';
    }
    return 'en';
  }
}
