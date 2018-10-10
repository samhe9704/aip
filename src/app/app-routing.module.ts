import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { JoinMemberFormComponent } from './join-member-form/join-member-form.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { AuthenticateGuard } from './authenticate.guard';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {path: '', redirectTo: 'plans', pathMatch: 'full' },

  {path: 'register', component: RegisterComponent},

  {path: 'login', component: LoginComponent },

  {path: 'customers', component: CustomerListComponent, canActivate: [AuthenticateGuard] },

  {path: 'plans', component: PlanListComponent },

  {path: 'add-plan', component: AddPlanComponent, canActivate: [AuthenticateGuard] },

  {path: 'add-user', component: AddUserComponent, canActivate: [AuthenticateGuard] },

  {path: '**', redirectTo: 'plans' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
