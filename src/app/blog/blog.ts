import { Usuario } from '../usuario/usuario';

export class Blog {
  id:number;

  titulo:string;

  texto:string;

  calificacionPromedio:number;

  rutaImagen:string;

  rutaVideo:string;

  creador:Usuario;
  
}