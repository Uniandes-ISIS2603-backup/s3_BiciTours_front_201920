import { Component, OnInit } from '@angular/core';
import {Seguro} from './../../seguros/seguro';
import {SeguroService} from './../../core/services/seguro.service';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-list-insurances',
  templateUrl: './list-insurances.component.html',
  styleUrls: ['./list-insurances.component.scss']
})
export class ListInsurancesComponent implements OnInit {

  seguros: Seguro [];
  seguroForm: FormGroup;

  constructor(private formBuilder:FormGroup ,private seguroService: SeguroService) { }

  ngOnInit() {
    this.getSeguros();
  }

  getSeguros() {
    this.seguroService.getSeguros()
    .subscribe(seguros => this.seguros = seguros);
  }
  postSeguro(seguro: Seguro) {
this.seguroService.postSeguro(seguro).subscribe(seguros => this.seguros.push(seguro));
  }
}
