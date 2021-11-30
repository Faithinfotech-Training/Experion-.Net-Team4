import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './shared/auth.guard';
import { DoctorsComponent } from './admin/doctormanagement/doctors/doctors.component';
import { DoctorsListComponent } from './admin/doctormanagement/doctors-list/doctors-list.component';
import { DoctormanagementComponent } from './admin/doctormanagement/doctormanagement.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path: 'admin',component: AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path: 'doctors-list',component:DoctorsListComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'doctormanagement',component:DoctormanagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
