import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { TestimonialsComponent } from '../../testimonials/testimonials.component';
import { FaqComponent } from '../../faq/faq.component';
import { WhyUseAiComponent } from '../../why-use-ai/why-use-ai.component';
import { Meta, Title } from '@angular/platform-browser';
import { MetatagService } from '../../_services/metatag.service';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, TestimonialsComponent, FaqComponent, WhyUseAiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private metatag: MetatagService) {
    metatag.updateMetaTags('home');
   }

}
