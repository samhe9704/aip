import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../service/user/user.service';
import { User } from '../model/user';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // give newUser a type of User
  newUser: User;
  // initialize user to User which can contains attribute
  user: User = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const formInput = Object.assign({}, form.value);
    // set the form value to each field
    const user: User = {
      username: formInput.username,
      password: formInput.password
    };

    this.userService.postUser(user)
    .subscribe(data => {
      // reset the form
      form.reset();
      // pass the data to newUser
      this.newUser = data;
    }, err => {
      if (err.status === 409 ) {
        window.alert('This user is already registered.');
      }
    });
  }

}
