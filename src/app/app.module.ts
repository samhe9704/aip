import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { JoinMemberFormComponent } from './join-member-form/join-member-form.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import {SuiModule} from 'ng2-semantic-ui';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CustomerListComponent,
    JoinMemberFormComponent,
    CustomerItemComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
