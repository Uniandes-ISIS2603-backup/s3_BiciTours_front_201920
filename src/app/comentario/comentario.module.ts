import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioService } from './comentario.service';

@NgModule({
  imports: [ CommonModule],
  declarations: [ComentarioListComponent],
  exports: [ComentarioListComponent],
  providers: [ComentarioService]
})
export class ComentarioModule { }