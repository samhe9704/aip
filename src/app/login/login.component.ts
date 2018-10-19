import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { User } from '../model/user';
import { AuthenticateService } from '../service/authenticate/authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // give user a type of User
  user: User = {};

  constructor(private authenticate: AuthenticateService,
              private router: Router) { }

  ngOnInit() {
    if ( this.authenticate.isLoggedIn()) {
      // prevent duplicate login
      this.router.navigate(['./cusomers']);
    }
  }

  onLogin(form: NgForm) {
    const input = form.value;

    const payload = {
      username: input.username,
      password: input.password
    };

    this.authenticate.post(payload)
    .subscribe(data => {
      // create the token
      this.authenticate.setToken(data.token);

      this.router.navigate(['/customers']);
    }, (err) => {
      window.alert('Login failed! Please check your username or password');
      console.log(err);
    });
  }
}
