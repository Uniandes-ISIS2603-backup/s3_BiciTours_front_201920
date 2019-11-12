import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';
import {ComentarioService} from '../comentario.service';
import {Comentario} from '../comentario';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {

  constructor(
    private comentarioService: ComentarioService,
    private toastrService: ToastrService
  ) { }
    
    formC = new FormGroup({
      calificacion: new FormControl(1),
      texto: new FormControl('texto'),
    });

    /**
    * The new comentario
    */
    comentario: Comentario;

    onSubmit(): void {
      this.comentario.calificacion = this.formC.get('calificacion').value;  
      this.comentario.texto = this.formC.get('texto').value;
      this.createComentario();
    }

    /**
    * The output which tells the parent component
    * that the user no longer wants to create a comentario
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new comentario
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a comentario
    */
    createComentario(): Comentario { 
        this.comentarioService.createComentario(this.comentario)
            .subscribe((comentario : Comentario) => {
                this.comentario = comentario;
                this.create.emit();
                this.toastrService.success("The comentario was created", "comentario creation");

            });
        return this.comentario;
    }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create a comentario
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
    }

}