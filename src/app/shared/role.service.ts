import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  //create an instance of employee
  formData:Role=new Role();
  roles:Role[];
  constructor(private httpClient:HttpClient) { }



bindRole(){
  this.httpClient.get(environment.apiUrl+"api/role/GetAllRoles")
  .toPromise().then(response=>
    this.roles=response as Role[])

}

//insert role
insertRole(role:Role):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"api/role/AddRole",role);

}

//update role
updateRole(role:Role):Observable<any>
{
  return this.httpClient.put(environment.apiUrl+"api/role/UpdateRole",role);

}

//get role by id
getRoleById(RoleId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/role/"+RoleId);

}
}
