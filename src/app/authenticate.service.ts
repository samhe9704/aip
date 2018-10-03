import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  // storageKey: string = 'customers-jwt';

  constructor(private router: Router) { }

  // setToken(token: string) {
  //   localStorage.setItem(this.storageKey, token);
  // }

  // getToken() {
  //   return localStorage.getItem(this.storageKey);
  // }

  // isLoggedIn() {
  //   return this.getToken() != null;
  // }

  // logOut() {
  //   localStorage.removeItem(this.storageKey);
  //   this.router.navigate(['/login']);
  // }
}
