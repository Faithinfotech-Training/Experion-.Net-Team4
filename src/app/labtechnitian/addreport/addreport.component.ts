import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';
import { Report } from 'src/app/shared/report';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.component.html',
  styleUrls: ['./addreport.component.scss']
})
export class AddreportComponent implements OnInit {

  //Declare Variables
  report : Report = new Report();
  rptId : number;
  isSubmitted = false;

  constructor(public labService: LabTechnitianService , public doctorService : DoctorService ,public  patientService : FrontofficeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Bind The required Data in service
    this.labService.bindListStaff();
    this.patientService.bindListPatient();  
    this.labService.bindListDoctor();  
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
    form.value.ReportDate = new Date().toISOString().slice(0, 10);
    form.value.ReportNumber = Date.now()  - 1638196230000;    
    form.value.IsActive = true;
    console.log(form.value);
    //Insert 
    this.insertReportRecord(form);    
  }

  //INSERT
  insertReportRecord(form: NgForm){
    console.log("Inserting a Record...");
    this.labService.insertReport(form.value).subscribe(
      (result)=>{
        console.log(result); 
        this.rptId = result;       
        //this.resetForm(form);        
      }      
    );
    //window.location.reload()    
  }

  //Add Tests Of that report
  addTest(){
    console.log(this.rptId);
    this.router.navigate(['addtest',this.rptId])
  }

  
}
