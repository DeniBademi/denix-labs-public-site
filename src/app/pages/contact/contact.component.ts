import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MetatagService } from '../../_services/metatag.service';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    contactForm: FormGroup;
    isContactFormSubmitted = false;

    constructor(private fb: FormBuilder, private http: HttpClient, private metatag: MetatagService) {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        companyName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.pattern(/^\+359\d{9}$/)],
        message: [''],
        // budgetLow: [3000],
        // budgetHigh: [50000]
      });

      // this.contactForm.get('budgetLow')!.valueChanges.subscribe(value => {
      //   if (value > this.contactForm.get('budgetHigh')!.value) {
      //     this.contactForm.get('budgetHigh')!.setValue(value);
      //   }
      // });

      // this.contactForm.get('budgetHigh')!.valueChanges.subscribe(value => {
      //   if (value < this.contactForm.get('budgetLow')!.value) {
      //     this.contactForm.get('budgetLow')!.setValue(value);
      //   }
      // });

    }

  ngOnInit(): void {
    this.metatag.updateMetaTags('contact');
  }


  onSubmit(evt: SubmitEvent): void {
    console.log('Form Data:', this.contactForm.value);
    evt.preventDefault();

    const formData = this.contactForm.value;
    // This is important. We need to add the hidden field to make sure Netlify picks up the form submission.
    formData['form-name'] = 'contact';
    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http.post('https://hook.eu2.make.com/pshhfa3femr7buiulrgxtac0a0ytegnu', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        this.isContactFormSubmitted = true;
      });
    }


  // functions used in the html template
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get body() {
    return this.contactForm.get('body');
  }
}
