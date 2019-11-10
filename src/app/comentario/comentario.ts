/** import {Usuario} from '../usuario/usuario';
import {Blog} from '../blog/blog';
import {Tour} from '../tour/tour';
 */

export interface Comentario {
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
  usuario: string; 

  /**
  * The comentario's blog
  */
  blog: string; 

  /**
  * The comentario's tour
  */
  tour: string; 

}