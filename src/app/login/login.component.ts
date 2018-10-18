import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};

  constructor(private authenticate: AuthenticateService,
              private router: Router) { }

  ngOnInit() {
    if ( this.authenticate.isLoggedIn()) {
      this.router.navigate(['./cusomers']);
    }
  }

  onLogin(form: NgForm) {
    const input = form.value;

    //  console.log(input);
    const payload = {
      username: input.username,
      password: input.password
    };

    this.authenticate.post(payload)
    .subscribe(data => {
   //   console.log(data);
      this.authenticate.setToken(data.token);
   //   console.log(data.token);

      this.router.navigate(['/customers']);
    }, (err) => {
      window.alert('Login failed! Please check your username or password');
      console.log(err);
    });
  }

}
