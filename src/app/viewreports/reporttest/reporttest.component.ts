import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';
import { Report } from 'src/app/shared/report';

@Component({
  selector: 'app-reporttest',
  templateUrl: './reporttest.component.html',
  styleUrls: ['./reporttest.component.scss']
})
export class ReporttestComponent implements OnInit {

  //Variable to recieve prescription ID
  rtId:number;
  report : any;
  patientId : number;

  constructor(public labService: LabTechnitianService ,private router:Router , private route:ActivatedRoute) { }

   //lifecycle hook
   ngOnInit(): void {    
    //get prescription Id from Activated Route
    this.rtId=this.route.snapshot.params['rtId'];

    //Get all Tests From Service
    this.labService.bindListTest(this.rtId);
    
    //Get Report Details
    this.labService.getReport(this.rtId).subscribe(
      data => {
        console.log(data);  
        this.report=data;
      }
    );
  }

  //INSERT
  insertReportRecord(form?: NgForm){
    console.log("Inserting a Record...");
    this.labService.insertReport(form.value).subscribe(
      (result)=>{
        console.log(result); 
        //this.hId = result;       
        //this.resetForm(form);        
      }      
    );
    //window.location.reload()
  }
}
  




