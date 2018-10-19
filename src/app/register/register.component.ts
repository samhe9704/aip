import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer/customer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // give newCustomer a type of Customer
  newCustomer: Customer;
  customer: Customer = {};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // refer to the value in the form
    const formInput = Object.assign({}, form.value);
    // give the form value to each of customer attribute
    const customer: Customer = {
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      phone: formInput.phone,
      email: formInput.email,
      type: formInput.type
    };
    // call the postCustomer to add customer
    this.customerService.postCustomer(customer)
    .subscribe(data => {
      // reset the form
      form.reset();
      this.newCustomer = data;
    });
  }
}
