import { Component, OnInit, TemplateRef } from '@angular/core';
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
  searchText;
  modalRef: any;

  dataNascimentoEdit: Date;
  dataConsultaEdit: Date;
  patientEdit: Patient;

  constructor(private patientService: PatientService, private modalService: BsModalService) { }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getPatient(id: number) {
    this.patientService.getPatientById(id).subscribe(res => {
      this.patientEdit = res;
      console.log(res)
      this.dataNascimentoEdit = new Date(this.patientEdit.dataNascimento);
      this.dataConsultaEdit = new Date(this.patientEdit.dataConsulta);
    });
  }

  ngOnInit() {
    this.reloadData();
  }

  async reloadDataWDelay() {
    await this.delay(500);
      this.patientService.getPatients().subscribe(res => {
        this.patients = res;
      });
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  reloadData() {
    this.patientService.getPatients().subscribe(res => {
      this.patients = res;
    });
  }

  mask = function (rawValue) {
    return [/\d/, /\d/, ':', /\d/, /\d/];
  };

  dataFormate = function convertDate(dateString) {
    const p = dateString.split(/\D/g);
    return [p[2], p[1], p[0]].join('/');
  };

  timeFormate = function convertDate(timeString) {
    const p = timeString.split(/\D/g);
    return [p[0], p[1]].join(':');
  };

  deletePatient(id: number) {
    this.patientService.deletePatient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  onSubmit() {
    this.save();
    this.modalRef.hide();
  }

  save() {
    this.patientEdit.dataNascimento = this.conversorDeData(this.dataNascimentoEdit);
    this.patientEdit.dataConsulta = this.conversorDeData(this.dataConsultaEdit);
    console.log(this.patientEdit);
    this.patientService.updatePatient(this.patientEdit)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  conversorDeData(data: Date) {
    function pad(number, length) {

      let str = '' + number;
      while (str.length < length) {
        str = '0' + str;
      }
      return str;
    }
    const dataString = data.getFullYear()
      + '-' + pad(data.getMonth() + 1, 2)
      + '-' + pad(data.getDate(), 2)
      + ' ' + pad(data.getHours(), 2)
      + ':' + pad(data.getMinutes(), 2)
      + ':' + pad(data.getSeconds(), 2);

    return dataString;
  }

}
