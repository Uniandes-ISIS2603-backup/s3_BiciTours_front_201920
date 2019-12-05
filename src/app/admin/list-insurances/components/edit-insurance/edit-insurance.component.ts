import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SeguroService } from 'src/app/core/services/seguro.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-edit-insurance',
  templateUrl: './edit-insurance.component.html',
  styleUrls: ['./edit-insurance.component.scss']
})
export class EditInsuranceComponent implements OnInit {

  id: number;
  form: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seguroService: SeguroService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
   }


  private buildForm() {
    this.form = this.formBuilder.group({
      id: [this.id],
      tipo: [''],
      condiciones: [''],
      caracteristicas: ['']
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.seguroService.getSeguro(this.id)
      .subscribe(respuesta => {
        this.form.patchValue(respuesta);
      });

    });
  }

  updateSeguro(event: Event) {

    event.preventDefault();
    const seguro = this.form.value;
    this.seguroService.updateSeguro(seguro)
      .subscribe(nuevo => {
         this.router.navigate(['./admin/insurances']);
      });
  }


}
