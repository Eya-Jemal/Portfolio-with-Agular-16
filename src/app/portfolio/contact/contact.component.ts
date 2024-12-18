import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  // Properties bound to the form inputs using ngModel
  userName: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  

  formSubmitted = false;  // Flag to show the confirmation overlay

  // Method to handle form submission
  onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      console.log(contactForm.value);  // Handle the form data (e.g., send to server)
      
      // Set the flag to true to show the overlay message
      this.formSubmitted = true;
      
      // Optionally reset the form
      contactForm.reset();
      
      // Hide the overlay after 5 seconds (optional)
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    } else {
      // Handle form errors if needed
      alert('Please fill in all required fields.');
    }
  }
}