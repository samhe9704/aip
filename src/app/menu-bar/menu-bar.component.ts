import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../service/authenticate/authenticate.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private authenticate: AuthenticateService) { }

  ngOnInit() {
  }
 // user log out
  logout() {
    this.authenticate.logOut();
  }

}
