import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staff } from './staff';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  //create an instance of employee
  formData:Staff=new Staff();
  staffs:Staff[];
  constructor(private httpClient:HttpClient) { }



bindStaff(){
  this.httpClient.get(environment.apiUrl+"api/staff/GetAllStaff")
  .toPromise().then(response=>
    this.staffs=response as Staff[])

}

//insert staff
insertStaff(staff:Staff):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"api/staff/AddStaff",staff);

}

//update staff
updateStaff(staff:Staff):Observable<any>
{
  return this.httpClient.put(environment.apiUrl+"api/staff/UpdateStaff",staff);

}

//get staff by id
getStaffById(StaffId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/staff/"+StaffId);

}
}
