import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListInsurancesComponent } from './list-insurances/list-insurances.component';
import { NavComponent } from './nav/nav.component';

const rutas: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'insurances',
        component: ListInsurancesComponent
      }
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
