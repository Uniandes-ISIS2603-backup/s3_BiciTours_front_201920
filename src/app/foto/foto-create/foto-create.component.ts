import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {FotoService} from '../foto.service';
import {Foto} from '../foto';

@Component({
  selector: 'app-foto-create',
  templateUrl: './foto-create.component.html',
  styleUrls: ['./foto-create.component.css']
})
export class FotoCreateComponent{
    fotoForm: FormGroup;
    fotoService: FotoService;
    fotos: Foto[];
    constructor(private formBuilder: FormBuilder, fotoService:FotoService) {   
        this.fotoService=fotoService; 
        this.fotoForm = this.formBuilder.group({
        ruta: [""],
    });
    
    }
    createFoto(nuevoFoto: Foto){
        nuevoFoto.id=null,
        this.fotoService.createFoto(nuevoFoto).subscribe((foto:Foto) =>{
            this.fotos.push(foto);
        });
    }

    gOnInit() {
        
    }
}