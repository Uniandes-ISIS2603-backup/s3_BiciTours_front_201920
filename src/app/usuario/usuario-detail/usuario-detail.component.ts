import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})

export class UsuarioDetailComponent implements OnInit {

  /**
  * Detalles de usuario que buscamos mostrar
  */
 usuarioDetail: UsuarioDetail;

 /**
 * ID del usuario obtenida de la dirección
 */
 @Input() usuario_id: number;
 loader: any;

  constructor( private usuarioService: UsuarioService,
    private route: ActivatedRoute) { }

  
  /**
  * ?
  */
  getUsuarioDetail(): void {
    this.usuarioService.getUsuario(this.usuario_id)
      .subscribe(o => {
        this.usuarioDetail = o
        if(this.usuarioDetail.esAdmin){
          document.getElementById("id").innerText = "Administrador";
        }
        else{
          document.getElementById("id").innerText = "Usuario"; 
        }
        if(this.usuarioDetail.pago){
          document.getElementById("pago").innerText = "Pagada";
          document.getElementById("cantidad").style.display="none";
        }
        else{
          document.getElementById("pago").innerText = "Pendiente"; 
          document.getElementById("cantidad").style.display="";
        }
      });
  }
 onLoad(params) {
    this.usuario_id = parseInt(window.location.pathname.split('/')[2]);
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();

  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}