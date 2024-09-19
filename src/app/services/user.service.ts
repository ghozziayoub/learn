import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signup(user: User) {
    return this.http.post<any>('http://localhost:3000/users/signup', user);
  }
}
