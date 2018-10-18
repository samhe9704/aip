import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanService } from '../plan.service';
import { Plan } from '../model/plan';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  plans: Observable<Plan[]>;

  constructor(private planService: PlanService) { }

  getPlans(): void {
    this.plans = this.planService.getPlans();
  }

  ngOnInit() {
    return this.getPlans();
  }

}
