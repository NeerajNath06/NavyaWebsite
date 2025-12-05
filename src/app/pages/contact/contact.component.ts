import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      serviceNeeded: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
      this.submitted = false;
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}

