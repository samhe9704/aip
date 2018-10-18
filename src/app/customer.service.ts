import { Injectable } from '@angular/core';
import { Customer } from './model/customer';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl = '/api/customers';
  registerUrl = '/api/register';

    customers: Customer[];

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

  constructor(private http: HttpClient, private authenticate: AuthenticateService) { }



  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl, this.authenticate.getAuthorizationOptions());
  }

  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.registerUrl, customer, this.httpOptions);
  }

  deleteCustomer (id: string): Observable<{}> {
    const url = `${this.customerUrl}/${id}`;

    return this.http.delete(url, this.authenticate.getAuthorizationOptions());

  }

}
