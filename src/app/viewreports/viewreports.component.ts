import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabTechnitianService } from '../shared/lab-technitian.service';

@Component({
  selector: 'app-viewreports',
  templateUrl: './viewreports.component.html',
  styleUrls: ['./viewreports.component.scss']
})
export class ViewreportsComponent implements OnInit {

  //assign default page number and filter
  page : number=1;
  filter:string;
  tempFilter:string;
  //tempDateFilter : Date;
  dateFilter : Date;
  flag:number;

  constructor(public labService: LabTechnitianService ,private router:Router,private route:ActivatedRoute) { }

  //lifecycle hook
  ngOnInit(): void {
    //Get all reports From Service
    this.labService.bindListReport();
    this.flag=this.route.snapshot.params['flag'];
  }

  //View Tests Of that report
  viewTest(rtId : number){
    console.log(rtId);
    this.router.navigate(['reporttest',rtId])
  }
}
