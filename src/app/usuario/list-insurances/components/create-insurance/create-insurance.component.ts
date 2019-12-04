import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { SeguroService } from '../../../../core/services/seguro.service';



@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-insurance.component.html',
  styleUrls: ['./create-insurance.component.scss']
})
export class CreateInsuranceComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private seguroService: SeguroService,
    private router: Router
  ) {
    this.buildForm();

  }

  ngOnInit() {
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      tipo: [''],
      condiciones: [''],
      caracteristicas: ['']
    });
  }

  postSeguro(event: Event) {

    event.preventDefault();
    const seguro = this.form.value;
    this.seguroService.postSeguro(seguro)
      .subscribe(nuevo => {
         this.router.navigate(['./admin/insurances']);
      });

  }
}
