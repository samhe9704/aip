import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { JoinMemberFormComponent } from './join-member-form/join-member-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full' },

  {path: 'register', component: RegisterComponent},

  {path: 'login', component: LoginComponent },

  {path: 'customer-list', component: CustomerListComponent },

  {path: 'member-form', component: JoinMemberFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
