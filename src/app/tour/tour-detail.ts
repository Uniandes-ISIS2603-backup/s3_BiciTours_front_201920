import {Tour} from './tour';
import {Foto} from '../foto/foto';
import {Blog} from '../blog/blog';

export class TourDetail extends Tour{

  dificultad: number;

  descripcion: string;

  fotos: Foto[];

  blogs:Blog[];
}