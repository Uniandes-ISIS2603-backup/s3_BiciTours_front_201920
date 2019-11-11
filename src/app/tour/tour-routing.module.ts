import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TourListComponent} from './tour-list/tour-list.component';
import { TourDetailComponent} from './tour-detail/tour-detail.component';
import { TourCreateComponent} from './tour-create/tour-create.component';


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
    path: ':id', 
    component: TourDetailComponent 
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