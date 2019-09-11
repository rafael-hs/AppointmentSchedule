import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  
import { ReactiveFormsModule } from "@angular/forms";  
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { ListPatientComponent} from './list-patient/list-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component'; 
import { PatientService } from './service/patient.service';   

@NgModule({
  declarations: [
    AppComponent,
    ListPatientComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Employee {  
  id?: number;  
  employee_name?: string;  
  employee_salary?: number;  
  employee_age?: number;  
} 