import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/shared/consultation.service';
import { DoctorService } from 'src/app/shared/doctor.service';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';

@Component({
  selector: 'app-addprescription',
  templateUrl: './addprescription.component.html',
  styleUrls: ['./addprescription.component.scss']
})
export class AddprescriptionComponent implements OnInit {

  //Declare Variables  
  prescriptionId : number;
  isSubmitted = false;
  patientId : number;
  doctorId : number;
  doctorName:string;
  patientName:String;

  constructor(public labService: LabTechnitianService , public doctorService : DoctorService, public consultService : ConsultationService ,public  patientService : FrontofficeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.patientService.bindListPatient();  
    this.labService.bindListDoctor();  
    this.patientId=this.route.snapshot.params['patientId']; 
    this.patientName=this.route.snapshot.params['patientName'];
    this.doctorId = parseInt(localStorage.getItem("doctorId"));
    this.doctorName = localStorage.getItem("doctorName");
  }

  onSubmit(form: NgForm){
    this.isSubmitted = true;
    console.log(form.value);
    //Setting The Values That do not need input
    form.value.PrescriptionDate = new Date().toISOString().slice(0, 10);
    form.value.PrescriptionNumber = Date.now()  - 1638438447750;    
    form.value.IsActive = true;
    form.value.PatientId = this.patientId;
    form.value.DoctorId = this.doctorId;
    console.log(form.value);
    //Insert 
    this.insertPrescriptionRecord(form);    
  }

  //INSERT
  insertPrescriptionRecord(form: NgForm){
    console.log("Inserting a Record...");
    this.consultService.insertPrescription(form.value).subscribe(
      (result)=>{
        console.log(result); 
        this.prescriptionId = result;               
      }      
    );
   
  }

  //Add Tests Of that report
  addMedicine(){
    console.log(this.prescriptionId);
    this.router.navigate(['addmedicine',this.prescriptionId])
  }

}
