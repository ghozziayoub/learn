import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactUs } from '../../models/contact-us';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  contactUsForm: FormGroup = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z ]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z0-9 ]*'),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z0-9 ]*'),
    ]),
  });

  get fullname() {
    return this.contactUsForm.get('fullname');
  }

  get email() {
    return this.contactUsForm.get('email');
  }
  get subject() {
    return this.contactUsForm.get('subject');
  }
  get message() {
    return this.contactUsForm.get('message');
  }

  sendContactForm() {
    console.log('function works !');
    console.log(this.contactUsForm.value);

    let contactUsData = this.contactUsForm.value;
    // create an object

    let contactUs = new ContactUs(
      contactUsData.fullname,
      contactUsData.email,
      contactUsData.subject,
      contactUsData.message
    );

    console.log(contactUs);
    // send contactUsData to database
  }
}
