import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioService } from './usuario.service';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { RouterModule } from '@angular/router';
import { BlogListUsuarioComponent } from './blog-list-usuario/blog-list-usuario.component'
import { ListInsurancesComponent } from './list-insurances/list-insurances.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  imports: [
    CommonModule, UsuarioRoutingModule, ReactiveFormsModule, FormsModule, RouterModule
  ],
  declarations: [UsuarioListComponent, UsuarioDetailComponent, UsuarioCreateComponent, UsuarioLoginComponent,
    ListInsurancesComponent, BlogListUsuarioComponent, NavComponent, ], 
  exports: [UsuarioListComponent, UsuarioCreateComponent, UsuarioLoginComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }