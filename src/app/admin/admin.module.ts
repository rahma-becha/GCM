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

import { WeekComponent } from './week/week.component';

import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { RdvComponent } from './rdv/rdv.component';
import { AlergieService } from 'src/services/alergie.service';
import { MedicamentService } from 'src/services/medicament.service';
import { AnalyseService } from 'src/services/analyse.service';
import { DossierMedicalService } from 'src/services/dossier-medicale.service';

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
    RdvComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutingModule),
   
   
    
    CanvasJSAngularChartsModule

  ],
  providers:[
    HttpClient,
    PatientService,
    RendezvousService,
    AlergieService,
    MedicamentService,
    AnalyseService,
    DossierMedicalService
  ]
})
export class AdminModule { }
