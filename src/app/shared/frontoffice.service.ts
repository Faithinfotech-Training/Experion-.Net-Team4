import { Injectable } from '@angular/core';
import { Patient } from './Patient';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PaymentBill } from './paymentbill';
import { Appointment } from './appointment';
import { Events } from './event';

@Injectable({
  providedIn: 'root'
})
export class FrontofficeService {

  //create an instance
  formData:Patient=new Patient();
  billFormData:PaymentBill=new PaymentBill();
  aFormData:Appointment=new Appointment();
  eFormData:Events=new Events();
  patients:Patient[];
  bills:PaymentBill[];
  appointments:Appointment[];
  events:Events[];
  
  constructor(private httpClient: HttpClient) { }

  //get events for binding
  bindListEvent(){
    this.httpClient.get(environment.apiUrl+"api/event")
   .toPromise().then(response=>
    this.events = response as Events[])
  }

  //get a particular event
  getEvent(eventId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"api/event/"+eventId)    
    }

  
  //add events
  insertEvent(model:Events):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/Event/AddEvent",model)
}

  //edit events
  updateEvent(model:Events):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"api/Event/UpdateEvent",model)
  }

  //delete event
  deleteEvent(id:number):Observable<any>{
   return this.httpClient.delete(environment.apiUrl+"api/event/DeleteEvent?id="+id)
   }
  

  //INSERT patient
  insertPatient(model:Patient):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/Patient/AddPatient",model)
}
 
//edit patient details
updatePatient(model:Patient):Observable<any>{
  return this.httpClient.put(environment.apiUrl+"api/patient/UpdatePatient",model)
}

//get all patients
bindListPatient(){
  this.httpClient.get(environment.apiUrl+"api/patient")
 .toPromise().then(response=>
  this.patients = response as Patient[])
}

//get a particular patient 
getPatient(patientId:number):Observable<any>{

  return this.httpClient.get(environment.apiUrl+"api/patient/"+patientId)

  }

  //get all payment bill details
  bindListBill(){
    this.httpClient.get(environment.apiUrl+"api/PaymentBill/GetPaymentBill")
   .toPromise().then(response=>
    this.bills = response as PaymentBill[])
  }

  //edit payment bill details
  updateBill(model:PaymentBill):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"api/PaymentBill/UpdatePaymentBill",model)
}

  //add payment bill details
  insertBill(model:PaymentBill):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"api/PaymentBill/AddPaymentBill",model)
}

  //get a particular payment bill
  getBill(billId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"api/PaymentBill/GetPaymentBillById?id="+billId)  
    }

    //insert appointment
    insertAppointment(model:Appointment):Observable<any>{
      return this.httpClient.post(environment.apiUrl+"api/Appointment/AddAppointment",model)
  }
    //get all appointments
    bindListAppointment(){
      this.httpClient.get(environment.apiUrl+"api/Appointment/GetAppointment")
     .toPromise().then(response=>
      this.appointments = response as Appointment[])
    }
  
    //get a particular appointment
    getAppointment(appointmentId:number):Observable<any>{
      return this.httpClient.get(environment.apiUrl+"api/Appointment/GetAppointmentById?id="+appointmentId)    
      }
  
    //edit or update appointment
    updateAppointment(model:Appointment):Observable<any>{
      return this.httpClient.put(environment.apiUrl+"api/Appointment/UpdateAppointment",model)
  }

}
