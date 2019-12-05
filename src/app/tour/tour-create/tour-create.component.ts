import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import {TourService} from '../tour.service';
import {Tour} from '../tour';
import {FotoCreateComponent} from '../../foto/foto-create/foto-create.component';
import {Foto} from '../../foto/foto';
import { FotoService } from 'src/app/foto/foto.service';

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent{
  //  tours: Tour;
    tourForm: FormGroup;
    fotos : Foto[];
    duracionForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private tourService : TourService ) { 
        this.tourForm = this.formBuilder.group({
        nombre: ['',[Validators.required, Validators.maxLength(255)]],
        costo: [''],
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
        nuevoTour.id=7;
        var tur = this.tourService.createTour(nuevoTour);
        console.log("||||||");
        console.log(tur);
        tur.subscribe((data) => { 
            console.log(data);
         }, (error) => { console.error(error); });

        console.log("||||||");

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
        this.tourForm.controls['fecha'].setValue(`${this.tourForm.value.fecha}T05:00:00Z[UTC]`);
        console.log(this.tourForm.value);
        this.createTour(this.tourForm.value);
    }

    gOnInit() {
        
    }
}