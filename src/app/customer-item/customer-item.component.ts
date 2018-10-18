import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  @Input() customer: Customer;
  @HostBinding('class') columnClass = 'four wide column';
  constructor(/*private customers: CustomerService*/) { }

  ngOnInit() {
  }

  // this.customerService.deleteCustomer(customer.id).subscribe();

}
