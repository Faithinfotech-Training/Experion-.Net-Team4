import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
