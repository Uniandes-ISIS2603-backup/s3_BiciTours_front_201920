import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCreateComponent } from './usuario-create.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsuarioCreateComponent
  },
];

@NgModule({
  declarations: [UsuarioCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsuarioCreateModule { }
