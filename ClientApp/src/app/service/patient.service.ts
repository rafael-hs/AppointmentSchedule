import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Patient } from '../model/patient.model';  
  
@Injectable({  
  providedIn: 'root'  
}) 

export class PatientService {
    constructor(private http: HttpClient) { }  
     baseUrl: string = 'https://localhost:5001/api/schedule/';  

    getPatients() {  
        return this.http.get<Patient[]>(this.baseUrl + "getall");  
      }  
      deletePatients(id: number) {  
        return this.http.delete<Patient[]>(this.baseUrl + "deletepatient/"+id);  
      }  
      createUser(patient: Patient) {  
        return this.http.post(this.baseUrl + "createpatient", patient);  
      }  
      getPatientById(id: number) {  
        return this.http.get<Patient>(this.baseUrl + 'getpatient/' + id);  
      }  
      updatePatient(patient: Patient) {  
        return this.http.put(this.baseUrl + 'updatepatient/' + patient.id, patient);  
      } 
}