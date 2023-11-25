import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListRVComponent } from './list-rv/list-rv.component';
import { PatientService } from 'src/services/patient.service';
import { RendezvousService } from 'src/services/rendrezvous.service';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { DossierMedicaleComponent } from './dossier-medicale/dossier-medicale.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { EditRDVComponent } from './edit-rdv/edit-rdv.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    DashboardComponent, 
    ListPatientsComponent,
    ListRVComponent,
    AddPatientComponent,
    AddRDVComponent,
    DossierMedicaleComponent,
    EditPatientComponent,
    EditRDVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    PatientService,
    RendezvousService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
