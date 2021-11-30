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
  populateform(doctor: Doctor) {

    console.log(doctor);

    var datepipe = new DatePipe("en-UK");
    let formatedDate: any = datepipe.transform(doctor.DoctorDateOfJoining, "yyyy-MM-dd");
    doctor.DoctorDateOfJoining = formatedDate;
    this.doctorService.formData = doctor;
    this.doctorService.formData = Object.assign({}, doctor);

  }

  deleteform(doctor: Doctor) {

    console.log(doctor);

    if (confirm("Are you sure ?")) {
      this.doctorService.deleteDoctor(doctor.DoctorId).subscribe(
        (result) => {
          console.log("result" + result);

          this.toxterService.error('Doctor details Deleted!', 'Deleted!');
          this.doctorService.bindDoctor();
        }, (error) => {
          this.toxterService.error('unexpected error occured!', 'Error!');
        }
      );
    }


  }

  updatedoctor(doctorId: number) {
    console.log(doctorId);
    this.router.navigate(['doctor', doctorId])

  }


}
