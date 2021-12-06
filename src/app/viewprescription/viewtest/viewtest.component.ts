import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.scss']
})
export class ViewtestComponent implements OnInit {

  //Variable to recieve prescription ID
  pId:number;
  pNum:number;
  patientId:number;
  doctorId:number;

  constructor(public labService: LabTechnitianService ,private router:Router , private route:ActivatedRoute) { }

  //lifecycle hook
  ngOnInit(): void {    
    //get prescription Id from Activated Route
    this.pId=this.route.snapshot.params['pId'];
    this.pNum = this.route.snapshot.params['pNum'];
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.patientId = this.route.snapshot.params['patientId'];

    //Get all Tests From Service
    this.labService.bindListPrescribedTests(this.pId);
  }

  //View Tests Of that Prescription
  generateReport(){
    console.log();
    this.router.navigate(['addreport',this.patientId , this.doctorId])
  }

  goBack(){
    window.history.go(-1);
  }
}
