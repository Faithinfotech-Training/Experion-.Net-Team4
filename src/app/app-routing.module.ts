import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabtechnitianComponent } from './labtechnitian/labtechnitian.component';
import { LoginComponent } from './login/login.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { ViewreportsComponent } from './viewreports/viewreports.component';
import { ViewtestComponent } from './viewprescription/viewtest/viewtest.component';
import { ReporttestComponent } from './viewreports/reporttest/reporttest.component';
import { AddreportComponent } from './labtechnitian/addreport/addreport.component';
import { AddtestsComponent } from './labtechnitian/addtests/addtests.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './shared/auth.guard';
import { DoctorsComponent } from './admin/doctormanagement/doctors/doctors.component';
import { DoctorsListComponent } from './admin/doctormanagement/doctors-list/doctors-list.component';
import { DoctormanagementComponent } from './admin/doctormanagement/doctormanagement.component';
import { PatientComponent } from './frontoffice/patient/patient.component';
import { PaymentbillComponent } from './frontoffice/paymentbill/paymentbill.component';
import { AppointmentComponent } from './frontoffice/appointment/appointment.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { PatientListComponent } from './frontoffice/patient-list/patient-list.component';
import { AppointmentListComponent } from './frontoffice/appointment-list/appointment-list.component';
import { PaymentbillListComponent } from './frontoffice/paymentbill-list/paymentbill-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ViewfullprescriptionComponent } from './viewprescription/viewfullprescription/viewfullprescription.component';
import { ConsultationComponent } from './doctor/consultation/consultation.component';
  
const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'labtechnitian', component: LabtechnitianComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewprescription', component: ViewprescriptionComponent },
  { path: 'viewtest/:pId', component: ViewtestComponent },
  { path: 'viewfullprescription/:pId', component: ViewfullprescriptionComponent },
  { path: 'viewreport', component: ViewreportsComponent },
  { path: 'addreport', component: AddreportComponent },
  { path: 'addtest/:rptId', component: AddtestsComponent },
  { path: 'reporttest/:rtId', component: ReporttestComponent },  
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'doctors-list', component: DoctorsListComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctormanagement', component: DoctormanagementComponent } ,
  { path: 'frontoffice', component: FrontofficeComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'patientlist', component: PatientListComponent },
  { path: 'patient/:patientId', component: PatientComponent },
  { path: 'patientlist/patient', component: PatientComponent }, 
  { path: 'doctor', component: DoctorComponent },
  { path: 'consultation/:patientId', component: ConsultationComponent },
  {path:'frontoffice',component:FrontofficeComponent},
  {path:'patient',component:PatientComponent},
  {path:'paymentbill',component:PaymentbillComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'patientlist',component:PatientListComponent},
  {path:'paymentbilllist',component:PaymentbillListComponent},
  {path:'appointmentlist',component:AppointmentListComponent},
  {path:'patient/:patientId',component:PatientComponent},
  {path:'patientlist/patient',component:PatientComponent},
  {path:'paymentbilllist/paymentbill',component:PaymentbillComponent},
  {path:'appointmentlist/appointment',component:AppointmentComponent},
  {path:'appointment/:appointmentId',component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
