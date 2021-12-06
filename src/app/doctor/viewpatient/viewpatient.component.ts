import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/shared/Patient';
import {ConsultationService} from 'src/app/shared/consultation.service'

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.scss']
})
export class ViewpatientComponent implements OnInit {

  
  //assign default page number and filter
  page : number=1;
  filter:string;
  tempFilter:string;  
  dateFilter : Date;  

  constructor(public consultService: ConsultationService ,private router:Router,private route:ActivatedRoute) { }

  //lifecycle hook
  ngOnInit(): void {
    //Get all Patients
    this.consultService.bindListPatients();
  }

  //consultation For the Patient
  consult(patientId : number , patientName:string){
    console.log(patientId);
    this.router.navigate(['consultation',patientId,patientName])
  }

  


}
