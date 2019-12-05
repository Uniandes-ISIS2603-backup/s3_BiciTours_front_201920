import { Blog } from './blog';
import { Comentario } from '../comentario/comentario';

export class BlogDetail extends Blog{
    comentarios: Comentario[];
}