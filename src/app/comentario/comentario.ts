//import {Usuario} from '../usuario/usuario';
import {Blog} from '../blog/blog';
//import {Tour} from '../tour/tour';

export class Comentario {
  /**
  * The comentario's id
  */
  id: number;

  /**
  * The comentario's calificacion
  */
  calificacion: number; 

  /**
  * The comentario's texto
  */
  texto: string;

  /**
  * The comentario's usuario
  */
  //usuario: Usuario; 

  /**
  * The comentario's blog
  */
  blog: Blog; 

  /**
  * The comentario's tour
  */
  //tour: Tour; 

}