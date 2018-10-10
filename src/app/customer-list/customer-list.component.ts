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

  deleteCustomer(id: string) {
    console.log('customer id: ' + id);
   // this.customerService.deleteCustomer(id).subscribe();
    this.customerService.deleteCustomer(id).subscribe(data => {
      console.log('esdf');
      this.getCustomers();
    });

    console.log('blabla');
  }

}
