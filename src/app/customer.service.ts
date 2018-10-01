import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customer';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  uri = 'http://localhost:4200/customers';
  // getCustomers(): Observable<Customer[]> {
    customers: Customer[];
  //  return of(CUSTOMERS);
  // }
  // getCustomers(): Customer[] {
  //   // return this.http.get<Customer[]>('http://localhost:4200/customers')
  //   // .pipe(map(result =>result['customers']));
  //   // return this.http.get(this.uri)
  //   // .toPromise()
  //   // .then(response => response.json().data as Customer[]);
  //    this.http.get<Customer[]>('/customers')
  //   .pipe(map((res: Response) => res.json()))
  //   .subscribe(data => data);
  //   return this.customers;
  //   };
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.uri);
    // return this.http
    //     .get(`/customers`)
    //     .pipe(map(result=>result['customers'] as Customer[]));
}



  constructor(private http: HttpClient) { }
}
