import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {NgcCookieConsentConfig, provideNgcCookieConsent} from 'ngx-cookieconsent';
import { provideAnimations } from '@angular/platform-browser/animations';


const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: "https://angular6-ngx-cookie-consent-dmrmrk.stackblitz.io" // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  position: "bottom-right", //  'top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
  theme: "classic", // or 'block' or 'edgeless'
  showLink: true, // false
  type: "opt-in", // 'info', 'opt-in' or 'opt-out'
  palette: {
    popup: {
      background: "#111111",
      text: "#ffffff",
      link: "#ffffff"
    },
    button: {
      background: "#6366F1",
      text: "#ffffff",
      border: "transparent"
    }
  },
  // type: "opt-in",

  animateRevokable: true,
  revokable: true,

  content: {
    message: "Ние използваме “бисквитки”, за да подобрим интеракциите ви с нашия сайт. За повече информация, моля прочетете нашата политика за бисквитките.",
    dismiss: "Приемам всички бисктвитки",
    allow: "Приемам всички",
    deny: "Откажи",
    link: "Политика за бисквитки",
    href: "/cookies",
    policy: "Cookie Policy",
    cookieconsent_dismissed: "yes",
    close : '&#x274c;'
  }
};




export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideNgcCookieConsent(cookieConfig),
    provideAnimations()
  ]
};
