import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';
import { Test } from 'src/app/shared/test';

@Component({
  selector: 'app-addtests',
  templateUrl: './addtests.component.html',
  styleUrls: ['./addtests.component.scss']
})
export class AddtestsComponent implements OnInit {

  //Declaring Variables
  //Declare Variables
  test : Test = new Test();
  rptId : number;
  isSubmitted = false;

 


  constructor(public labService: LabTechnitianService , 
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Get value from activated Route
    this.rptId=this.route.snapshot.params['rptId'];
    this.labService.bindListStaff();
  }

  //clear all contents at Initialization  
  resetForm(form?: NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

  onSubmit(form: NgForm){
    this.isSubmitted = true;
    console.log(form.value);
    //Setting The Values That do not need input
    form.value.ReportId = this.rptId;
    form.value.IsActive = true;    
    console.log(form.value);
    //Insert 
    this.insertTestRecord(form);
  }

  //INSERT
  insertTestRecord(form: NgForm){
    console.log("Inserting a Record...");
    this.labService.insertTest(form.value).subscribe(
      (result)=>{
        console.log(result);        
        this.resetForm(form);        
      }      
    );
    //window.location.reload()    
  }

}
