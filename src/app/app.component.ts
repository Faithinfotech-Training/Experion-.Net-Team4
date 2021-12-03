import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClinicManagementSystem';

  
  status=localStorage.getItem("Access_Role")

  

  /*
  //logout
logout(){
  this.authService.logout();
  this.router.navigateByUrl('login');
}*/
}
