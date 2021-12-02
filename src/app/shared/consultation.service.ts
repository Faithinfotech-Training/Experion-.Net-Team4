import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Patient } from './Patient';
import { Observation } from './observation';
import {Medicine} from './medicine'

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  //Declaring The variables   
  patients : Patient[];
  medicines : Medicine[];
  observations : Observation[];
  

  constructor(private httpClient: HttpClient) { }

  //Get All Reports
  bindListPatients(){
    this.httpClient.get(environment.apiUrl+"/api/patient")
      .toPromise().then(response => 
      this.patients=response as Patient[]
    );
  }

  //Get All Medicines in a Prescription
  bindListPrescribedMedicines(medicineId :number){
    this.httpClient.get(environment.apiUrl+"/api/medicine/" + medicineId)
      .toPromise().then(response => 
      this.medicines=response as Medicine[]
    );
  }

  //Get Observations For all Patients
  bindListObservations(noteId :number){
    this.httpClient.get(environment.apiUrl+"/api/observations/" + noteId)
      .toPromise().then(response => 
      this.observations=response as Observation[]
    );    
  }  
}
