import { Component } from '@angular/core';
import { ContactInviteComponent } from '../../contact-invite/contact-invite.component';

@Component({
  selector: 'app-solutions',
  imports: [ContactInviteComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  contactInviteText = $localize`:@@solutions.contactInvite:And many more... let's discuss your AI model`;
}
