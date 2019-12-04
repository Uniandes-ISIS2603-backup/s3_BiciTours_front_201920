import {Comentario} from "./comentario";

export class ComentarioDetail extends Comentario{

 id: number;
 calificacion: number; 
 texto: string;
 usuario: string; 
 tour: string; 
 respuestas: Comentario[];
}