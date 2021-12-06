import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabTechnitianService } from '../shared/lab-technitian.service';

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.scss']
})
export class ViewprescriptionComponent implements OnInit {

  //assign default page number and filter
  page : number=1;
  filter:string;
  tempFilter:string;
  pId:number;

  constructor(public labService: LabTechnitianService, private router:Router) { }

  //lifecycle hook
  ngOnInit(): void {
    //Get all Prescriptions From Service
    this.labService.bindCmbPrescriptions();
  }

  //View Tests Of that Prescription
  viewTest(pId : number , pNum:number , patientId:number, doctorId:number){
    console.log(pId,pNum);
    this.router.navigate(['viewtest',pId,pNum,patientId,doctorId]);
  }

  goBack(){
    window.history.go(-1);
  }
}
