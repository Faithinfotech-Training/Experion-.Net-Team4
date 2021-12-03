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
  {path:'stafflist/staff',component:StaffListComponent},
  {path:'roles',component:RolesComponent},
  {path:'roleslist',component:RolesListComponent},
  {path:'rolesmanagement',component:RolemanagementComponent},
  {path:'role/:roleId',component:RolesComponent},
  {path:'roleslist/roles',component:RolesListComponent},
  {path:'users',component:UsersComponent},
  {path:'userslist',component:UsersListComponent},
  {path:'usersmanagement',component:UsermanagementComponent},
  {path:'user/:userId',component:UsersComponent},
  {path:'userslist/users',component:UsersListComponent},
  {path: 'labtechnitian', component: LabtechnitianComponent },
  {path: 'viewprescription', component: ViewprescriptionComponent },
  {path: 'viewtest/:pId', component: ViewtestComponent },
  {path: 'viewfullprescription/:pId', component: ViewfullprescriptionComponent },
  {path: 'viewreport', component: ViewreportsComponent },
  {path: 'addreport', component: AddreportComponent },
  {path: 'addtest/:rptId', component: AddtestsComponent },
  {path: 'reporttest/:rtId', component: ReporttestComponent },
  {path: 'doctors-list', component: DoctorsListComponent },
  {path: 'frontoffice', component: FrontofficeComponent },
  {path: 'patient', component: PatientComponent },
  {path: 'patientlist', component: PatientListComponent },
  {path: 'patient/:patientId', component: PatientComponent },
  {path: 'patientlist/patient', component: PatientComponent }, 
  {path: 'doctor', component: DoctorComponent },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
