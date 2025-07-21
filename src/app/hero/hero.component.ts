import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

declare var particlesJS: any;
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent  {

  private readonly platform_id = inject(PLATFORM_ID);
  constructor() { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform_id)) {
      particlesJS.load('particles-js', '/particlesjs-config.json', null);
    }
  }
}

