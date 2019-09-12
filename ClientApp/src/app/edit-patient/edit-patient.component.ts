import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';
import { Patient } from './../patient';


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient: Patient = new Patient();
  submitted = false;
  dataNascimento: Date;
  dataConsulta: Date;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }


  save() {
    this.patient.dataNascimento = this.conversorDeData(this.dataNascimento);
    this.patient.dataConsulta = this.conversorDeData(this.dataConsulta);
    console.log(this.patient)
    this.patientService.updatePatient(this.patient.id, this.patient )
      .subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Patient();

  }

  mask = function (rawValue) {
    return [/\d/, /\d/, ':', /\d/, /\d/];
  };

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
      + '-' + pad(data.getMonth(), 2)
      + '-' + pad(data.getDate(), 2)
      + ' ' + pad(data.getHours(), 2)
      + ':' + pad(data.getMinutes(), 2)
      + ':' + pad(data.getSeconds(), 2);

    return dataString;
  }


}
