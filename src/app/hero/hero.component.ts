import { Component } from '@angular/core';

declare var particlesJS: any;
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent  {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', '/particlesjs-config.json', null);


  }



}

