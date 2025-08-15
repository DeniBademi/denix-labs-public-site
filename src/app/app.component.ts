import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs';
import { filter } from 'rxjs/operators';

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
    private routerSubscription!: Subscription;
    private readonly platform_id = inject(PLATFORM_ID);

    constructor(private ccService: NgcCookieConsentService,
                private router: Router,
                private meta: MetatagService) {
                  // particlesJS.load('particles-js', '/particlesjs-config.json', null);


    }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      console.log(window.navigator.language);
    }
    if (isPlatformBrowser(this.platform_id)) {
      this.meta.updateMetaTags();
      if (typeof window !== 'undefined' && localStorage.getItem('cookieconsent_dismissed') === 'yes') {
        this.ccService.destroy();
      }
      this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('cookieconsent_dismissed', 'yes');
        }
      });

      // Reset scroll position to top on route change
      this.routerSubscription = this.router.events
        .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          // Scroll to top of the page
          if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
          }
        });
    }
   }
  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    // this.popupOpenSubscription.unsubscribe();
    if (this.popupCloseSubscription) {
      this.popupCloseSubscription.unsubscribe();
    }
    // this.initializingSubscription.unsubscribe();
    // this.initializedSubscription.unsubscribe();
    // this.initializationErrorSubscription.unsubscribe();
    // this.statusChangeSubscription.unsubscribe();
    // this.revokeChoiceSubscription.unsubscribe();
    // this.noCookieLawSubscription.unsubscribe();
    
    // Unsubscribe from router events to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }


}