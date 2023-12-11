import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AuthentificationService } from 'src/services/authentification.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SideBarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    CanvasJSAngularChartsModule
  ],
  providers: [
    HttpClient,
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
