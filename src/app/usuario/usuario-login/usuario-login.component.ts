import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

 /** Constructor para componente login
  * @param usuarioService Servicio de usuario para acceso de métodos
  * @param toastrService The toastr to show messages to the user*/
  constructor( private usuarioService: UsuarioService, private toastrService: ToastrService) { }

  usuario: Usuario;
  roles: String[];

  /** Intentar buscar en back: utiliza el back para verificar correo y contraseña recibidas*/
  intentarLogin(correo:String, password:String): void {
    this.usuarioService.getUsuarioByCorreoClave(correo,password);
  };

  /** Logs the user in with the selected role *
  login(): void {
    let role : String ="UNLOGGED"; 
    if(this.usuario.esAdmin)
    { role="ADMIN"; }
    else
    { role="USER";  }
    this.usuarioService.login(role);
    this.toastrService.success('Logged in')
  }
*/
  ngOnInit() {
    this.usuario = new Usuario();
    this.roles = ['Administrator', 'Client'];
  }

}
