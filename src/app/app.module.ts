import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtechnitianComponent } from './labtechnitian/labtechnitian.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { LabTechnitianService } from './shared/lab-technitian.service';
import { AuthService } from './shared/auth.service';
import { ViewtestComponent } from './viewprescription/viewtest/viewtest.component';
import { ViewreportsComponent } from './viewreports/viewreports.component';
import { ReporttestComponent } from './viewreports/reporttest/reporttest.component';
import { AddreportComponent } from './labtechnitian/addreport/addreport.component';
import { AddtestsComponent } from './labtechnitian/addtests/addtests.component';
import {AuthInterceptor} from './shared/auth.interceptor'
import { AuthGuard } from './shared/auth.guard';
import { DoctorsComponent } from './admin/doctormanagement/doctors/doctors.component';
import { DoctormanagementComponent } from './admin/doctormanagement/doctormanagement.component';
import { StaffmanagementComponent } from './admin/staffmanagement/staffmanagement.component';
import { DoctorsListComponent } from './admin/doctormanagement/doctors-list/doctors-list.component';
import { EditfrontofficeComponent } from './frontoffice/editfrontoffice/editfrontoffice.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';



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
    DoctorsListComponent,    
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
    HomeComponent,
    EventComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() ,
  ],  
  providers: [AuthService, AuthGuard, LabTechnitianService, FrontofficeService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
