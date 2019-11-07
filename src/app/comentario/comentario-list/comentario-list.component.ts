import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comentario } from '../comentario';
import { ComentarioDetailComponent } from '../comentario-detail/comentario-detail.component';
import { ComentarioDetail } from '../comentario-detail';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'list-comentario',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

  constructor(private comentarioService: ComentarioService, private router: Router) { }

  comentario_id: number;
  selectedComentario: ComentarioDetail;

  /**
  * The list of editorials which belong to the BookStore
  */ 
  comentarios: Comentario[];

  /**
     * Asks the service to update the list of editorials
     */
    getComentarios(): void {
        this.comentarioService.getComentarios().subscribe(comentarios => this.comentarios = comentarios);
    }

    onSelected(comentario_id: number): void {
    this.comentario_id = comentario_id;
    this.selectedComentario = new ComentarioDetail();
    this.comentarioService.getComentarioDetail(comentario_id).subscribe(o => this.selectedComentario = o);
  }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getComentarios();
    }
  
}