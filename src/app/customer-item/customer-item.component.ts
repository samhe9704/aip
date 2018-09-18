import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  @Input() customer: Customer;
  @HostBinding('class') columnClass = 'four wide column';
  constructor() { }

  ngOnInit() {
  }

}
