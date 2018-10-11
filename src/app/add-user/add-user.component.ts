import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
// import { Bcrypt } from 'bcrypt';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser: User;
  user: User = {};
  constructor(private planService: PlanService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const formInput = Object.assign({}, form.value);

    const user: User = {
      username: formInput.username,
      password: formInput.password
    };

    this.planService.postUser(user)
    .subscribe(data => {
      console.log('posting new data');
  //    console.log(data);
  //    console.log(data.password);
  //    console.log(user);
      form.reset();
      this.newUser = data;
  //    console.log('new data posted');
    }, err => {
      if (err.status === 409 ) {
        window.alert('This user is already registered.');
      }
    });
  }

}
