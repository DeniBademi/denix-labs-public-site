import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

declare var keenSlider: any;
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  constructor() {

  }
}
