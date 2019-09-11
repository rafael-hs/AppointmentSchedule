import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PatientService {

  private baseUrl = '/api/v1/employees';
  constructor(private http: HttpClient) { }

  getPatientById(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}getpatient/${id}`);
  }
  createPatient(patient: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}createpatient`, patient);
  }
  updatePatient(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}updatepatient/${id}`, value) ;
  }
  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deletepatient/${id}`, {responseType: 'text'});
  }
  getPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}getall`);
  }

}
