import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //librerías para relación entre formularios y componentes
import { Usuario} from '../usuario';
import { UsuarioService} from '../usuario.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent {

  usuarioForm : FormGroup; //formulario de usuario con objetos de tipo FormControl
  usuarios: Usuario[];

  constructor(private servicio: UsuarioService, private formBuilder:FormBuilder,
   private toastr: ToastrService) {
    this.usuarios=[];
    this.usuarioForm = this.formBuilder.group({
    nombre:["",[Validators.required,Validators.minLength(5)]],
    correo:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(8)]]});
   }
  createUsuario(newUsuario: Usuario) {
    this.servicio.createUsuario(newUsuario).subscribe((usuario:Usuario) => {
      this.usuarios.push(usuario);
      this.showSuccess();
      window.history.back();
    });
    
    this.usuarioForm.reset();
  }

  showSuccess() {
    this.toastr.success('El usuario se creó exitosamente');

  }
}