import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs';
import { LanguageService } from './_services/language.service';

declare var particlesJS: any;

import { IStaticMethods } from 'flyonui/flyonui';
import { Meta, Title } from '@angular/platform-browser';
import { MetatagService } from './_services/metatag.service';
import { isPlatformBrowser } from '@angular/common';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    FooterComponent,
    NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {


    //keep refs to subscriptions to be able to unsubscribe later
    private popupOpenSubscription!: Subscription;
    private popupCloseSubscription!: Subscription;
    private initializingSubscription!: Subscription;
    private initializedSubscription!: Subscription;
    private initializationErrorSubscription!: Subscription;
    private statusChangeSubscription!: Subscription;
    private revokeChoiceSubscription!: Subscription;
    private noCookieLawSubscription!: Subscription;
    private readonly platform_id = inject(PLATFORM_ID);

    constructor(private ccService: NgcCookieConsentService,
                private router: Router,
                private meta: MetatagService,
                private languageService: LanguageService) {
                  // particlesJS.load('particles-js', '/particlesjs-config.json', null);


    }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platform_id)) {
      this.meta.updateMetaTags();
      if(localStorage.getItem('cookieconsent_dismissed') === 'yes') {
        this.ccService.destroy();
      }
      this.popupCloseSubscription = this.ccService.popupClose$.subscribe( () => {
        localStorage.setItem('cookieconsent_dismissed', 'yes');
       });

      // Initialize language service and handle navigation
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          // Small delay to ensure the route is fully processed
          setTimeout(() => {
            this.languageService.initializeLanguage();
          }, 100);
        }
      });
    }



   }
  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    // this.popupOpenSubscription.unsubscribe();
    // this.popupCloseSubscription.unsubscribe();
    // this.initializingSubscription.unsubscribe();
    // this.initializedSubscription.unsubscribe();
    // this.initializationErrorSubscription.unsubscribe();
    // this.statusChangeSubscription.unsubscribe();
    // this.revokeChoiceSubscription.unsubscribe();
    // this.noCookieLawSubscription.unsubscribe();
  }


}