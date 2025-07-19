import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

export type Language = 'bg' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: Language = 'bg';

  constructor(
    private location: Location,
    private router: Router
  ) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Check if there's a language in the URL path
    const path = this.location.path();
    const pathSegments = path.split('/').filter(segment => segment);

    if (pathSegments.length > 0 && (pathSegments[0] === 'bg' || pathSegments[0] === 'en')) {
      this.currentLanguage = pathSegments[0] as Language;
    } else {
      // Default to Bulgarian if no language specified
      this.currentLanguage = 'bg';
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  setLanguage(language: Language): void {
    if (this.currentLanguage === language) {
      return;
    }

    this.currentLanguage = language;

    // Get current path without language prefix
    let currentPath = this.location.path();
    const pathSegments = currentPath.split('/').filter(segment => segment);

    // Remove language prefix if present
    if (pathSegments.length > 0 && (pathSegments[0] === 'bg' || pathSegments[0] === 'en')) {
      pathSegments.shift();
    }

    // Construct new path with language prefix
    const newPath = `/${language}${pathSegments.length > 0 ? '/' + pathSegments.join('/') : ''}`;

    // Navigate to new path
    this.router.navigateByUrl(newPath);
  }

  getLanguageName(language: Language): string {
    return language === 'bg' ? 'Български' : 'English';
  }

  isCurrentLanguage(language: Language): boolean {
    return this.currentLanguage === language;
  }
}