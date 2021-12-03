import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/shared/role';
import { RoleService } from 'src/app/shared/role.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {

  //assign default page

  page: number = 0;
  filter: string;
  constructor(public roleService: RoleService, private toxterService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.roleService.bindRole();
  }

  
  //populate form
  populateForm(role: Role) {

    console.log(role);

    this.roleService.formData=Object.assign({},role);

  }

  //delete a role-set inactive

  deleteform(role: Role) {

    console.log(role);
    var value = confirm("Are you sure ?")
    if(value) {
      console.log("deleting a record!");
      role.IsActive=false;
      console.log(role);
      this.roleService.updateRole(role).subscribe(
        (result) => {
          console.log(result);
          this.roleService.bindRole();
        });
       this.toxterService.warning(role.RoleName+"Deleted!",'ClinicManagementSystem');
          
  }
  }

  updaterole(roleId: number) {
    console.log(roleId);
    this.router.navigate(['role', roleId])

  }

}
