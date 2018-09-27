import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customer';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  uri = "http://localhost:4200";
  getCustomers(): Observable<Customer[]> {

   return of(CUSTOMERS);
  }
  // getCustomers(){
  //   return this.http.get<Customer[]>('http://localhost:4200/customers')
  //   .pipe(map(result =>result['customers']));
  // }

  constructor(private http: HttpClient) { }
}
