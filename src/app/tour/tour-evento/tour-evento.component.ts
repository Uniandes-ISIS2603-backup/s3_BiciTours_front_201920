import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../evento'


@Component({
  selector: 'app-tour-evento',
  templateUrl: './tour-evento.component.html',
  styleUrls: ['./tour-evento.component.scss']
})
export class TourEventoComponent implements OnInit {
  @Input() tourEventos: Evento[];

  public isCollapsed = false;

  constructor() { }

  updateEventos(eventos:Evento[]): void {
    this.tourEventos= eventos;
  }

  getDate(p: number): Date {
    let fecha: Date = new Date(p);
    return fecha;
  }


  ngOnInit() {
  }

}
