import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent} from './blog-list/blog-list.component';
import { BlogDetailComponent} from './blog-detail/blog-detail.component';
import { BlogUpdateComponent} from './blog-update/blog-update.component';
import { BlogCreateComponent} from './blog-create/blog-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: BlogCreateComponent
    //canActivate: [NgxPermissionsGuard],
    //data: {permissions: {only: ['ADMIN','USER']}}
  },
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: ':id',
    component: BlogDetailComponent
  },
  {
    path: ':id/edit',
    component: BlogUpdateComponent
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
export class BlogRoutingModule { }