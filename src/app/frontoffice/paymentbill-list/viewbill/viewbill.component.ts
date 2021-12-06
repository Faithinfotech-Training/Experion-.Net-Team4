import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { FrontofficeService } from 'src/app/shared/frontoffice.service';

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrls: ['./viewbill.component.scss']
})
export class ViewbillComponent implements OnInit {

  //Variable to recieve bill ID
  billId: number;
  paymentbill: any;
  constructor(public service: FrontofficeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get bill Id from Activated Route
    this.billId = this.route.snapshot.params['billId'];

    //Get bill Details
    this.service.getBill(this.billId).subscribe(
      data => {
        console.log(data);
        this.paymentbill = data;
      }
    );
  }
  goBack() {
    window.history.go(-1);
  }

  convertToPDF() {
    var data = document.getElementById('pdf');
    html2canvas(data).then(canvas => {
      
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('PaymentBill.pdf'); // Generated PDF
    });
  }


}

