import { Component } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bicitours-front';
  constructor(usuario: UsuarioService){
    localStorage.clear();
    usuario.start();
  }
}
