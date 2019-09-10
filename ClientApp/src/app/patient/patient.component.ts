import { Component, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent{
    public patients: Patient[]; 

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
        http.get<Patient[]>(baseUrl + 'api/schedule/getall').subscribe(result => {
          this.patients = result;
          console.log(result)
        }, error => console.error(error));
    }
}

interface Patient{
    nome: string;
    dataNascimento: Date;
    dataConsulta: Date;
    horaInicio: Date;
    horaFim: Date;
    observacao: string;
}