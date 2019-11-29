import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms'; //librerías para relación entre formularios y componentes
import { Usuario} from '../usuario';
import { UsuarioService} from '../usuario.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuarioForm : FormGroup; //formulario de usuario con objetos de tipo FormControl
  usuarios: Usuario[];

  constructor(private servicio: UsuarioService, private formBuilder:FormBuilder,
   private toastr: ToastrService) {
    this.usuarioForm = this.formBuilder.group({nombre:["",[Validators.required,Validators.minLength(5)]],
    correo:["",[Validators.required,Validators.email]],
    contraseña:["",[Validators.required,Validators.minLength(8)]]});
   }
  createUsuario(newUsuario: Usuario) {
    // Process checkout data here
    console.warn("el usuario fue creado", newUsuario);

    this.servicio.createUsuario(newUsuario).subscribe(newUsuario => {
      this.usuarios.push(newUsuario);
    });
    this.showSuccess();
    this.usuarioForm.reset();
  }

  showSuccess() {
    this.toastr.success('El usuario se creó exitosamente');
  }
  ngOnInit() {
    this.servicio
      .getUsuarios()
      .subscribe(usuarios => (this.usuarios = usuarios));
  }
}