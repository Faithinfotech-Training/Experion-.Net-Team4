import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './shared/auth.guard';
import { DoctorsComponent } from './admin/doctormanagement/doctors/doctors.component';
import { DoctorsListComponent } from './admin/doctormanagement/doctors-list/doctors-list.component';
import { DoctormanagementComponent } from './admin/doctormanagement/doctormanagement.component';
import { StaffmanagementComponent } from './admin/staffmanagement/staffmanagement.component';
import { StaffComponent } from './admin/staffmanagement/staff/staff.component';
import { StaffListComponent } from './admin/staffmanagement/staff-list/staff-list.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path: 'admin',component: AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path: 'doctorslist',component:DoctorsListComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'doctormanagement',component:DoctormanagementComponent},
  {path:'doctor/:doctorId',component:DoctorsComponent},
  {path:'doctorslist/doctors',component:DoctorsListComponent},
  {path: 'stafflist',component:StaffListComponent},
  {path:'staff',component:StaffComponent},
  {path:'staffmanagement',component:StaffmanagementComponent},
  {path:'staff/:staffId',component:StaffComponent},
  {path:'stafflist/staff',component:StaffListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
