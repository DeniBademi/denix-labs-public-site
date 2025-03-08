import { Component } from '@angular/core';
import { Router, RouterOutlet, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs';

declare var particlesJS: any;

import { IStaticMethods } from 'flyonui/flyonui';
import { Meta, Title } from '@angular/platform-browser';
import { MetatagService } from './_services/metatag.service';
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

    constructor(private ccService: NgcCookieConsentService,
                private router: Router,
                private meta: MetatagService) {
                  // particlesJS.load('particles-js', '/particlesjs-config.json', null);
    }

  ngOnInit(): void {
    this.meta.updateMetaTags();
    if(localStorage.getItem('cookieconsent_dismissed') === 'yes') {
      this.ccService.destroy();
    }

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe( () => {
      localStorage.setItem('cookieconsent_dismissed', 'yes');
     });

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