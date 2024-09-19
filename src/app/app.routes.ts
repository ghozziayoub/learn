import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'learn',
    component: TestComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'properties',
    component: PropertiesComponent,
  },
  {
    path: 'property-details',
    component: PropertyDetailsComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
];
