import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent} from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent} from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent} from './usuario-create/usuario-create.component';
import { UsuarioLoginComponent} from './usuario-login/usuario-login.component';
import { BlogListUsuarioComponent } from './blog-list-usuario/blog-list-usuario.component'
import { ListInsurancesComponent } from './list-insurances/list-insurances.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListComponent
  },
  {
    path: 'registrarse',
    component: UsuarioCreateComponent
  },
  {
    path: 'login',
    component: UsuarioLoginComponent
  },
  {
    path: ':id',
    component: NavComponent,
    children: [
      {
        path: 'insurances',
        component: ListInsurancesComponent,

      },
      {
        path: 'perfil',
        component: UsuarioDetailComponent,

      },      
      {
        path: 'blogs',
        component: BlogListUsuarioComponent
      },
    ],
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