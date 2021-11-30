import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LabtechnitianComponent } from './labtechnitian/labtechnitian.component';
import { LoginComponent } from './login/login.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { ViewreportsComponent } from './viewreports/viewreports.component';
import { ViewtestComponent } from './viewprescription/viewtest/viewtest.component';
import { ReporttestComponent } from './viewreports/reporttest/reporttest.component';
import {AddreportComponent} from './labtechnitian/addreport/addreport.component';
import {AddtestsComponent} from './labtechnitian/addtests/addtests.component';

const routes: Routes = [
  { path: '', redirectTo:"/login", pathMatch:'full'},
  { path: 'labtechnitian', component: LabtechnitianComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewprescription', component: ViewprescriptionComponent },
  { path: 'viewtest/:pId', component: ViewtestComponent }, 
  { path: 'viewreport', component: ViewreportsComponent },
  { path: 'addreport', component: AddreportComponent },
  { path: 'addtest/:rptId', component: AddtestsComponent },
  { path: 'reporttest/:rtId', component: ReporttestComponent },   
=======
<<<<<<< HEAD
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
=======
import { PatientComponent } from './frontoffice/patient/patient.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { PatientListComponent } from './frontoffice/patient-list/patient-list.component';

const routes: Routes = [
  {path:'frontoffice',component:FrontofficeComponent},
  {path:'patient',component:PatientComponent},
  {path:'patientlist',component:PatientListComponent},
  {path:'patient/:patientId',component:PatientComponent},
  {path:'patientlist/patient',component:PatientComponent}
>>>>>>> 302135af8f7f148727f7400d8ce44c48357fbf46
>>>>>>> 2beb17b788e837f2884a66ea87a43233fbc5e415
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
