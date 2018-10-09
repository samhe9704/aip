import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Plan } from '../plan';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  constructor(private planService: PlanService) { }

  newPlan: Plan;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

      const formInput = Object.assign({}, form.value);

      const plan: Plan = {
        title: formInput.title,
        time: `${formInput.start}-${formInput.end} ${formInput.week}`,
        coach: formInput.coach,
        content: formInput.content,
        type: formInput.type,
      };

      this.planService.postPlan(plan)
      .subscribe(data => {
        console.log('posting new data');
        form.reset();
        this.newPlan = data;
        console.log('new data posted');
      });
    }

}
