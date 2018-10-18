import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { Plan } from '../../model/plan';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  planUrl = '/api/plans';
  addPlanrUrl = '/api/add-plan';
  addUserUrl = '/api/add-user';

    plans: Plan[];

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  constructor(private http: HttpClient, private authenticate: AuthenticateService) { }

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.planUrl, this.authenticate.getAuthorizationOptions());
  }

  postPlan(plan: Plan): Observable<Plan> {
    return this.http.post<Plan>(this.addPlanrUrl, plan, this.authenticate.getAuthorizationOptions());
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.addUserUrl, user, this.authenticate.getAuthorizationOptions());
  }
}
