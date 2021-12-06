import { Injectable } from '@angular/core';
import {Prescription } from './prescription';
import {PrescribedTest} from './prescribedtest';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Report } from './report';
import {Test } from './test';
import {Email} from './email';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';
import {TestList} from './testlist';

@Injectable({
  providedIn: 'root'
})
export class LabTechnitianService {

  //Declaring The variables
  reportFormData: Report = new Report();
  testFormData : Test = new Test();
  emailFormData : Email = new Email()
  prescriptions : Prescription[];
  prescribedTests : PrescribedTest[];
  reports : Report[];
  tests : Test[];
  staffs : object[];
  doctors : object[];
  test : TestList[];

  constructor(private httpClient: HttpClient) { }
  
  


  //GET Prescription for Binding
  bindCmbPrescriptions(){
    this.httpClient.get(environment.apiUrl+"api/prescription")
      .toPromise().then(response => 
      this.prescriptions=response as Prescription[]
    );
  }

  //Get All Tests For in a Prescription
  bindListPrescribedTests(prescriptionId :number){
    this.httpClient.get(environment.apiUrl+"api/PrescribedTest/" + prescriptionId)
      .toPromise().then(response => 
      this.prescribedTests=response as PrescribedTest[]
    );
  }

  //Get All Reports
  bindListReport(){
    this.httpClient.get(environment.apiUrl+"api/labreport")
      .toPromise().then(response => 
      this.reports=response as Report[]
    );
  }

   //Get All Doctors
   bindListDoctor(){
    this.httpClient.get(environment.apiUrl+"api/doctor/getalldoctors")
      .toPromise().then(response => 
      this.doctors=response as Object[]
    );
  }

  //Get All Staff
  bindListStaff(){
    this.httpClient.get(environment.apiUrl+"api/staff/getallstaff")
      .toPromise().then(response => 
      this.staffs=response as object[]
    );
  }

  //Get All Test  in a Report
  bindListTest(reportId :number){
    this.httpClient.get(environment.apiUrl+"api/test/GetTestByReportId/" + reportId)
      .toPromise().then(response => 
      this.tests=response as Test[]
    );
  }

  //GET a particular Report By ID
  getReport(reportId: number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+"api/labreport/" + reportId);
  
  } 
  
   //INSERT
   insertReport(report :Report): Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/labreport",report);
  }

   //INSERT
   insertTest(test : Test): Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/test",test);
  }

  //get tests for binding

  bindListTests(){
    this.httpClient.get(environment.apiUrl+"api/testlist")
   .toPromise().then(response=>
    this.test = response as TestList[])

  }
}
