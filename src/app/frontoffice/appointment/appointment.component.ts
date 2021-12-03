import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/shared/appointment';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  appointmentId:number;
  appointment:Appointment = new Appointment();

  constructor(public service: FrontofficeService,public labService: LabTechnitianService,private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get patients for binding
    this.service.bindListPatient();

    //get doctors for binding
    this.labService.bindListDoctor();

     //get appointmentId from activatedroute
     this.appointmentId = this.route.snapshot.params['appointmentId'];
     if(this.appointmentId!=0||this.appointmentId!=null){
       //get appointment
       this.service.getAppointment(this.appointmentId).subscribe(
         (data) => {
           console.log(data);
   
           //date format
           var datePipe = new DatePipe("en-UK");
           let formatedDate: any = datePipe.transform(data.AppointmentDate, 'yyyy-MM-dd')
           data.AppointmentDate = formatedDate;
           this.service.aFormData = Object.assign({}, data);
           this.service.aFormData = data
         },
         error=>
         console.log(error)
       );
     }
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.service.aFormData.AppointmentId;
    if (addId == 0 || addId == null) {
      //insert
      this.insertAppointmentRecord(form);
    }
    else {
      //update
      console.log("updating record...")
      this.updateAppointmentRecord(form)

    }
  }
  //clear all contents at loading
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert
  insertAppointmentRecord(form: NgForm) {
    console.log("inserting a record..");
    this.service.insertAppointment(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form)
        this.toastrService.success('Appointment record has been inserted', 'ClinicalManagementSystem');
      }

    );
    // window.location.reload();
  }
  //update
  updateAppointmentRecord(form?: NgForm) {
    console.log("updating a record..");
    this.service.updateAppointment(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form)
        this.toastrService.success('Appointment record has been updated', 'ClinicalManagementSystem');
        this.service.bindListAppointment();
      }

    );

    //window.location.reload();
  }
}
