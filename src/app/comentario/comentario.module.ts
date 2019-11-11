import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
//import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';
import { ComentarioService } from './comentario.service';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';
import { ComentarioRoutingModule } from './comentario-routing.module';
@NgModule({
  imports: [ CommonModule, ComentarioRoutingModule],
  declarations: [ComentarioListComponent, ComentarioDetailComponent],
  exports: [ComentarioListComponent, ComentarioDetailComponent],
  providers: [ComentarioService]
})
export class ComentarioModule { }