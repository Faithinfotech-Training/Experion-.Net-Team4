import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';

@Component({
  selector: 'app-addprescribedtest',
  templateUrl: './addprescribedtest.component.html',
  styleUrls: ['./addprescribedtest.component.scss']
})
export class AddprescribedtestComponent implements OnInit {

  //Declare Variables
  presId : number;
  isSubmitted = false;

  constructor(public labService: LabTechnitianService , public doctorService : DoctorService ,public  patientService : FrontofficeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //getting doctor List
    this.labService.bindListDoctor();
  }
  
  //clear all contents at Initialization  
  resetForm(form?: NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

  /*
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
  */
}
