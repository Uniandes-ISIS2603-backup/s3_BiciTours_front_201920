import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComentarioListComponent} from './comentario-list/comentario-list.component';
import { ComentarioDetailComponent} from './comentario-detail/comentario-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ComentarioListComponent
  },
  {
    path: ':id',
    component: ComentarioDetailComponent
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
export class ComentarioRoutingModule { }