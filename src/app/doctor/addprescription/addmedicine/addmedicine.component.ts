import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/shared/consultation.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';
import { Medicine } from 'src/app/shared/medicine';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.scss']
})
export class AddmedicineComponent implements OnInit {
  
  //Declare Variables
  medicine : Medicine = new Medicine();
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
    this.insertMedicineRecord(form);
  }

  //INSERT
  insertMedicineRecord(form: NgForm){
    console.log("Inserting a Record...");
    this.consultService.insertMedicine(form.value).subscribe(
      (result)=>{
        console.log(result);        
        this.resetForm(form);        
      }      
    );
    //window.location.reload()    
  }

  //Add Tests Of that report
  addPrescribedTest(){
    console.log(this.prescriptionId);
    this.router.navigate(['addprescribedtest',this.prescriptionId])
  }

}
