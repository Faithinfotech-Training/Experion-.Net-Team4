import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/shared/doctor';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  constructor(public doctorService: DoctorService,public userService: UserService, private toastrService: ToastrService, private router: Router,
    private route: ActivatedRoute) { }
  doctorId: number;
  doctors: Doctor = new Doctor();
  ngOnInit(): void {

    //get users for binding
    this.userService.bindUser();

    //geting doctor id
    this.doctorId = this.route.snapshot.params['doctorId'];

  
    console.log("doctor: " + this.doctorId)
    if (this.doctorId != 0 || this.doctorId != null) {
      this.doctorService.getDoctorById(this.doctorId).subscribe(data => {
        console.log(data);
        var datepipe = new DatePipe("en-UK");
        let formatedDate: any = datepipe.transform(data.DoctorDateOfJoining, "yyyy-MM-dd");
        data.DoctorDateOfJoining = formatedDate;        
        this.doctorService.formData = Object.assign({}, data);
        //this.doctorService.formData = data;        
      });
    }


  }
  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId = this.doctorService.formData.DoctorId;
    //insert

    if (addId == 0 || addId == null) {
      form.value.IsActive=true;
      this.insertDoctor(form);

      //window.location.reload();
    }

    //update
    else {
      form.value.IsActive=true;
      this.updateDoctor(form);

    }
    this.router.navigate(['/doctors-list']);

  }

  //clear all content at initialisation

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert employee
  insertDoctor(form?: NgForm) {
    console.log("inserting doctor...")
    this.doctorService.insertDoctor(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        //this.resetform(form);
        this.toastrService.success('Doctor details Inserted!', 'succesful!');
      }
      , (error) => {
        this.toastrService.error('unexpected error occured!', 'Error!');
      }
    );

  }

  //populate form
  populateForm(doctor: Doctor) {
    console.log(doctor);
    var datePipe=new DatePipe("en-UK");
    let formatedDate:any=datePipe.transform(doctor.DoctorDateOfJoining,'dd-MM-yyyy');
    doctor.DoctorDateOfJoining = formatedDate;
    this.doctorService.formData=Object.assign({},doctor);
  }

  //update employee
  updateDoctor(form?: NgForm) {
    console.log("updating doctor...")
    this.doctorService.updateDoctor(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        this.resetform(form);
        this.toastrService.info('Doctor details updated!', 'successfull!');
        this.doctorService.bindDoctor();
      }, (error) => {
        this.toastrService.error('unexpected error occured!', 'Error!');
      }
    );
  }
  

}
