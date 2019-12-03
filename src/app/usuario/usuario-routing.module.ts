import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { LoginComponent } from './../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,

      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }