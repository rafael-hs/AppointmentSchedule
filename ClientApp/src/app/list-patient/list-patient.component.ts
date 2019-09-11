import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient.model';
import { Router } from "@angular/router";

@Component({
    selector: 'list-patient',
    templateUrl: './list-patient.component.html',
    styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
    patients: Patient[];
    earchText;

    constructor(private patService: PatientService, private router: Router, ) { }

    ngOnInit() {
        this.patService.getPatients()
            .subscribe((data: Patient[]) => {
                this.patients = data;
            });
    }

    deletePatient(patient: Patient): void {
        this.patService.deletePatients(patient.id)
            .subscribe(data => {
                this.patients = this.patients.filter(u => u !== patient);
            })
    }

    editPatient(patient: Patient): void {
        localStorage.removeItem('editPatientId');
        localStorage.setItem('editPatientId', patient.id.toString());
        this.router.navigate(['add-patient']);
    }
}
