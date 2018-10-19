import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../model/user';
import { Token } from '../../model/token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  // set storage key
  storageKey = 'authenticate-jwt';
  // set related url
  loginUrl = '/api/login';
  // give users a type of User[]
  users: User[];

  constructor(private router: Router,
              private http: HttpClient) { }
  // get authorization options, content type and authorization
  getAuthorizationOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };
  }
  // add user's token
  post(user: User): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, user);
  }
  // set the token
  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }
  // retrieve the token
  getToken() {
    return localStorage.getItem(this.storageKey);
  }
  // check if user is logged in
  isLoggedIn() {
    return this.getToken() != null;
  }
  // check if user is logged out
  isLoggedOut() {
    return this.getToken() == null;
  }
  // user log out
  logOut() {
    // remove the token stored in local storage
    localStorage.removeItem(this.storageKey);
    // if user logout, go back to login
    this.router.navigate(['/login']);
  }
}
