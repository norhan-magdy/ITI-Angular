import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@%$#*])[A-Za-z\\d@%$#*]{8,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  passwordMatch(): boolean {
    return (
      this.registerForm.get('userPassword')?.value ===
      this.registerForm.get('confirmPassword')?.value
    );
  }
  get formContreol() {
    return this.registerForm.controls;
  }
  handleSubmitForm() {
    if (this.registerForm.invalid || !this.passwordMatch()) {
      this.registerForm.get('confirmPassword')?.setErrors({ mismatch: true });
      return;
    }
    this.registerForm.reset();
    this.router.navigate(['/login']);
  }
}
