import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourListComponent} from './tour-list/tour-list.component';
import { TourDetailComponent} from './tour-detail/tour-detail.component';
import { TourCreateComponent} from './tour-create/tour-create.component';
import { FotoCreateComponent} from '../foto/foto-create/foto-create.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';



const routes: Routes = [
  {
    path: '',
    component: TourListComponent
  },
  {
    path: 'create',
    component:TourCreateComponent
  },
  {
    path: 'create/fotos',
    component:FotoCreateComponent
  },
  {
    path: ':id',
    component: TourDetailComponent
  },
  {
    path: 'recomendacion',
    component: RecomendacionComponent
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
export class TourRoutingModule { }