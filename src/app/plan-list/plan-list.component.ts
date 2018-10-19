import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanService } from '../service/plan/plan.service';
import { Plan } from '../model/plan';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  // give plans a type of Observable<Plan[]>
  plans: Observable<Plan[]>;

  constructor(private planService: PlanService) { }

  // retrieve all the plans from plan service
  getPlans(): void {
    this.plans = this.planService.getPlans();
  }

  ngOnInit() {
    return this.getPlans();
  }

}
