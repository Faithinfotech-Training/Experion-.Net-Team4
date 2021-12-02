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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DoctorComponent,
    LabtechnitianComponent,
    FrontofficeComponent,
    DoctorsListComponent,
    DoctorsComponent,
    DoctormanagementComponent,
    StaffmanagementComponent,
    StaffComponent,
    StaffListComponent,
    RolemanagementComponent,
    UsermanagementComponent
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
  providers: [AuthService, AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
