import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

 /** Constructor para componente login
  * @param usuarioService Servicio de usuario para acceso de métodos
  * @param toastrService The toastr to show messages to the user*/
  constructor( private usuarioService: UsuarioService, private toastrService: ToastrService) {

   }

  usuario: UsuarioDetail;
  roles: String[];

  /** Intentar buscar en back: utiliza el back para verificar correo y contraseña recibidas*/
  intentarLogin(): void {
    var usuario: UsuarioDetail =new UsuarioDetail();
    usuario.correo=(<HTMLInputElement>document.getElementById("email")).value;
    usuario.password=(<HTMLInputElement>document.getElementById("password")).value;
    this.usuarioService.createUsuario(usuario).subscribe(o =>{
      this.usuario= o;
      this.login();
    });
    
  };

  /** Logs the user in with the selected role */
  login(): void {
    let role : String ="UNLOGGED"; 
    if(this.usuario.esAdmin)
    { role="ADMIN"; }
    else
    { role="USER";  }
    localStorage.setItem('id',this.usuario.id+"");
    localStorage.setItem('nombre',this.usuario.nombre+"");
    
    this.usuarioService.login(role);
    this.toastrService.success('Logged in')
  }
  ngOnInit() {
    this.usuario = new UsuarioDetail();
    this.roles = ['ADMIN', 'USER','UNLOGGED'];
  }

}
