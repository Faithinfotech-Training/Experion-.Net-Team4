import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/shared/consultation.service';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.scss']
})
export class AddnotesComponent implements OnInit {

  constructor(public labService: LabTechnitianService ,public  patientService : FrontofficeService, public consultService : ConsultationService ,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Bind The required Data in service
    this.patientService.bindListPatient();  
    this.labService.bindListDoctor(); 
  }

  onSubmit(form: NgForm){    
    console.log(form.value);
    //Setting The Values That do not need input
    form.value.ObservationDate = new Date().toISOString().slice(0, 10);   
    form.value.IsActive = true;
    console.log(form.value);
    //Insert 
    this.insertObservationRecord(form);    
  }

  //INSERT
  insertObservationRecord(form: NgForm){
    console.log("Inserting a Record...");
    this.consultService.insertObservation(form.value).subscribe(
      (result)=>{
        console.log(result);        
      }      
    );
    window.location.reload()    
  }

}
