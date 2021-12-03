
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Role} from 'src/app/shared/role';
import {RoleService} from 'src/app/shared/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(public roleService: RoleService, private toastrService: ToastrService, private router: Router,
    private route: ActivatedRoute) { }
  roleId: number;
  roles: Role = new Role();
  ngOnInit(): void {
    //geting role id
    this.roleId = this.route.snapshot.params['roleId'];


    console.log("role: " + this.roleId)
    if (this.roleId != 0 || this.roleId != null) {
      this.roleService.getRoleById(this.roleId).subscribe(data => {
        console.log(data);
        this.roleService.formData = Object.assign({}, data);
        //this.populateForm(data);
      });
    }


  }
  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId = this.roleService.formData.RoleId;
    //insert

    if (addId == 0 || addId == null) {
      this.insertRole(form);

      //window.location.reload();
    }

    //update
    else {
      this.updateRole(form);

    }
   this.router.navigate(['/roleslist']);
  }

  //clear all content at initialisation

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert 
  insertRole(form?: NgForm) {
    console.log("inserting role...")
    this.roleService.insertRole(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        //this.resetform(form);
        this.toastrService.success('Role details Inserted!', 'succesful!');
      }
      , (error) => {
        this.toastrService.error('unexpected error occured!', 'Error!');
      }
    );

  }

  //populate form
  populateForm(role: Role) {

    console.log(role);

    this.roleService.formData=Object.assign({},role);

  }
  //update 
  updateRole(form?: NgForm) {
    console.log("updating role...")
    this.roleService.updateRole(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        this.resetform(form);
        this.toastrService.info('Role details updated!', 'successfull!');
        this.roleService.bindRole();
      }, (error) => {
        this.toastrService.error('unexpected error occured!', 'Error!');
      }
    );

  }

}
