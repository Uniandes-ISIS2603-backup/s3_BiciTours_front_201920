import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SeguroService } from 'src/app/core/services/seguro.service';


@Component({
  selector: 'app-edit-insurance',
  templateUrl: './edit-insurance.component.html',
  styleUrls: ['./edit-insurance.component.scss']
})
export class EditInsuranceComponent implements OnInit {

  id: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seguroService: SeguroService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.seguroService.getSeguro(this.id)
      .subscribe()

    });
  }

}
