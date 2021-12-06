import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/Patient';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patientId:number;
  patient: Patient= new Patient();  
  constructor(public service: FrontofficeService,private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //get patient id from activated routes
    this.patientId = this.route.snapshot.params['patientId'];
    
    if(this.patientId!=0||this.patientId!=null){
    //get patient
    this.service.getPatient(this.patientId).subscribe(
      (data) => {
        console.log(data);
        this.service.formData = Object.assign({}, data);
        this.service.formData = data
      },
      error=>
      console.log(error)
    );
  }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    let addId = this.service.formData.PatientId;
    if (addId == 0 || addId == null) {
      form.value.IsActive = true;
      //insert
      this.insertPatientRecord(form);
    }
    else {
      //update
      console.log("updating record...")
      form.value.IsActive = true;
      this.updatePatientRecord(form)
    }
    this.router.navigate(['/patientlist']);
  }

  //clear all contents at loading
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert
  insertPatientRecord(form: NgForm) {
    console.log("inserting a record..");
    this.service.insertPatient(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form)
        this.toastrService.success('Patient record has been inserted', 'ClinicManagementSystemv2021');
      }

    );
     window.location.reload();
  }

  //update
  updatePatientRecord(form?: NgForm) {
    console.log("updating a record..");
    this.service.updatePatient(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form)
        this.toastrService.success('patient record has been updated', 'ClinicManagementSystemv2021');
        this.service.bindListPatient();
      }

    );

    
  }

}
