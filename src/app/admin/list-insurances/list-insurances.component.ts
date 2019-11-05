import { Component, OnInit } from '@angular/core';
import {Seguro} from './../../seguros/seguro';
import {SeguroService} from './../../core/services/seguro.service';

@Component({
  selector: 'app-list-insurances',
  templateUrl: './list-insurances.component.html',
  styleUrls: ['./list-insurances.component.scss']
})
export class ListInsurancesComponent implements OnInit {

  seguros: Seguro [];
  constructor(private seguroService: SeguroService) { }

  ngOnInit() {
    this.setSeguros();
  }

  setSeguros() {
    this.seguroService.getSeguros()
    .subscribe(seguros => this.seguros = seguros);
  }
}
