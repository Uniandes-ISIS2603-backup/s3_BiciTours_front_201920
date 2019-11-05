import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SegurosListaComponent } from './seguros-lista/seguros-lista.component';


const rutas: Routes =
  [
    {
      path: '',
      component: SegurosListaComponent
    }
  ];


@NgModule({
  declarations: [],
  imports:
  [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports:
   [
    RouterModule
  ]
})
export class SegurosRoutingModule { }
