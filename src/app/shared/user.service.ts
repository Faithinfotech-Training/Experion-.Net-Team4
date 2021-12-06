import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  //create an instance of employee
  formData:User=new User();
  users:User[];
  constructor(private httpClient:HttpClient) { }


bindUser(){
  this.httpClient.get(environment.apiUrl+"api/userviewmodel/getuserdetails")
  .toPromise().then(response=>
    this.users=response as User[])

}

//insert user
insertUser(user:User):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"api/user/AddUser",user);

}

//update user
updateUser(user:User):Observable<any>
{
  return this.httpClient.put(environment.apiUrl+"api/user/UpdateUser",user);

}


//get user by id
getUserById(UserId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/user/"+UserId);

}
}
