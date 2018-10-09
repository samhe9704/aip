import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Plan } from '../plan';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})
export class PlanItemComponent implements OnInit {

  @Input() plan: Plan;
  @HostBinding('class') columnClass = 'four wide column';
  constructor() { }

  ngOnInit() {
  }

}
