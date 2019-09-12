import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientService } from './../patient.service';
import { Patient } from './../patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Observable<Patient[]>;
  earchText;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.patientService.getPatients().subscribe(res => {
      this.patients = res
    });
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
