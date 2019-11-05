import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const rutas:Routes =
[
  {
    path: '',
    component: HomeComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports:
  [
    RouterModule
  ]
})
export class HomeRoutingModule { }
