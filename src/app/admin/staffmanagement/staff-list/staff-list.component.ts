import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Staff } from 'src/app/shared/staff';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  //assign default page

  page: number = 0;
  filter: string;
  constructor(public staffService: StaffService, private toxterService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.staffService.bindStaff();
  }

  
  //populate form
  populateForm(staff: Staff) {

    console.log(staff);
    var datePipe=new DatePipe("en-UK");

    let formatedDate:any=datePipe.transform(staff.StaffDateOfJoining,'yyyy-MM-dd')

     staff.StaffDateOfJoining = formatedDate;

    this.staffService.formData=Object.assign({},staff);

  }

  //delete a staff-set status false/ inactive

  deleteform(staff: Staff) {

    console.log(staff);
    var value = confirm("Are you sure ?")
    if(value) {
      console.log("deleting a record!");
      staff.IsActive=false;
      console.log(staff);
      this.staffService.updateStaff(staff).subscribe(
        (result) => {
          console.log(result);
          this.staffService.bindStaff();
        });
      // this.toxterService.warning(staff.StaffName+"Deleted!",'ClinicManagementSystem');
          
  }
  }

  updatestaff(staffId: number) {
    console.log(staffId);
    this.router.navigate(['staff', staffId])

  }

}
