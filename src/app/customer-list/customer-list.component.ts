import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Observable<Customer[]>;

  selectedCustomer: Customer;

  constructor(private customerService: CustomerService) { }

  getCustomers(): void {
    this.customers = this.customerService.getCustomers();
  }

  ngOnInit() {
    this.getCustomers();
  }

  // onSelect(customer: Customer): void {
  //   this.selectedCustomer = customer;
  // }

}
