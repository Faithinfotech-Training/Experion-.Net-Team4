import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { Patient } from 'src/app/shared/Patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  //assign default page 
  page:number=1;
  filter:string;
  constructor(public service: FrontofficeService,private toastrService: ToastrService,private router:Router ) { }

  ngOnInit(): void {
    //get all patients through services
    this.service.bindListPatient();
  }

  //populate form by clicking the id
  populateForm(pat:Patient){
    console.log(pat);
    this.service.formData=Object.assign({},pat);
  }

  //delete a patient
  deletePatient(pat:Patient){
    var value=confirm("Are you sure to delete"+pat.PatientName+"?")
    if(value){
      console.log("deleting a record!");
      pat.IsActive=false;
      console.log(pat);
      this.service.updatePatient(pat).subscribe(
        (result)=>{
          console.log(result);
          this.service.bindListPatient();
        });
      this.toastrService.warning(pat.PatientName+"deleted!",'ClinicalManagementSystem');
    }
  }

  //update a patient
  updatePatient(patientId:number){
    console.log(patientId);
    this.router.navigate(['patient',patientId]);

  }

}
