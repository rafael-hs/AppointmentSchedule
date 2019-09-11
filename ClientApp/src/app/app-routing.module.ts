import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';  
import { ListPatientComponent } from './list-patient/list-patient.component';  
import { AddPatientComponent } from './add-patient/add-patient.component';  
  
export const routes: Routes = [  
  { path: '', component: ListPatientComponent, pathMatch: 'full' },  
  { path: 'list-patient', component: ListPatientComponent },  
  { path: 'add-patient', component: AddPatientComponent }  
];  
  
@NgModule({  
  imports: [  
    CommonModule,  
    RouterModule.forRoot(routes)  
  ],  
  exports: [RouterModule],  
  declarations: []  
})  
export class AppRoutingModule { }  