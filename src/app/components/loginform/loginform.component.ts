import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-loginform',
  standalone: false,

  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  handleSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login form submitted:', this.loginForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
