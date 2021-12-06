import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from 'src/app/shared/staff.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/shared/staff';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(public staffService: StaffService,public userService: UserService, private toastrService: ToastrService, private router: Router,
  private route: ActivatedRoute) { }
  staffId: number;
  staffs: Staff = new Staff();
  ngOnInit(): void {

    //get users for binding
    this.userService.bindUser();

    //geting staff id
    this.staffId = this.route.snapshot.params['staffId'];

    //this.resetform();
    //this.staffService.bindStaff();

    console.log("staff: " + this.staffId)
    if (this.staffId != 0 || this.staffId != null) {
      this.staffService.getStaffById(this.staffId).subscribe(data => {
        console.log(data);

        var datepipe = new DatePipe("en-UK");
        let formatedDate: any = datepipe.transform(data.StaffDateOfJoining, "yyyy-MM-dd");
        data.StaffDateOfJoining = formatedDate;
        //this.staffService.formData = data;
        this.staffService.formData = Object.assign({}, data);
        
      });
    }


  }
  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId = this.staffService.formData.StaffId;
    //insert

    if (addId == 0 || addId == null) {
      form.value.IsActive=true;
      this.insertStaff(form);

      //window.location.reload();
    }
    //update
    else {
       form.value.IsActive=true;
      this.updateStaff(form);

    }
    this.router.navigate(['/stafflist']);

  }

  //clear all content at initialisation

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert employee
  insertStaff(form?: NgForm) {
    console.log("inserting staff...")
    this.staffService.insertStaff(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        //this.resetform(form);
        this.toastrService.success('Staff details Inserted!', 'succesful!');
      }
      , (error) => {
        this.toastrService.error('unexpected error occured!', 'Error!');
      }
    );

  }

  
  //update employee
  updateStaff(form?: NgForm) {
    console.log("updating staff...")
    this.staffService.updateStaff(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        this.resetform(form);
        this.toastrService.info('Staff details updated!', 'successfull!');
        this.staffService.bindStaff();
      }, (error) => {
        this.toastrService.error('unexpected error occured!', 'Error!');
      }
    );

  }

}
