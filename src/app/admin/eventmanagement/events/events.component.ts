import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Events } from 'src/app/shared/event';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventId:number;
  event:Events = new Events();

  constructor(public service: FrontofficeService,private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get eventId from activatedroute
    this.eventId = this.route.snapshot.params['eventId'];
    if(this.eventId!=0||this.eventId!=null){
      //get events
      this.service.getEvent(this.eventId).subscribe(
        (data) => {
          console.log(data);
          this.service.eFormData = Object.assign({}, data);
          this.service.eFormData = data
        },
        error=>
        console.log(error)
      );
    }
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.service.eFormData.EventId;
    if (addId == 0 || addId == null) {
      //insert
      this.insertEventRecord(form);
    }
    else {
      //update
      console.log("updating record...")
      this.updateEventRecord(form)

    }
  }
  //clear all contents at loading
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert
  insertEventRecord(form: NgForm) {
    console.log("inserting a record..");
    this.service.insertEvent(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form)
        this.toastrService.success('Event record has been inserted', 'ClinicalManagementSystem');
      }

    );
    // window.location.reload();
  }
  //update
  updateEventRecord(form?: NgForm) {
    console.log("updating a record..");
    this.service.updateEvent(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form)
        this.toastrService.success('Event record has been updated', 'ClinicalManagementSystem');
        this.service.bindListEvent();
      }

    );

    //window.location.reload();
  }

}


