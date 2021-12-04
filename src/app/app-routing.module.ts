import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './shared/auth.guard';
import { DoctorsComponent } from './admin/doctormanagement/doctors/doctors.component';
import { DoctorsListComponent } from './admin/doctormanagement/doctors-list/doctors-list.component';
import { DoctormanagementComponent } from './admin/doctormanagement/doctormanagement.component';
import { StaffmanagementComponent } from './admin/staffmanagement/staffmanagement.component';
import { StaffComponent } from './admin/staffmanagement/staff/staff.component';
import { StaffListComponent } from './admin/staffmanagement/staff-list/staff-list.component';
import { RolemanagementComponent } from './admin/rolemanagement/rolemanagement.component';
import { RolesComponent } from './admin/rolemanagement/roles/roles.component';
import { RolesListComponent } from './admin/rolemanagement/roles-list/roles-list.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { UsersComponent } from './admin/usermanagement/users/users.component';
import { LabtechnitianComponent } from './labtechnitian/labtechnitian.component';
import { UsersListComponent } from './admin/usermanagement/users-list/users-list.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { ViewreportsComponent } from './viewreports/viewreports.component';
import { ViewtestComponent } from './viewprescription/viewtest/viewtest.component';
import { ReporttestComponent } from './viewreports/reporttest/reporttest.component';
import { AddreportComponent } from './labtechnitian/addreport/addreport.component';
import { AddtestsComponent } from './labtechnitian/addtests/addtests.component';
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
import { AddprescriptionComponent } from './doctor/addprescription/addprescription.component';
import { AddnotesComponent } from './doctor/addnotes/addnotes.component';
import { AddprescribedtestComponent } from './doctor/addprescription/addprescribedtest/addprescribedtest.component';
import { AddmedicineComponent } from './doctor/addprescription/addmedicine/addmedicine.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './admin/eventmanagement/events/events.component';
import { EventListComponent } from './admin/eventmanagement/event-list/event-list.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
  
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path: 'admin',component: AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path: 'doctorslist',component:DoctorsListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'doctors',component:DoctorsComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'doctormanagement',component:DoctormanagementComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'doctor/:doctorId',component:DoctorsComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'doctorslist/doctors',component:DoctorsListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path: 'stafflist',component:StaffListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'staff',component:StaffComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'staffmanagement',component:StaffmanagementComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'staff/:staffId',component:StaffComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'stafflist/staff',component:StaffListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'roles',component:RolesComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'roleslist',component:RolesListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'rolesmanagement',component:RolemanagementComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'role/:roleId',component:RolesComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'roleslist/roles',component:RolesListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'userslist',component:UsersListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'usersmanagement',component:UsermanagementComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'user/:userId',component:UsersComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'userslist/users',component:UsersListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path: 'labtechnitian', component: LabtechnitianComponent,canActivate:[AuthGuard],data:{role:'3'} },
  {path: 'viewprescription', component: ViewprescriptionComponent },
  {path: 'viewtest/:pId', component: ViewtestComponent },
  {path: 'viewfullprescription/:pId', component: ViewfullprescriptionComponent},
  {path: 'viewreport', component: ViewreportsComponent },
  {path: 'addreport', component: AddreportComponent },
  {path: 'addtest/:rptId', component: AddtestsComponent },
  {path: 'reporttest/:rtId', component: ReporttestComponent },
  {path: 'doctors-list', component: DoctorsListComponent },
  {path: 'frontoffice', component: FrontofficeComponent },
  {path: 'patient', component: PatientComponent },
  {path: 'patientlist', component: PatientListComponent,canActivate:[AuthGuard],data:{role:'2'} },
  {path: 'patient/:patientId', component: PatientComponent },
  {path: 'patientlist/patient', component: PatientComponent }, 
  {path: 'doctor', component: DoctorComponent,canActivate:[AuthGuard],data:{role:'4'} },
  {path: 'events', component: EventsComponent },
  {path: 'events/:eventId', component: EventsComponent },
  {path: 'eventlist/events', component: EventsComponent }, 
  {path:'eventlist',component:EventListComponent},
  {path: 'consultation/:patientId', component: ConsultationComponent },
  {path:'paymentbill',component:PaymentbillComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'paymentbilllist',component:PaymentbillListComponent},
  {path:'appointmentlist',component:AppointmentListComponent},
  {path:'paymentbilllist/paymentbill',component:PaymentbillComponent},
  {path:'appointmentlist/appointment',component:AppointmentComponent},
  {path:'appointment/:appointmentId',component:AppointmentComponent} ,
  {path:'addprescription',component:AddprescriptionComponent},
  {path:'addnotes',component:AddnotesComponent},
  {path:'addprescribedtest/:prescriptionId',component:AddprescribedtestComponent},
  {path:'addmedicine/:prescriptionId',component:AddmedicineComponent},  
  {path:'home',component:HomeComponent},
  {path:'event',component:EventComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
