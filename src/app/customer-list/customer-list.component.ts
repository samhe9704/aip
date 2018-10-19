import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  // give customers a type of Observable<Customer[]>
  customers: Observable<Customer[]>;

  constructor(private customerService: CustomerService) { }
  // retrieve all customers from customer service
  getCustomers(): void {
    this.customers = this.customerService.getCustomers();
  }

  ngOnInit() {
    this.getCustomers();
  }
  // delete a customer
  deleteCustomer(id: string) {
    window.alert('Are you want to kick out this customer?');
    this.customerService.deleteCustomer(id).subscribe(data => {
      this.getCustomers();
    });
  }

}
