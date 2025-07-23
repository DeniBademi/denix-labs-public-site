import { Component, Input, inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
@Component({
  selector: 'app-contact-invite',
  imports: [],
  templateUrl: './contact-invite.component.html',
  styleUrl: './contact-invite.component.css'
})
export class ContactInviteComponent {
  public locale = inject(LOCALE_ID);
  @Input() public text: string = '';

}
