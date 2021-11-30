import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtechnitianComponent } from './labtechnitian/labtechnitian.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
<<<<<<< HEAD
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
=======
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
import { DoctormanagementComponent } from './admin/doctormanagement/doctormanagement.component';
import { StaffmanagementComponent } from './admin/staffmanagement/staffmanagement.component';
import { DoctorsListComponent } from './admin/doctormanagement/doctors-list/doctors-list.component';

import { EditfrontofficeComponent } from './frontoffice/editfrontoffice/editfrontoffice.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import {  Ng2SearchPipeModule} from 'ng2-search-filter';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontofficeService } from './shared/frontoffice.service';
import { PatientComponent } from './frontoffice/patient/patient.component';
import { PatientListComponent } from './frontoffice/patient-list/patient-list.component';
import { PaymentbillComponent } from './frontoffice/paymentbill/paymentbill.component';


>>>>>>> 2beb17b788e837f2884a66ea87a43233fbc5e415

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DoctorComponent,
    LabtechnitianComponent,
    FrontofficeComponent,
<<<<<<< HEAD
    ViewprescriptionComponent,
    ViewtestComponent,
    ViewreportsComponent,
    ReporttestComponent,
    AddreportComponent,
    AddtestsComponent
=======
<<<<<<< HEAD
    DoctorsListComponent,
    DoctorsComponent,
    DoctormanagementComponent,
    StaffmanagementComponent,
    DoctorsListComponent
=======
    
    EditfrontofficeComponent,
    PatientComponent,
    PatientListComponent,
    PaymentbillComponent
   
 
>>>>>>> 302135af8f7f148727f7400d8ce44c48357fbf46
>>>>>>> 2beb17b788e837f2884a66ea87a43233fbc5e415
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [LabTechnitianService, AuthService],
=======
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() , // ToastrModule added
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService, AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
=======
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() ,// ToastrModule added
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  providers: [FrontofficeService],
>>>>>>> 2beb17b788e837f2884a66ea87a43233fbc5e415
  bootstrap: [AppComponent]
>>>>>>> 302135af8f7f148727f7400d8ce44c48357fbf46
})
export class AppModule { }
