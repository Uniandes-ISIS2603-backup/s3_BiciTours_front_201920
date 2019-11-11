import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from "@angular/forms";

import {TourService} from '../tour.service';
import {Tour} from '../tour';

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent{
    tourForm: FormGroup;
    tourService: TourService;
    tours: Tour[];
    constructor(private formBuilder: FormBuilder, tourService:TourService) { 
        console.log('hole');  
        this.tourService=tourService; 
        this.tourForm = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.maxLength(255)]],
        costo: [''],
        lugar: ['']
    });
    }
    createTour(nuevoTour: Tour){
        nuevoTour.terminado=false;
        nuevoTour.duracion= 60;
        nuevoTour.id=null,
        this.tourService.createTour(nuevoTour).subscribe((tour:Tour) =>{
            this.tours.push(tour);
        });

    }

    onSubmit(f: Tour) {
        console.log(f.id);
        console.log(f.nombre);
        console.log(f.lugar);
        console.log(f.duracion);
        console.log(f.costo);
        console.log(f.terminado);
      }

    gOnInit() {
        
    }
}