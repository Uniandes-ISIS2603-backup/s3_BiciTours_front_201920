import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioService } from './comentario.service';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';

@NgModule({
  imports: [ CommonModule],
  declarations: [ComentarioListComponent, ComentarioDetailComponent],
  exports: [ComentarioListComponent],
  providers: [ComentarioService]
})
export class ComentarioModule { }