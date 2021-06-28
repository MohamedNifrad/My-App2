import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//datatables module
import { DataTablesModule } from 'angular-datatables';


//import layouts module
import { LayoutsModule } from './layouts/layouts.module';
import { EmployeesComponent } from './employees/employees.component';


//fire base
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { EmployeesService } from './services/employees.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EmployeesComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //import LayoutsModule
    LayoutsModule,
    //
    DataTablesModule,

    //fire store
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule

  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
