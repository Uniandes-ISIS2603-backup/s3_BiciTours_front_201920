import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recomendacion } from '../recomendacion';
import { RecomendacionesService } from './../recomendaciones.service';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.component.html',
  styleUrls: ['./recomendacion.component.scss']
})
export class RecomendacionComponent implements OnInit {

  constructor( private router: Router, private recomendacionService: RecomendacionesService) { }

  recomendaciones: Recomendacion[];

  
  getRecomendaciones() {

    this.recomendacionService.getRecomendacion()
     .subscribe(rec => this.recomendaciones = rec);
    //return new Promise((resolve, reject) => {
    //  this.seguroService.getSeguros().subscribe(listSeguros => resolve(listSeguros));
  }
  
 
  ngOnInit() {
    this.getRecomendaciones();
  }
}


