import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/shared/doctor';
import { DoctorService } from 'src/app/shared/doctor.service';


@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  //assign default page

  page: number = 0;
  filter: string;
  constructor(public doctorService: DoctorService, private toxterService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.bindDoctor();
  }

  
  //populate form
  populateForm(doctor: Doctor) {

    console.log(doctor);
    var datePipe=new DatePipe("en-UK");

    let formatedDate:any=datePipe.transform(doctor.DoctorDateOfJoining,'yyyy-MM-dd')

     doctor.DoctorDateOfJoining = formatedDate;

    this.doctorService.formData=Object.assign({},doctor);

  }

  //delete a doctor-set inactive

  deleteform(doctor: Doctor) {

    console.log(doctor);
    var value = confirm("Are you sure ?")
    if(value) {
      console.log("deleting a record!");
      doctor.IsActive=false;
      console.log(doctor);
      this.doctorService.updateDoctor(doctor).subscribe(
        (result) => {
          console.log(result);
          this.doctorService.bindDoctor();
        });
       this.toxterService.warning(doctor.DoctorName+"Deleted!",'ClinicManagementSystem');
          
  }
  }

  updatedoctor(doctorId: number) {
    console.log(doctorId);
    this.router.navigate(['doctor', doctorId])

  }


}
