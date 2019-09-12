import { CreatePatientComponent } from './create-patient/create-patient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

const routes: Routes = [
  { path: 'patients', redirectTo: 'patient', pathMatch: 'full' },
  { path: 'patients', component: PatientListComponent },
  { path: 'add', component: CreatePatientComponent },
  { path: 'patients/edit', component: EditPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
