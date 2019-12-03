import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioService } from './usuario.service';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  imports: [
    CommonModule, UsuarioRoutingModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [UsuarioListComponent, UsuarioDetailComponent, UsuarioCreateComponent, UsuarioLoginComponent], 
  exports: [UsuarioListComponent, UsuarioCreateComponent, UsuarioLoginComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }