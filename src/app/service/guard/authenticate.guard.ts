import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(private authenticateService: AuthenticateService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // check if the user is loggedin
    if (this.authenticateService.isLoggedIn()) {
      return true;
    } else {
      // if a wrong url inserted, go back to home page
      this.router.navigate(['/plans']);
      return false;
    }
  }
}
