import { Component, OnInit } from '@angular/core';
import { Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

  constructor(private comentarioService: ComentarioService) { }

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

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getComentarios();
    }
  
}