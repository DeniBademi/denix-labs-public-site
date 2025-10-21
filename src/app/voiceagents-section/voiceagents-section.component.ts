import { Component, inject, LOCALE_ID } from '@angular/core';
import { VoiceagentsDemoComponent } from '../voiceagents-demo/voiceagents-demo.component';
@Component({
  selector: 'app-voiceagents-section',
  imports: [VoiceagentsDemoComponent],
  templateUrl: './voiceagents-section.component.html',
  styleUrl: './voiceagents-section.component.css'
})
export class VoiceagentsSectionComponent {
  public locale = inject(LOCALE_ID);
}
