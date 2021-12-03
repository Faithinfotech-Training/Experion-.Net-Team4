import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtechnitianComponent } from './labtechnitian/labtechnitian.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { AuthService } from './shared/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import {AuthInterceptor} from './shared/auth.interceptor'
import { AuthGuard } from './shared/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorsComponent } from './admin/doctormanagement/doctors/doctors.component';
import { DoctorsListComponent } from './admin/doctormanagement/doctors-list/doctors-list.component';
import { DoctormanagementComponent } from './admin/doctormanagement/doctormanagement.component';
import { StaffmanagementComponent } from './admin/staffmanagement/staffmanagement.component';
import { StaffComponent } from './admin/staffmanagement/staff/staff.component';
import { StaffListComponent } from './admin/staffmanagement/staff-list/staff-list.component';
import { RolemanagementComponent } from './admin/rolemanagement/rolemanagement.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { LabTechnitianService } from './shared/lab-technitian.service';
import { ViewtestComponent } from './viewprescription/viewtest/viewtest.component';
import { ViewreportsComponent } from './viewreports/viewreports.component';
import { ReporttestComponent } from './viewreports/reporttest/reporttest.component';
import { AddreportComponent } from './labtechnitian/addreport/addreport.component';
import { AddtestsComponent } from './labtechnitian/addtests/addtests.component';
import { EditfrontofficeComponent } from './frontoffice/editfrontoffice/editfrontoffice.component';
import { FrontofficeService } from './shared/frontoffice.service';
import { PatientComponent } from './frontoffice/patient/patient.component';
import { PatientListComponent } from './frontoffice/patient-list/patient-list.component';
import { PaymentbillComponent } from './frontoffice/paymentbill/paymentbill.component';
import { PaymentbillListComponent } from './frontoffice/paymentbill-list/paymentbill-list.component';
import { AppointmentComponent } from './frontoffice/appointment/appointment.component';
import { AppointmentListComponent } from './frontoffice/appointment-list/appointment-list.component';
import { ViewpatientComponent } from './doctor/viewpatient/viewpatient.component';
import { ConsultationComponent } from './doctor/consultation/consultation.component';
import { ViewfullprescriptionComponent } from './viewprescription/viewfullprescription/viewfullprescription.component';
import { ViewNotesComponent } from './doctor/view-notes/view-notes.component';
import { AddprescriptionComponent } from './doctor/addprescription/addprescription.component';
import { AddprescribedtestComponent } from './doctor/addprescription/addprescribedtest/addprescribedtest.component';
import { AddmedicineComponent } from './doctor/addprescription/addmedicine/addmedicine.component';
import { AddnotesComponent } from './doctor/addnotes/addnotes.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { RolesComponent } from './admin/rolemanagement/roles/roles.component';
import { RolesListComponent } from './admin/rolemanagement/roles-list/roles-list.component';
import { UsersComponent } from './admin/usermanagement/users/users.component';
import { UsersListComponent } from './admin/usermanagement/users-list/users-list.component';
import { EventmanagementComponent } from './admin/eventmanagement/eventmanagement.component';
import { EventsComponent } from './admin/eventmanagement/events/events.component';
import { EventListComponent } from './admin/eventmanagement/event-list/event-list.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DoctorComponent,
    LabtechnitianComponent,
    FrontofficeComponent,
    ViewprescriptionComponent,
    ViewtestComponent,
    ViewreportsComponent,
    ReporttestComponent,
    AddreportComponent,
    AddtestsComponent,
    DoctorsListComponent,
    DoctorsComponent,
    DoctormanagementComponent,
    StaffmanagementComponent,
    StaffComponent,
    StaffListComponent,
    RolemanagementComponent,
    UsermanagementComponent,    
    EditfrontofficeComponent,
    PatientComponent,
    PatientListComponent,
    PaymentbillComponent,
    PaymentbillListComponent,
    AppointmentComponent,
    AppointmentListComponent,
    ViewpatientComponent,
    ConsultationComponent,
    ViewfullprescriptionComponent,
    ViewNotesComponent,
    AddprescriptionComponent,
    AddprescribedtestComponent,
    AddmedicineComponent,
    AddnotesComponent,
    HomeComponent,
    EventComponent,
    RolesComponent,
    RolesListComponent,
    UsersComponent,
    UsersListComponent,
    EventmanagementComponent,
    EventsComponent,
    EventListComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() , // ToastrModule added
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService, AuthGuard,LabTechnitianService, FrontofficeService,
    
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],  
    
  bootstrap: [AppComponent],
})
export class AppModule { }
