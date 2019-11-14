import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioService } from './usuario.service';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  imports: [
    CommonModule, UsuarioRoutingModule, ReactiveFormsModule
  ],
  declarations: [UsuarioListComponent, UsuarioDetailComponent, UsuarioCreateComponent], 
  exports: [UsuarioListComponent, UsuarioCreateComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }