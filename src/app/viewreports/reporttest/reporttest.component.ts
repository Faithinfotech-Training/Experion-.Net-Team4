import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';
import { Report } from 'src/app/shared/report';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporttest',
  templateUrl: './reporttest.component.html',
  styleUrls: ['./reporttest.component.scss']
})
export class ReporttestComponent implements OnInit {

  //Variable to recieve prescription ID
  rtId: number;
  report: any;
  patientId: number;

  constructor(public labService: LabTechnitianService, private router: Router, private route: ActivatedRoute) { }

  //lifecycle hook
  ngOnInit(): void {
    //get prescription Id from Activated Route
    this.rtId = this.route.snapshot.params['rtId'];

    //Get all Tests From Service
    this.labService.bindListTest(this.rtId);

    //Get Report Details
    this.labService.getReport(this.rtId).subscribe(
      data => {
        console.log(data);
        this.report = data;
      }
    );
  }

  //INSERT
  insertReportRecord(form?: NgForm) {
    console.log("Inserting a Record...");
    this.labService.insertReport(form.value).subscribe(
      (result) => {
        console.log(result);
        //this.hId = result;       
        //this.resetForm(form);        
      }
    );
    //window.location.reload()
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
      pdf.save('Report.pdf'); // Generated PDF
    });
  }
  
}





