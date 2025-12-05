import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent {
  currentStep = 1;
  totalSteps = 5;
  quoteForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      // Step 1: About you
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      company: [''],
      
      // Step 2: Your business
      businessType: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      companySize: ['', [Validators.required]],
      
      // Step 3: Services
      services: [''],
      customService: [''],
      
      // Step 4: Budget & Timeline
      budget: ['', [Validators.required]],
      timeline: ['', [Validators.required]],
      startDate: [''],
      
      // Step 5: Additional info
      projectDescription: ['', [Validators.required]],
      additionalNotes: ['']
    });
  }

  nextStep() {
    if (this.validateCurrentStep()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateCurrentStep(): boolean {
    const stepFields: { [key: number]: string[] } = {
      1: ['fullName', 'email', 'phone'],
      2: ['businessType', 'industry', 'companySize'],
      3: [], // Services step - no required validation
      4: ['budget', 'timeline'],
      5: ['projectDescription']
    };

    const fields = stepFields[this.currentStep];
    if (fields) {
      let isValid = true;
      fields.forEach(field => {
        const control = this.quoteForm.get(field);
        if (control && control.invalid) {
          control.markAsTouched();
          isValid = false;
        }
      });
      return isValid;
    }
    return true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.quoteForm.valid) {
      console.log('Quote form submitted:', this.quoteForm.value);
      alert('Thank you for your quote request! We will contact you soon.');
      // Handle form submission
    }
  }

  get progressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  get f() {
    return this.quoteForm.controls;
  }
}

