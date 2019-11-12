import { Component, OnInit } from '@angular/core';
import { Seguro } from './../Seguro';
import { SeguroService } from '../../core/services/seguro.service';
const rowCards: HTMLElement = document.getElementById('row-cards');


@Component(
  {
    selector: 'app-seguros-lista',
    templateUrl: './seguros-lista.component.html',
    styleUrls: ['./seguros-lista.component.scss']
  })
export class SegurosListaComponent implements OnInit {
  constructor(private seguroService: SeguroService) {
  }


  listaImagenes: string[] = [
    'https://www.elcorreogallego.es/img/noticias/20170611/bicicleta_797510_manual.jpg',
    'https://deporterisaraldense.com/wp-content/uploads/2017/04/ciclomonta%C3%B1ismo1.jpg',
    'https://www.elpais.com.co/files/article_main/uploads/2019/06/19/5d0a54e48017a.jpeg',
    'https://s6.eestatic.com/2018/07/06/deportes/ciclismo/Ciclismo-Tour_de_Francia-Chris_Froome-Nairo_Quintana-Mikel_Landa-Alejandro_Valverde-Vincenzo_Nibali-Tom_Dumoulin-Geraint_Thomas-Ciclismo_320480518_85711961_1706x960.jpg',
    'http://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/07/28/15642694355430.jpg'
  ];
  listaSeguros: Seguro [];

  ngOnInit() {
    this.getSeguros();

  }
  getSeguros() {

    this.seguroService.getSeguros()
     .subscribe(seguros => this.listaSeguros = seguros);
  }

  generarNumeroAzar()
  {
    return Math.round(Math.random() * ((this.listaImagenes.length-1) - 0) + 0);
  }


}
