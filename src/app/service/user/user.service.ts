import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { AuthenticateService } from '../authenticate/authenticate.service';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUserUrl = '/api/add-user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
constructor(private http: HttpClient, private authenticate: AuthenticateService) { }

// add user to database
postUser(user: User): Observable<User> {
  return this.http.post<User>(this.addUserUrl, user, this.authenticate.getAuthorizationOptions());
}
}
