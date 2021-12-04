import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/shared/consultation.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  //assign default page number and filter
  page : number=1;
  filter:any;
  tempFilter:string;
  patientId:number;
  
  
  constructor(public labService: LabTechnitianService,public consultService: ConsultationService ,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Get all Prescriptions From Service
    this.labService.bindCmbPrescriptions();
    //get prescription Id from Activated Route
    this.patientId=this.route.snapshot.params['patientId'];    
    this.consultService.bindListObservations(this.patientId);
   

   
  }

  //View details Of that Prescription
  viewFullPrescription(pId : number){
    console.log(pId);
    this.router.navigate(['viewfullprescription',pId])
  }
}
