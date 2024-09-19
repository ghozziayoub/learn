import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { Route, Router, RouterLink, Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z ]*'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z ]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService, private router: Router) {}

  get firstname() {
    return this.signupForm.get('firstname');
  }

  get lastname() {
    return this.signupForm.get('lastname');
  }

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  signup() {
    const signupData = this.signupForm.value;
    // create an object

    let user = new User(
      signupData.firstname,
      signupData.lastname,
      signupData.email,
      signupData.password
    );

    // register user to database
    this.userService.signup(user).subscribe({
      next: (result) => {
        console.log(result);
        // redirect to login
        this.router.navigateByUrl('/signin')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
