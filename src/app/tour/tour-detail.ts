import {Tour} from './tour';
import {Foto} from '../foto/foto';
import {Blog} from '../blog/blog';
import {Evento} from './evento';

export class TourDetail extends Tour{

  fotos: Foto[];

  blogs:Blog[];

  eventos: Evento[];
}