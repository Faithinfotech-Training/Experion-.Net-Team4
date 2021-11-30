import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabTechnitianService } from 'src/app/shared/lab-technitian.service';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.scss']
})
export class ViewtestComponent implements OnInit {

  //Variable to recieve prescription ID
  pId:number;

  constructor(public labService: LabTechnitianService ,private router:Router , private route:ActivatedRoute) { }

  //lifecycle hook
  ngOnInit(): void {    
    //get prescription Id from Activated Route
    this.pId=this.route.snapshot.params['pId'];

    //Get all Tests From Service
    this.labService.bindListPrescribedTests(this.pId);
  }

}
