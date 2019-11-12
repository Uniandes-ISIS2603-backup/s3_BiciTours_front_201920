import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent} from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent} from './usuario-detail/usuario-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListComponent
  },
  {
    path: ':id',
    component: UsuarioDetailComponent
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