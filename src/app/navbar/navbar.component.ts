import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, LanguageSwitcherComponent, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('panelState', [
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      state('open', style({
        transform: 'translateX(0)'
      })),
      transition('closed => open', animate('300ms ease-out')),
      transition('open => closed', animate('300ms ease-in'))
    ]),

    trigger('hamburguerX', [
      /*
        state hamburguer => is the regular 3 lines style.
        states topX, hide, and bottomX => used to style the X element
      */
      state('hamburguer', style({})),
      // style top bar to create the X
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      // hides element when create the X (used in the middle bar)
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      // style bottom bar to create the X
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      transition('* => *', [
        animate('0.2s'), // controls animation speed
      ]),
    ]),
  ],
})
export class NavbarComponent {

  constructor(public router: Router) {

  }

  isHamburguer = true;
  onClick() {
    this.isHamburguer = !this.isHamburguer;
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  isNavbarOpen = false;

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  redirectAndClose(route: string): void {
    this.isNavbarOpen = false;
    this.isHamburguer = true;
    this.router.navigate([route]);
  }
}
