import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  //assign default page

  page: number = 0;
  filter: string;
  constructor(public userService: UserService, private toxterService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.userService.bindUser();
  }

  
  //populate form
  populateForm(user: User) {

    console.log(user);

    this.userService.formData=Object.assign({},user);

  }

  //delete an user-set inactive

  deleteform(user: User) {

    console.log(user);
    var value = confirm("Are you sure ?")
    if(value) {
      console.log("deleting a record!");
      user.IsActive=false;
      console.log(user);
      this.userService.updateUser(user).subscribe(
        (result) => {
          console.log(result);
          this.userService.bindUser();
        });
       this.toxterService.warning(user.UserName+"Deleted!",'ClinicManagementSystem');
          
  }
  }

  updateuser(userId: number) {
    console.log(userId);
    this.router.navigate(['user', userId])

  }


}
