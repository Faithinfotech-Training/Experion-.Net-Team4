import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FrontofficeService } from '../shared/frontoffice.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(public service: FrontofficeService,private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get events for binding
    this.service.bindListEvent();
  }

}
