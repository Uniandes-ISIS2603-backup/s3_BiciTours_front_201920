import { Component, OnInit } from '@angular/core';
import { Usuario} from '../usuario';
import { UsuarioDetail} from '../usuario-detail'
import { UsuarioService} from '../usuario.service';
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent implements OnInit {
  /* Lista de usuarios de Bicitours*/ 
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }
 
   getUsuarios(): void {
        this.usuarioService.getUsuarios().subscribe(usuarios =>{ this.usuarios = usuarios;
        console.log("hhhhh",this.usuarios);});
    }
  ngOnInit() {
    this.getUsuarios();
  }

}