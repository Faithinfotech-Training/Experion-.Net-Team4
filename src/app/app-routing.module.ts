import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './frontoffice/patient/patient.component';
import { PaymentbillComponent } from './frontoffice/paymentbill/paymentbill.component';
import { AppointmentComponent } from './frontoffice/appointment/appointment.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { PatientListComponent } from './frontoffice/patient-list/patient-list.component';
import { AppointmentListComponent } from './frontoffice/appointment-list/appointment-list.component';
import { PaymentbillListComponent } from './frontoffice/paymentbill-list/paymentbill-list.component';


const routes: Routes = [
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
