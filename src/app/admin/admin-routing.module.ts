import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListInsurancesComponent } from './list-insurances/list-insurances.component';
import { BlogListAdminComponent } from './blog-list-admin/blog-list-admin.component';
import { NavComponent } from './nav/nav.component';
import { CreateInsuranceComponent } from './create-insurance/create-insurance.component';

const rutas: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'insurances',
        component: ListInsurancesComponent,

      },
      {
        path: 'insurances/create-insurances',
        component: CreateInsuranceComponent,

      },
      {
        path: 'blogs',
        component: BlogListAdminComponent
      },
    ],
  }


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
