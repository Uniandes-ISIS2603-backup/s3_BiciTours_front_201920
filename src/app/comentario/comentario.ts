
/** import {Usuario} from '../usuario/usuario';
import {Blog} from '../blog/blog';
import {Tour} from '../tour/tour';
 */
import {Blog} from '../blog/blog';
import { Usuario } from '../usuario/usuario';
import { Tour } from '../tour/tour';

export class Comentario {

//import {Usuario} from '../usuario/usuario';

//import {Tour} from '../tour/tour';

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

  usuario: Usuario; 

  //usuario: Usuario; 


  /**
  * The comentario's blog
  */

  blog: Blog;


  /**
  * The comentario's tour
  */

  tour: Tour; 
  //tour: Tour; 


}