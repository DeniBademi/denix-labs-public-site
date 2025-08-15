import { Component, inject, PLATFORM_ID, LOCALE_ID } from '@angular/core';
import { Router, RouterOutlet, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgcCookieConsentService, NgcInitializationErrorEvent, NgcInitializingEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
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
    private readonly locale = inject(LOCALE_ID);

    constructor(private ccService: NgcCookieConsentService,
                private router: Router,
                private meta: MetatagService) {
                  // particlesJS.load('particles-js', '/particlesjs-config.json', null);
    }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platform_id)) {
      return;
    }
    console.log(this.locale);
    if (this.locale === 'en') {
      this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
      // Override default messages with the translated ones
      this.ccService.getConfig().content!.message = 'We use cookies to improve your experience. By continuing to use our site, you agree to our Cookie Policy.';
      this.ccService.getConfig().content!.dismiss = 'Accept all';
      this.ccService.getConfig().content!.allow = 'Accept all';
      this.ccService.getConfig().content!.deny = 'Reject';
      this.ccService.getConfig().content!.link = 'Cookie Policy';
      this.ccService.getConfig().content!.href = '/en/cookies';
      this.ccService.getConfig().content!.policy = 'Cookie Policy';


      this.ccService.destroy(); // remove previous cookie bar (with default messages)
      this.ccService.init(this.ccService.getConfig());
    }
    this.meta.updateMetaTags();

    // Subscribe to cookieconsent observables on the browser only
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
      // Popup opened
    });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {
      // Popup closed
    });

    this.initializingSubscription = this.ccService.initializing$.subscribe(
      (event: NgcInitializingEvent) => {
        console.log(`initializing: ${JSON.stringify(event)}`);
      }
    );

    this.initializedSubscription = this.ccService.initialized$.subscribe(() => {
      // Now safe to call service methods
      console.log('CookieConsent: initialized with config:', this.ccService.getConfig());
      // Force open once in dev to verify UI appears (will be ignored if already answered)
      this.ccService.open();
    });

    this.initializationErrorSubscription = this.ccService.initializationError$.subscribe(
      (event: NgcInitializationErrorEvent) => {
        console.log(`initializationError: ${JSON.stringify(event.error?.message)}`);
      }
    );

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        // Status changed
        this.ccService.close(false);
      }
    );

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(() => {
      // Choice revoked
    });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // No cookie law in this region
      }
    );

    // Reset scroll position to top on route change
    this.routerSubscription = this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
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