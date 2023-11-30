import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { ListRVComponent } from './list-rv/list-rv.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { DossierMedicaleComponent } from './dossier-medicale/dossier-medicale.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { EditRDVComponent } from './edit-rdv/edit-rdv.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"patients",component:ListPatientsComponent},
  {path:"patients/add",component:AddPatientComponent},
  {path:"rendez-vous",component:ListRVComponent},
  {path:"rendez-vous/add",component:AddRDVComponent},
  {path:"patients/dossiermedicale/:id",component:DossierMedicaleComponent},
  {path:"patients/edit/:id",component:EditPatientComponent},
  {path:"rendez-vous/edit/:id",component:EditRDVComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
