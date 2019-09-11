import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from './../patient.service';
import { Patient } from './../patient';
import { PatientListComponent } from '../patient-list/patient-list.component';

@Component({
  selector: 'app-patient-datails',
  templateUrl: './patient-datails.component.html',
  styleUrls: ['./patient-datails.component.css']
})
export class PatientDatailsComponent implements OnInit {

  @Input() patient: Patient;

  constructor(private patientService: PatientService, private listComponent: PatientListComponent) { }

  ngOnInit() {
  }

}
