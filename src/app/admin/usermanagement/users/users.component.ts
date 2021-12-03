import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {User} from 'src/app/shared/user';
import { Role } from 'src/app/shared/role';
import {UserService} from 'src/app/shared/user.service';
import { RoleService } from 'src/app/shared/role.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UserService, public roleService:RoleService,private toastrService: ToastrService, private router: Router,
    private route: ActivatedRoute) { }
  userId: number;
  users: User = new User();
  ngOnInit(): void {

    //get patients for binding
    this.roleService.bindRole();


    //geting user id
    this.userId = this.route.snapshot.params['userId'];


    console.log("user: " + this.userId)
    if (this.userId != 0 || this.userId != null) {
      this.userService.getUserById(this.userId).subscribe(data => {
        console.log(data);
        this.userService.formData = Object.assign({}, data);
        //this.populateForm(data);
      });
    }


  }
  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId = this.userService.formData.RoleId;
    //insert

    if (addId == 0 || addId == null) {
      this.insertUser(form);

      //window.location.reload();
    }

    //update
    else {
      this.updateUser(form);

    }
   this.router.navigate(['/userslist']);
  }

  //clear all content at initialisation

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert user
  insertUser(form?: NgForm) {
    console.log("inserting user...")
    this.userService.insertUser(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        //this.resetform(form);
        this.toastrService.success('User details Inserted!', 'succesfull!');
      }
      , (error) => {
        this.toastrService.error('unexpected error occured!', 'Error!');
      }
    );

  }

  //populate form
  populateForm(user: User) {

    console.log(user);

    this.userService.formData=Object.assign({},user);

  }
  //update 
  updateUser(form?: NgForm) {
    console.log("updating user...")
    this.userService.updateUser(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        this.resetform(form);
        this.toastrService.info('User details updated!', 'successfull!');
        this.userService.bindUser();
      }, (error) => {
        this.toastrService.error('unexpected error occured!', 'Error!');
      }
    );

  }

}
