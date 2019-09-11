import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PatientService } from '../service/patient.service';
import { Router } from "@angular/router";


@Component({
    selector: 'app-add-patient',
    templateUrl: './add-patient.component.html',
    styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent implements OnInit {

    patientformlabel: string = 'Adicionar paciente'
    patientformbtn: string = 'Salvar'

    constructor(private formBuilder: FormBuilder, private router: Router, private patService: PatientService) {
    }

    addForm: FormGroup;
    btnvisibility: boolean = true;

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            id: [],
            patient_name: ['', Validators.required],
            data_nascimento: ['', [Validators.required, Validators.maxLength(13)]],
            data_consulta: ['', [Validators.required, Validators.maxLength(13)]]
        })

        let patientid = localStorage.getItem('editPatientId');
        if (+patientid > 0) {
            this.patService.getPatientById(+patientid).subscribe(data => {
                this.addForm.patchValue(data);
            })
            this.btnvisibility = false;
            this.patientformlabel = 'Editar Paciente';
            this.patientformbtn = 'Concluir';
        }
    }

    onSubmit() {  
        console.log('Create fire');  
        this.patService.createUser(this.addForm.value)  
          .subscribe(data => {  
            this.router.navigate(['list-patient']);  
          },  
          error => {  
            alert(error);  
          });  
      } 

      onUpdate() {  
        console.log('Update fire');  
        this.patService.updatePatient(this.addForm.value).subscribe(data => {  
          this.router.navigate(['list-patient']);  
        },  
          error => {  
            alert(error);  
          });  
      } 

}