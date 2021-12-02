import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtechnitianComponent } from './labtechnitian/labtechnitian.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';

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
import { PaymentbillListComponent } from './frontoffice/paymentbill-list/paymentbill-list.component';
import { AppointmentComponent } from './frontoffice/appointment/appointment.component';
import { AppointmentListComponent } from './frontoffice/appointment-list/appointment-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DoctorComponent,
    LabtechnitianComponent,
    FrontofficeComponent,
    
    EditfrontofficeComponent,
    PatientComponent,
    PatientListComponent,
    PaymentbillComponent,
    PaymentbillListComponent,
    AppointmentComponent,
    AppointmentListComponent
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() ,// ToastrModule added
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  providers: [FrontofficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
