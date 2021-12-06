import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { PaymentBill } from 'src/app/shared/paymentbill';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-paymentbill',
  templateUrl: './paymentbill.component.html',
  styleUrls: ['./paymentbill.component.scss']
})
export class PaymentbillComponent implements OnInit {

  total:number;
  billId:number;
  bill:PaymentBill = new PaymentBill();
  constructor(public service: FrontofficeService,private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.bill.DoctorConsulationFee=0;
    this.bill.LabTestFee=0;
    this.bill.NursingFee=0;
    this.total=this.Ontotal();

    //get patients for binding
    this.service.bindListPatient();

    //get billId from activatedroute
    this.billId = this.route.snapshot.params['billId'];
    if(this.billId!=0||this.billId!=null){
      //get bill
      this.service.getBill(this.billId).subscribe(
        (data) => {
          console.log(data);
  
          //date format
          var datePipe = new DatePipe("en-UK");
          let formatedDate: any = datePipe.transform(data.BillDate, 'yyyy-MM-dd')
          data.BillDate = formatedDate;
          this.service.billFormData = Object.assign({}, data);
          this.service.billFormData = data
        },
        error=>
        console.log(error)
      );
    }
  }
  
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.service.billFormData.BillId;
    if (addId == 0 || addId == null) {
      form.value.BillNumber = Date.now()  - 1638792741675;
      form.value.Amount=form.value.DoctorConsulationFee+form.value.LabTestFee+form.value.NursingFee;
      //insert
      form.value.IsActive = true;
      this.insertBillRecord(form);
    }
    else {
      form.value.Amount=form.value.DoctorConsulationFee+form.value.LabTestFee+form.value.NursingFee;
      //update
      console.log("updating record...");
    }
    this.router.navigate(['/paymentbilllist']);
  }

  //clear all contents at loading
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert
  insertBillRecord(form: NgForm) {
    console.log("inserting a record..");
    this.service.insertBill(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form)
        this.toastrService.success('Bill record has been inserted', 'ClinicalManagementSystem');
      }
    );
    // window.location.reload();
  }

  onPassValue1(passvalue1 : number ) {
    this.bill.DoctorConsulationFee=passvalue1;
    console.log(this.bill.DoctorConsulationFee);
    return this.bill.DoctorConsulationFee;  
     }

  onPassValue2(passvalue2 : number ) {
      this.bill.LabTestFee=passvalue2;
      console.log(this.bill.LabTestFee);
      return this.bill.LabTestFee;  
       }
       onPassValue3(passvalue3 : number ) {
        this.bill.NursingFee=passvalue3;
        console.log(this.bill.NursingFee);
        return this.bill.NursingFee;  
         }

  Ontotal(){
    
    return +this.bill.DoctorConsulationFee + +this.bill.NursingFee + +this.bill.LabTestFee;
  }


}
