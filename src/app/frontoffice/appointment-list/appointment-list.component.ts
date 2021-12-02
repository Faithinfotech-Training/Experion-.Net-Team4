import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/shared/appointment';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  //assigndefault page
  page:number=1;
  filter:string;

  constructor(public service: FrontofficeService,private toastrService: ToastrService,private router:Router) { }

  ngOnInit(): void {
    //get all appointments through services
    this.service.bindListAppointment();
  }

  //populate form by clicking the td
  populateForm(apt:Appointment){
    console.log(apt);
    //date format
    var datePipe=new DatePipe("en-UK");
    let formatedDate:any=datePipe.transform(apt.AppointmentDate,'yyyy-MM-dd');   
    apt.AppointmentDate=formatedDate;
    this.service.aFormData=Object.assign({},apt);
  }
  deleteAppointment(apt:Appointment){
    var value=confirm("Are you sure to delete?")
    if(value){
      console.log("deleting a record!");
      apt.IsActive=false;
      console.log(apt);
      this.service.updateAppointment(apt).subscribe(
        (result)=>{
          console.log(result);
          this.service.bindListAppointment();
        });
      this.toastrService.warning("Appointment deleted!",'EmpApp');
    }
  }

  //update an employee
  updateAppointment(appointmentId:number){
    console.log(appointmentId);
    this.router.navigate(['appointment',appointmentId]);
}

}

