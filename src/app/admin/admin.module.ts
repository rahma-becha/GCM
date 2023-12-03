import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { ListRVComponent } from './list-rv/list-rv.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { DossierMedicaleComponent } from './dossier-medicale/dossier-medicale.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { EditRDVComponent } from './edit-rdv/edit-rdv.component';
import { PatientService } from 'src/services/patient.service';
import { RendezvousService } from 'src/services/rendrezvous.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WeekComponent } from './week/week.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    ListPatientsComponent,
    ListRVComponent,
    AddPatientComponent,
    AddRDVComponent,
    DossierMedicaleComponent,
    EditPatientComponent,
    EditRDVComponent,
    WeekComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutingModule),
    NgApexchartsModule,

  ],
  providers:[
    HttpClient,
    PatientService,
    RendezvousService
  ]
})
export class AdminModule { }
