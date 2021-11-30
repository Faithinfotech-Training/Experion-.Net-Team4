import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './frontoffice/patient/patient.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { PatientListComponent } from './frontoffice/patient-list/patient-list.component';

const routes: Routes = [
  {path:'frontoffice',component:FrontofficeComponent},
  {path:'patient',component:PatientComponent},
  {path:'patientlist',component:PatientListComponent},
  {path:'patient/:patientId',component:PatientComponent},
  {path:'patientlist/patient',component:PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
