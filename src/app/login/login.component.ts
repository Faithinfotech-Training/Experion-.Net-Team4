import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Users} from'../shared/users';
import{AuthService} from '../shared/auth.service';
import{JwtResponse}from '../shared/jwt-response'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    
    isSubmitted = false;
    loginUser: Users = new Users;
    error = '';
  
    jwtResponse:any=new JwtResponse();
    constructor(private formbuilder: FormBuilder,
      private router: Router,public authService:AuthService
    ) { }
  
    ngOnInit(): void {
      this.loginForm = this.formbuilder.group(
        {
          UserName: ['', [Validators.required]],
          Password: ['', [Validators.required]],
        }
      );
    }
  
  
    //get form controls  details
  
    get formControls() {
      return this.loginForm.controls;
    }
  
  
    //login verify credentials
  
    LoginCredentials() {
  
      //console.log(this.loginForm.value);
      this.isSubmitted = true;
  
      // invalid
  
      if (this.loginForm.invalid)
        return;
  
  
  
      //valid
      if (this.loginForm.valid) {
  
        //calling method from Authservice 
        //calling token generation api
  
        this.authService.getTokenByPassword(this.loginForm.value).subscribe
        (data=>
          {
            console.log(data);
            this.jwtResponse=data;
            localStorage.setItem("token",data.token);// adding token to the local storage
            sessionStorage.setItem("token",data.token);//adding token to the session storage
            //check the role
            if(this.jwtResponse.rId===1)
                {
                  //logged as admin
                  console.log("Admin Module");
  
                  //adding details to localstorage and sessionstorage
                  localStorage.setItem("username",data.UserName);
                  sessionStorage.setItem("username",data.UserName);
                  localStorage.setItem("Access_Role",data.rId.toString());
  
                //based on role redirect out application
  
                  this.router.navigateByUrl("/admin");
  
                }
                
                  else if(this.jwtResponse.rId===2)
                  {
                  //logged as manager
                  console.log("Front Office Module")
                  //adding details to localstorage and sessionstorage
                  localStorage.setItem("username",data.UserName);
                  sessionStorage.setItem("username",data.UserName);
                  localStorage.setItem("Access_Role",data.rId.toString());
                  //based on role redirect out application
                  this.router.navigateByUrl("/frontoffice");
                }

                else if(this.jwtResponse.rId===3)
                  {
                  //logged as manager
                  console.log("LabTechnician Module")
                  //adding details to localstorage and sessionstorage
                  localStorage.setItem("username",data.UserName);
                  sessionStorage.setItem("username",data.UserName);
                  localStorage.setItem("Access_Role",data.rId.toString());
                  //based on role redirect out application
                  this.router.navigateByUrl("/labtechnician");
                }
               
                else if(this.jwtResponse.RoleId===4)
                {
                  //logged as customer
                  console.log("Doctor");
                  //adding details to localstorage and sessionstorage
                  localStorage.setItem("username",data.UserName);
                  sessionStorage.setItem("username",data.UserName);
                  localStorage.setItem("Access_Role",data.rId.toString());
                  //based on role redirect out application
                  this.router.navigateByUrl("/doctor");
                }
                else{
  
                  this.error="Sorry .. invalid authorization"
                }
              },
              
          error=>
          {
            this.error="invalid"
          }
          )
      }
    }

}
