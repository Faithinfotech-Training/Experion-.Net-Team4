import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Patient } from './Patient';
import { Observation } from './observation';
import {Medicine} from './medicine'
import { Observable } from 'rxjs';
import { Test } from './test';
import { PrescribedTest } from './prescribedtest';
import { Prescription } from './prescription';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  //Declaring The variables   
  noteFormData: Observation = new Observation();
  prescriptionFormData: Prescription = new Prescription();
  medicineFormData: Medicine = new Medicine();
  prescribedTestFormData: PrescribedTest = new PrescribedTest();
  patients : Patient[];
  medicines : Medicine[];
  observations : Observation[];
  

  constructor(private httpClient: HttpClient) { }

  //Get All Reports
  bindListPatients(){
    this.httpClient.get(environment.apiUrl+"api/patient")
      .toPromise().then(response => 
      this.patients=response as Patient[]
    );
  }

  //Get All Medicines in a Prescription
  bindListPrescribedMedicines(medicineId :number){
    this.httpClient.get(environment.apiUrl+"api/medicine/" + medicineId)
      .toPromise().then(response => 
      this.medicines=response as Medicine[]
    );
  }

  //Get Observations For all Patients
  bindListObservations(noteId :number){
    this.httpClient.get(environment.apiUrl+"api/observations/" + noteId)
      .toPromise().then(response => 
      this.observations=response as Observation[]
    );    
  }  

  //INSERT Observations
  insertObservation(note :Observation): Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/observations",note);
  }

  //INSERT Prescription
  insertPrescription(prescription :Prescription): Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/prescription",prescription);
  }

  //INSERT
  insertMedicine(medicine : Medicine): Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/medicine",medicine);
  }

  //INSERT
  insertTest(test : PrescribedTest): Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/prescribedtest",test);
  }
}
