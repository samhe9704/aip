import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }
  constructor() { }
}
