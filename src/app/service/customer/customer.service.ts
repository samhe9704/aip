import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { AuthenticateService } from '../authenticate/authenticate.service';
import { Customer } from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // set the related urls
  customerUrl = '/api/customers';
  registerUrl = '/api/register';
  // give customers a type of Customer[]
  customers: Customer[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, private authenticate: AuthenticateService) { }

  // retrieve all the customers from database
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl, this.authenticate.getAuthorizationOptions());
  }
  // register a new customer to database
  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.registerUrl, customer, this.httpOptions);
  }
  // delete the selected customer from database
  deleteCustomer (id: string): Observable<{}> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.delete(url, this.authenticate.getAuthorizationOptions());
  }
}
