import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticate: AuthenticateService,
              private router: Router) { }

  ngOnInit() {
    if ( this.authenticate.isLoggedIn()) {
      this.router.navigate(['./cusomers']);
    }
  }

  onLogin(form: NgForm) {
    const input = form.value;

      console.log(input);
    const payload = {
      username: input.username,
      password: input.password
    };

    console.log('onSubmit');

    this.authenticate.post(payload)
    .subscribe(data => {
      console.log('subscribing');
      console.log(data);
      this.authenticate.setToken(data.token);
      console.log(data.token);

      this.router.navigate(['/customers']);
    }, (err) => {
      window.alert('Incorrect Login details');
      console.log(err);
    });
  }

}
