import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  imports: [],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.css'
})
export class CookiePolicyComponent {


  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
