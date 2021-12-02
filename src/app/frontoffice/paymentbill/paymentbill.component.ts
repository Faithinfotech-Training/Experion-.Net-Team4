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

  billId:number;
  bill:PaymentBill = new PaymentBill();
  constructor(public service: FrontofficeService,private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

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

      //insert
      this.insertBillRecord(form);

    }
    else {
      //update
      console.log("updating record...")
    }

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


}
