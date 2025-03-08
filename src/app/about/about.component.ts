import { Component } from '@angular/core';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-about',
  imports: [TeamComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
