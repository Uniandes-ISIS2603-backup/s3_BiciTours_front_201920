
import {Usuario} from './usuario';
import { Blog } from '../blog/blog';
import { Comentario } from '../comentario/comentario';
import { Seguro } from '../seguros/seguro';
import { Tour } from '../tour/tour';

export class UsuarioDetail extends Usuario{

    misBlogs: Blog[];

    comentarios: Comentario[];

    seguros: Seguro[];

    visitados: Tour[];
}