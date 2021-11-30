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
    AddtestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [LabTechnitianService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
