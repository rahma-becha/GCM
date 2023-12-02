import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  {path:"",component:LoginComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./admin/admin.module').then(x=>x.AdminModule)
  }]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
