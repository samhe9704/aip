import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { AuthenticateService } from '../authenticate/authenticate.service';
import { Plan } from '../../model/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  // set the related url
  planUrl = '/api/plans';
  addPlanrUrl = '/api/add-plan';
  // give plans a type of Plan[]
  plans: Plan[];
  // setting httpOptions, set new header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient, private authenticate: AuthenticateService) { }
  // retrieve all the plans
  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.planUrl, this.authenticate.getAuthorizationOptions());
  }
  // add a new plan to database
  postPlan(plan: Plan): Observable<Plan> {
    return this.http.post<Plan>(this.addPlanrUrl, plan, this.authenticate.getAuthorizationOptions());
  }

}
