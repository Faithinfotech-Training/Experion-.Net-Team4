import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  //create an instance of employee
  formData:Doctor=new Doctor();
  doctors:Doctor[];
  constructor(private httpClient:HttpClient) { }



bindDoctor(){
  this.httpClient.get(environment.apiUrl+"api/doctor/GetAllDoctors")
  .toPromise().then(response=>
    this.doctors=response as Doctor[])

}

//insert employee
insertDoctor(doctor:Doctor):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"api/doctor/AddDoctor",doctor);

}

//update employee
updateDoctor(doctor:Doctor):Observable<any>
{
  return this.httpClient.put(environment.apiUrl+"api/doctor/UpdateDoctor",doctor);

}

//get employee by id
getDoctorById(DoctorId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/doctor/GetDoctorById?id="+DoctorId);

}

//delete employee
deleteDoctor(DoctorId:number):Observable<any>
{
  return this.httpClient.delete(environment.apiUrl+"api/doctor/DeleteDoctor?id="+DoctorId);

}


}
