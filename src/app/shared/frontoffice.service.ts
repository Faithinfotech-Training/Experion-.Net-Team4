import { Injectable } from '@angular/core';
import { Patient } from './Patient';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PaymentBill } from './paymentbill';

@Injectable({
  providedIn: 'root'
})
export class FrontofficeService {

  //create an instance
  formData:Patient=new Patient();
  billFormData:PaymentBill=new PaymentBill();
  patients:Patient[];
  bills:PaymentBill[];
  
  constructor(private httpClient: HttpClient) { }

  //INSERT patient
  insertPatient(model:Patient):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/Patient/AddPatient",model)
}
 
//edit patient details
updatePatient(model:Patient):Observable<any>{
  return this.httpClient.put(environment.apiUrl+"/api/patient/UpdatePatient",model)
}

//get all patients
bindListPatient(){
  this.httpClient.get(environment.apiUrl+"/api/patient")
 .toPromise().then(response=>
  this.patients = response as Patient[])
}

//get a particular patient 
getPatient(patientId:number):Observable<any>{

  return this.httpClient.get(environment.apiUrl+"/api/patient/"+patientId)

  }

  //get all payment bill details
  bindListBill(){
    this.httpClient.get(environment.apiUrl+"/api/PaymentBill/GetPaymentBill")
   .toPromise().then(response=>
    this.bills = response as PaymentBill[])
  }

  //edit payment bill details
  updateBill(model:PaymentBill):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/PaymentBill/UpdatePaymentBill",model)
}

  //add payment bill details
  insertBill(model:PaymentBill):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/PaymentBill/AddPaymentBill",model)
}

  //get a particular payment bill
  getBill(billId:number):Observable<any>{

    return this.httpClient.get(environment.apiUrl+"/api/PaymentBill/GetPaymentBillById?id="+billId)
  
    }

}
