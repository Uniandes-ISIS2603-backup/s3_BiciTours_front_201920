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
    tourService: TourService;
    tours: Tour[];
    tourForm: FormGroup;
    duracionForm: FormGroup;

    constructor(private formBuilder: FormBuilder, tourService : TourService) { 
        this.tourForm = this.formBuilder.group({
        nombre: ['',[Validators.required, Validators.maxLength(255)]],
        costo: ['',Validators.required, Validators.min(0)],
        dificultad : [''],
        lugar:['',Validators.required],
        descripcion:['',[Validators.required, Validators.maxLength(600)]],
        fecha:['',Validators.required],
        duracion:['']
        });

        this.duracionForm = this.formBuilder.group({
        dias: [''],
        horas:[''],
        minutos:['',Validators.required, Validators.min(0)]});
    }


    createTour(nuevoTour: Tour){
        nuevoTour.terminado=false;
        nuevoTour.id=null,
        this.tourService.createTour(nuevoTour).subscribe((tour:Tour) =>{
            this.tours.push(tour);
        });

    }

    ponerDuracion()
    {
        let rta: number = 0;
        if(this.duracionForm.value.horas != null)
        {
            rta = rta + this.duracionForm.value.horas*60;
        }
        if(this.duracionForm.value.dias != null)
        {
            rta = rta + this.duracionForm.value.dias*60*24;
        }
        rta = rta+this.duracionForm.value.minutos;
        this.tourForm.controls['duracion'].setValue(rta);
        this.createTour(this.tourForm.value);
    }

    gOnInit() {
        
    }
}