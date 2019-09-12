import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientService } from './../patient.service';
import { Patient } from './../patient';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Observable<Patient[]>;
  earchText;
  modalRef: any;
  dataNascimentoEdit: Date;
  dataConsultaEdit: Date;
  @Input() patientEdit: Patient;

  constructor(private patientService: PatientService, private modalService: BsModalService) { }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getPatient(id: number) {
    this.patientService.getPatientById(id).subscribe(res => {
      this.patientEdit = res;
      this.dataNascimentoEdit = new Date(this.patientEdit.dataNascimento);
      this.dataConsultaEdit = new Date(this.patientEdit.dataConsulta);
    });
  }

  ngOnInit() {
    this.reloadData();
  }

  dataFormate = function convertDate(dateString) {
    const p = dateString.split(/\D/g);
    return [p[2], p[1], p[0]].join('/');
  };


  reloadData() {
    this.patientService.getPatients().subscribe(res => {
      this.patients = res;
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
