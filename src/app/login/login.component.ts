import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    name: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Handle form submission logic here
    console.log('Form submitted with data:', this.formData);
  }
}
