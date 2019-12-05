import { Component, OnInit, Output, OnChanges, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Evento } from '../evento'
import { TourService } from '../tour.service'
import { EventEmitter } from 'events';
import { Tour } from '../tour';

@Component({
  selector: 'app-tour-delete-evento',
  templateUrl: './tour-delete-evento.component.html',
  styleUrls: ['./tour-delete-evento.component.scss']
})
export class TourDeleteEventoComponent implements OnInit {

  constructor(private tourService: TourService,
              private toastrService: ToastrService) { }

              @Input() tour: Tour;

  evento: Evento;

  @Output() updateEventos = new EventEmitter();

  addEvent(evento: Evento){
    this.evento.tour = this.tour;
    this.tourService.deleteEvento(this.tour.id,evento)
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
