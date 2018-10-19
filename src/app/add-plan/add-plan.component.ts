import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PlanService } from '../service/plan/plan.service';
import { Plan } from '../model/plan';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  constructor(private planService: PlanService) { }
  // give newPlan a type of Plan
  newPlan: Plan;
  // give plan a type of Plan which can contains attributes
  plan: Plan = {};

  ngOnInit() {}

  onSubmit(form: NgForm) {

    const formInput = Object.assign({}, form.value);
    // set the form value to each field
    const plan: Plan = {
      title: formInput.title,
      time: `Start at: ${formInput.start}  Duration: ${formInput.duration} hour  On: ${formInput.week}`,
      coach: `Coach:  ${formInput.coach}`,
      content: formInput.content,
      type: formInput.type,
    };

    this.planService.postPlan(plan)
    .subscribe(data => {
      // reset the form
      form.reset();
      // push the value in data to newPlan
      this.newPlan = data;
    });
  }
}
