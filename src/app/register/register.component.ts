import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';

// import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;
  newCustomer: Customer;
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }


  // onSubmit(form: NgForm) {

  //   this.loading = true;

  //   const formInput = Object.assign({}, form.value);

  //   const customer: Customer = {
  //     firstName: formInput.firstName,
  //     lastName: formInput.lastName,
  //     phone: formInput.phone,
  //     email: formInput.email
  //   };

  //   this.customerService.postCustomers(this.newCustomer)
  //   .subscribe(newCustomer => this.customers.push(newCustomer));
  // }

}
