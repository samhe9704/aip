import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { SuiModule } from 'ng2-semantic-ui';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CustomerService } from './service/customer/customer.service';
import { AuthenticateService } from './service/authenticate/authenticate.service';
import { PlanService } from './service/plan/plan.service';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanItemComponent } from './plan-item/plan-item.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { AuthenticateGuard } from './service/guard/authenticate.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './service/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerItemComponent,
    MenuBarComponent,
    PlanListComponent,
    PlanItemComponent,
    AddPlanComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SuiModule,
    FormsModule
  ],
  providers: [CustomerService, AuthenticateService, PlanService, UserService, AuthenticateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
