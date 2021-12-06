import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //variable declaration
  username:string;

  constructor(public router : Router) { }

  ngOnInit(): void {  
    this.username = localStorage.getItem('username')  
  }

  //logout
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('home')
  }

}
