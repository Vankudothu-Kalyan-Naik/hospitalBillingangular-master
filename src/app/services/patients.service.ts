import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patientData: Patient = new Patient();
  constructor(private http:HttpClient) { }
  baseUrl:string ="https://localhost:44351/api/Patients";

  addPatient() {
    return this.http.post(this.baseUrl,this.patientData);
  }

}
