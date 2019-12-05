import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //librerías para relación entre formularios y componentes

import { Usuario} from '../usuario';
import { UsuarioService} from '../usuario.service'; //Comunicación con servicios 
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit{

  usuarioForm : FormGroup; //formulario de usuario con objetos de tipo FormControl
  usuarios: Usuario[];
  usuario: Usuario;
  roles: String[];// roles definidos para usuarios
  /**
    * Constructor for the component
    * @param UsuarioService Servicios para actualización de métodos
    * @param toastrService The toastr to show messages to the user
    * @param formBuilder Form Builder para creación de formulario
    */
  constructor(private servicio: UsuarioService, private formBuilder:FormBuilder,
   private toastr: ToastrService) {
    this.usuarios=[];
    this.usuarioForm = this.formBuilder.group({
    nombre:["",[Validators.required,Validators.minLength(5)]],
    correo:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(8)]]});
   }
   /** Create: Crea el usuario utilizando el comando push y el servicio UsuarioService*/
  createUsuario(newUsuario: Usuario) {
    this.servicio.createUsuario(newUsuario).subscribe((usuario:Usuario) => {
      this.usuarios.push(usuario);
      this.showSuccess();
      window.history.back();
    });
    this.usuarioForm.reset();
  }
   /** Loggear al usuario con el role seleccionado  */
   signUp(): void {
    //this.servicio.login(this.usuario.roles);
    this.toastr.success('Successfully signed up')
  }

  /** Success: Mensaje de éxito para creación de usuario*/ 
  showSuccess() {
    this.toastr.success('El usuario se creó exitosamente');
  }
  /** OnInit: Función inicial para creación de usuario   */
   ngOnInit() {
    this.usuario = new Usuario();
    this.roles = ['ADMIN', 'USER','UNLOGGED'];
}
}