import { Component, OnInit } from '@angular/core';
import { Usuario} from '../usuario';
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
        this.usuarioService.getUsuarios().subscribe(usuarios =>(this.usuarios = usuarios));
    }
  ngOnInit() {
    this.getUsuarios();
  }
  buscar(): void{
    
    var input, filter, listas, tr, td, i, txtValue, info;
    
    input = document.getElementById("buscar");
    filter = input.value.toUpperCase();
    listas = document.getElementById("listas");
    tr = listas.getElementsByTagName("div");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("a")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

}