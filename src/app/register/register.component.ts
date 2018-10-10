import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newCustomer: Customer;
  customer: Customer = {};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {

    const formInput = Object.assign({}, form.value);

    const customer: Customer = {
      firstName: formInput.firstName,
      lastName: formInput.lastName,
      phone: formInput.phone,
      email: formInput.email,
      type: formInput.type
    };

    this.customerService.postCustomer(customer)
    .subscribe(data => {
      console.log(data);
      console.log(data.email);
      form.reset();
      this.newCustomer = data;
      console.log('new data posted');
    });
  }
  // onSubmit() {

  // }

}
