import { Component, OnInit, Output, OnChanges, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Evento } from '../evento'
import { TourService } from '../tour.service'
import { EventEmitter } from 'events';
import { Tour } from '../tour';
 
@Component({
  selector: 'app-tour-add-evento',
  templateUrl: './tour-add-evento.component.html',
  styleUrls: ['./tour-add-evento.component.scss']
})
export class TourAddEventoComponent implements OnInit, OnChanges {

  constructor(private tourService: TourService,
              private toastrService: ToastrService) { }

  @Input() tour: Tour;

  evento: Evento;

  public isCollapsed = true;

  @Output() updateEventos = new EventEmitter();
  
  addEvent(eventoForm: NgForm): Evento {
    this.evento.tour = this.tour;
    this.tourService.createEvento(this.tour.id,this.evento).subscribe(()=>{eventoForm.resetForm();
                                                                          this.updateEventos.emit;
                                                                          this.toastrService.success("El evento se genero con exito",'evento added');
                                                                          },err=>{this.toastrService.error(err,'Error');
                                                                          });
    return this.evento;
  } 

  ngOnInit() {
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
