import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Users} from'../shared/users';
import{AuthService} from '../shared/auth.service';
import{JwtResponse}from '../shared/jwt-response'
import { DoctorService } from '../shared/doctor.service';
import { StaffService } from '../shared/staff.service';
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
    emp :any;
    empId:any;
  
    jwtResponse:any=new JwtResponse();
    constructor(private formbuilder: FormBuilder, public doctorService : DoctorService, public staffService : StaffService,
      private router: Router,public authService:AuthService
    ) { }
  
    ngOnInit(): void {
      this.loginForm = this.formbuilder.group(
        {
          UserName: ['', [Validators.required]],
          UserPassword: ['', [Validators.required]],
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
                  localStorage.setItem("username",data.uName);
                  sessionStorage.setItem("username",data.uName);
                  localStorage.setItem("Access_Role",data.rId.toString());                    
                  //based on role redirect out application  
                  this.router.navigateByUrl("/admin");
  
                }
                
                  else if(this.jwtResponse.rId===2)
                  {
                    this.staffService.getStaffByUserId(data.userId).subscribe(employee => {
                      console.log(employee); 
                      this.empId = employee.StaffId;                          
                      this.emp = employee;                     
                    });
                  //logged as Front Office
                  console.log("Front Office Module")
                  //adding details to localstorage and sessionstorage
                  localStorage.setItem("username",data.uName);
                  sessionStorage.setItem("username",data.uName);
                  localStorage.setItem("Access_Role",data.rId.toString());
                  localStorage.setItem('staffId',this.emp.StaffId);
                  localStorage.setItem('staffName',this.emp.StaffName);
                  //based on role redirect out application
                  this.router.navigateByUrl("/patientlist");
                }

                else if(this.jwtResponse.rId===3)
                  {
                    this.staffService.getStaffByUserId(data.userId).subscribe(employee => {
                      console.log(employee); 
                      this.empId = employee.StaffId;                          
                      this.emp = employee;                     
                    });
                  //logged as lab Technitian
                  console.log("LabTechnician Module")
                  //adding details to localstorage and sessionstorage
                  localStorage.setItem("username",data.uName);
                  sessionStorage.setItem("username",data.uName);
                  localStorage.setItem("Access_Role",data.rId.toString());
                  localStorage.setItem('staffId',this.emp.StaffId);
                  localStorage.setItem('staffName',this.emp.StaffName);
                  //based on role redirect out application
                  this.router.navigateByUrl("/labtechnitian");
                }
               
                else if(this.jwtResponse.rId===4)
                {
                  this.doctorService.getDoctorByUserId(data.userId).subscribe(doctor => {
                    console.log(doctor); 
                    this.empId = doctor.DoctorId;                          
                    this.emp = doctor;                     
                  });
                  //logged as doctor
                  console.log("Doctor");
                  //adding details to localstorage and sessionstorage
                  localStorage.setItem("username",data.uName);
                  sessionStorage.setItem("username",data.uName);
                  localStorage.setItem("Access_Role",data.rId.toString());
                  localStorage.setItem('doctorId',this.emp.DoctorId);
                  localStorage.setItem('doctorName',this.emp.DoctorName);
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
