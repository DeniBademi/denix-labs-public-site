import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-invite',
  imports: [],
  templateUrl: './contact-invite.component.html',
  styleUrl: './contact-invite.component.css'
})
export class ContactInviteComponent {

  @Input() public text: string = '';

}
