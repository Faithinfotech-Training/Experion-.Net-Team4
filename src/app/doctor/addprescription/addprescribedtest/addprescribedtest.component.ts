import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/shared/consultation.service';
import { DoctorService } from 'src/app/shared/doctor.service';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';
import { PrescribedTest } from 'src/app/shared/prescribedtest';

@Component({
  selector: 'app-addprescribedtest',
  templateUrl: './addprescribedtest.component.html',
  styleUrls: ['./addprescribedtest.component.scss']
})
export class AddprescribedtestComponent implements OnInit {

 //Declare Variables
 prescribedTest : PrescribedTest = new PrescribedTest();
 prescriptionId : number;
 isSubmitted = false;

 constructor(public consultService: ConsultationService , 
  private router:Router,
  private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Get value from activated Route
    this.prescriptionId=this.route.snapshot.params['prescriptionId'];
  }
  
  resetForm(form?: NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

  onSubmit(form: NgForm){
    this.isSubmitted = true;
    console.log(form.value);
    //Setting The Values That do not need input
    form.value.PrescriptionId = this.prescriptionId;
    form.value.IsActive = true;    
    console.log(form.value);
    //Insert 
    this.insertPrescribedTestRecord(form);
  }

  //INSERT
  insertPrescribedTestRecord(form: NgForm){
    console.log("Inserting a Record...");
    this.consultService.insertTest(form.value).subscribe(
      (result)=>{
        console.log(result);        
        this.resetForm(form);        
      }      
    );
    //window.location.reload()    
  }

  goBack() {
    window.history.go(-3);
  }
  
}
