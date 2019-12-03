import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Foto} from '../foto';

@Component({
  selector: 'app-foto-create',
  templateUrl: './foto-create.component.html',
  styleUrls: ['./foto-create.component.css']
})

export class FotoCreateComponent{
    fotosForm :FormGroup;
    fotos : Foto[];
    indiceActual : number;
    fotoAct;
  
    constructor( private fb: FormBuilder) {
      this.fotoAct = document.getElementById("fotito");
      this.fotosForm = this.fb.group({
        ruta: [''],
        id:['']
        });
        this.fotos = [];
        this.indiceActual = 0;
    }
  
    
  
    imageUrl: any = 'https://i.imgur.com/ArrJTjn.png';
  
    uploadFile(event) {
      
      let reader = new FileReader(); // HTML5 FileReader API
      let file = event.target.files[0];
      if (event.target.files && event.target.files[0]) {
        console.log("entró al if");
        reader.readAsDataURL(file);
        // When file uploads set it to file formcontrol
        reader.onload = () => {
          console.log("está en el carajito este");
          this.imageUrl = reader.result;
          this.fotosForm.controls['ruta'].setValue(this.imageUrl);
          this.fotosForm.controls['id'].setValue(0);
          this.onSubmit();
        }
      }
    }
  
  
    anterior()
    {
      if(this.indiceActual != 0)
      {
        this.imageUrl = this.fotos[this.indiceActual-1].ruta;
        this.ponerImagenAColor(this.indiceActual-1);
        this.indiceActual--;
      }
    }
  
    siguiente()
    {
      if(this.indiceActual != this.fotos.length -1)
      {
        this.imageUrl = this.fotos[this.indiceActual+1].ruta;
        this.ponerImagenAColor(this.indiceActual+1);
        this.indiceActual++;
      }
    }
  
    seleccionarImagen(indice:number)
    {
      console.log("SELECCIONAR  "+indice);
      this.imageUrl = this.fotos[indice].ruta;
      this.ponerImagenAColor(indice);
      this.indiceActual= indice;
    }
    
    ponerImagenAColor(id:number)
    {
      var y = 0;
      console.log(id);
      console.log(this.indiceActual);
      if(this.indiceActual > 0){
        var gg = document.getElementById(this.indiceActual+"");
        gg.style.opacity = "0.5";
      }
      var gg = document.getElementById(id+"");
      gg.style.opacity = "1";
      if(y==1){
      this.indiceActual=this.indiceActual+1;
      }
      y=1;
    }
  
    onSubmit()
    {
      this.fotos.push(this.fotosForm.value);
      if(this.fotos.length >= 2){
      document.getElementById("siguiente").style.pointerEvents = "auto";
      document.getElementById("anterior").style.pointerEvents = "auto";
      }
          
    }
}