import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';
import { Patient } from './../patient';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})

export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  submitted = false;
  dataNascimento: Date;
  dataConsulta: Date;


  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  mask = function (rawValue) {
    return [/\d/, /\d/, ':', /\d/, /\d/];
  };


  newPatient(): void {
    this.submitted = false;
    this.patient = new Patient();
  }

  save() {
    this.patient.dataNascimento = this.conversorDeData(this.dataNascimento);
    this.patient.dataConsulta = this.conversorDeData(this.dataConsulta);
    console.log(this.patient)
    this.patientService.createPatient(this.patient)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Patient();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
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
      + '-' + pad(data.getMonth()+1, 2)
      + '-' + pad(data.getDate(), 2)
      + ' ' + pad(data.getHours(), 2)
      + ':' + pad(data.getMinutes(), 2)
      + ':' + pad(data.getSeconds(), 2);

    return dataString;
  }
}
