import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { ListRVComponent } from './list-rv/list-rv.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"patients",component:ListPatientsComponent},
  {path:"rendez-vous",component:ListRVComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
