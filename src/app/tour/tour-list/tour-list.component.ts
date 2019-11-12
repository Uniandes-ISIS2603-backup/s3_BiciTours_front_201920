import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from '../tour';
import { TourService } from '../tour.service';
import { Recomendacion } from '../recomendacion';
import { RecomendacionesService } from './../recomendaciones.service';

/**
 * The component for the list of tours in the BookStore
 */
@Component({
  selector: 'list-tour',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param tourService The author's services provider
   */
  constructor(private tourService: TourService, private router: Router, private recomendacionService: RecomendacionesService) { }

  tours: Tour[];
  recomendaciones: Recomendacion[];

  /**
   * Asks the service to update the list of tours
   */
  getTours(): void {
    this.tourService.getTours().subscribe(tours => this.tours = tours);
  }
  getRecomendaciones() {

    this.recomendacionService.getRecomendacion()
     .subscribe(rec => this.recomendaciones = rec);
    //return new Promise((resolve, reject) => {
    //  this.seguroService.getSeguros().subscribe(listSeguros => resolve(listSeguros));
  }
  
 
  ngOnInit() {
    this.getTours();
    this.getRecomendaciones();
  }
}