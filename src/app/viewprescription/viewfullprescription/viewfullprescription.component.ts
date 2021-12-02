import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/shared/consultation.service';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';


@Component({
  selector: 'app-viewfullprescription',
  templateUrl: './viewfullprescription.component.html',
  styleUrls: ['./viewfullprescription.component.scss']
})
export class ViewfullprescriptionComponent implements OnInit {

  //Variable to recieve prescription ID
  pId:number;

  constructor(public labService: LabTechnitianService,public consultService:ConsultationService ,private router:Router , private route:ActivatedRoute) { }

  //lifecycle hook
  ngOnInit(): void {    
    //get prescription Id from Activated Route
    this.pId=this.route.snapshot.params['pId'];

    //Get all Tests From Service
    this.labService.bindListPrescribedTests(this.pId);
    this.consultService.bindListPrescribedMedicines(this.pId);
  }
}
