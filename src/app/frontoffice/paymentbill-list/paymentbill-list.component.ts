import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';
import { PaymentBill } from 'src/app/shared/paymentbill';
import { DatePipe } from '@angular/common';
import { Patient } from 'src/app/shared/Patient';

@Component({
  selector: 'app-paymentbill-list',
  templateUrl: './paymentbill-list.component.html',
  styleUrls: ['./paymentbill-list.component.scss']
})
export class PaymentbillListComponent implements OnInit {

  page:number=1;
  filter:string;

  constructor(public service: FrontofficeService,private toastrService: ToastrService,private router:Router ) { }

  ngOnInit(): void {
    //get all bills through services
    this.service.bindListBill();
  }
  //populate form by clicking the id
  populateForm(b:PaymentBill){
    console.log(b);
    //date format
    var datePipe=new DatePipe("en-UK");
    let formatedDate:any=datePipe.transform(b.BillDate,'yyyy-MM-dd')
    b.BillDate=formatedDate;
    this.service.billFormData=Object.assign({},b);
  }

  //View bill of a patient
  viewBill(billId : number){
    console.log(billId);
    this.router.navigate(['viewbill',billId])
  }
}
