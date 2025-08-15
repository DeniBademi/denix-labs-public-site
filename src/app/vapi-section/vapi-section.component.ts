import { Component, inject, LOCALE_ID } from '@angular/core';
import { VapiDemoComponent } from '../vapi-demo/vapi-demo.component';
@Component({
  selector: 'app-vapi-section',
  imports: [VapiDemoComponent],
  templateUrl: './vapi-section.component.html',
  styleUrl: './vapi-section.component.css'
})
export class VapiSectionComponent {
  public locale = inject(LOCALE_ID);
}
