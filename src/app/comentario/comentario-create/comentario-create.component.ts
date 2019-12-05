import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';
import {ComentarioService} from '../comentario.service';
import {Comentario} from '../comentario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {
 
  blog_id:number;
  
  constructor(
    private comentarioService: ComentarioService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }
    
    formC = new FormGroup({
      calificacion: new FormControl(0),
      texto: new FormControl('Comparte por qué escogiste esta calificación.'),
    });

    /**
    * The new comentario
    */
    comentario: Comentario;

    onSubmit(): void {
      this.comentario = new Comentario;
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
      
      this.usuarioService.getUsuario(parseInt(localStorage.getItem("id"))).subscribe(usuario => {
        this.comentario.usuario=usuario;
        this.comentarioService.createComentario(this.blog_id,this.comentario)
            .subscribe((c : Comentario) => {
                this.create.emit();
                this.toastrService.success("The comentario was created", "comentario creation");
                location.reload();
            });});
            
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
      this.blog_id=this.route.snapshot.params['id'] 
    }

}