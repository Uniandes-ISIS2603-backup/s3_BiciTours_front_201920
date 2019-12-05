import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private usuario:UsuarioService) { }

  ngOnInit() {

  }
  click(){
    window.location.pathname="/usuarios/"+localStorage.getItem("id")+"/perfil"
  }
  logout(){
    this.usuario.logout();
  }
}
