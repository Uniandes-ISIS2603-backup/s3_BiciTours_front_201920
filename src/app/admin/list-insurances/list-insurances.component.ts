import { Component, OnInit } from '@angular/core';
import { Seguro } from './../../seguros/seguro';
import { SeguroService } from './../../core/services/seguro.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-insurances',
  templateUrl: './list-insurances.component.html',
  styleUrls: ['./list-insurances.component.scss']
})
export class ListInsurancesComponent implements OnInit {

  seguros: Seguro[];
  seguroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private seguroService: SeguroService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
    this.getSeguros();
  }

  getSeguros() {
    this.seguroService.getSeguros()
      .subscribe(seguros => this.seguros = seguros);
  }
  private buildForm() {
    this.seguroForm = this.formBuilder.group({
      tipo: [''],
      condiciones: [''],
      caracteristicas: ['']
    });
  }
  /*
  postSeguro(event: Event) {

    console.log('hola');

    event.preventDefault();
    const seguro = this.seguroForm.value;
    this.seguroService.postSeguro(seguro)
      .subscribe(nuevo => {
         this.router.navigate(['./admin/insurances']);
      });

    console.log(this.seguroForm.value);
  }
  */

}
