import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';


@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPatientById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}api/schedule/getpatient/${id}`);
  }
  createPatient(patient: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}api/schedule/createpatient`, patient);
  }
  updatePatient(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}api/schedule/updatepatient/${id}`, value) ;
  }
  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/schedule/deletepatient/${id}`, {responseType: 'text'});
  }
  getPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/schedule/getall`);
  }

}
