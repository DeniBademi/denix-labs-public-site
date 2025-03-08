import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    contactForm: FormGroup;
    constructor(private fb: FormBuilder) {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        companyName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        message: ['', Validators.required],
        budgetLow: [3000, Validators.required],
        budgetHigh: [50000, Validators.required]
      });

      this.contactForm.get('budgetLow')!.valueChanges.subscribe(value => {
        if (value > this.contactForm.get('budgetHigh')!.value) {
          this.contactForm.get('budgetHigh')!.setValue(value);
        }
      });

      this.contactForm.get('budgetHigh')!.valueChanges.subscribe(value => {
        if (value < this.contactForm.get('budgetLow')!.value) {
          this.contactForm.get('budgetLow')!.setValue(value);
        }
      });

    }

  ngOnInit(): void {

  }


  onSubmit(): void {
    // console.log('Form Data:', this.contactForm.value);
    if (this.contactForm.valid) {
      // console.log('Form Data:', this.contactForm.value);
    } else {
      // console.log('Form is invalid.');
    }
  }
}
