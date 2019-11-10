import {Comentario} from "./comentario";

export class ComentarioDetail implements Comentario{

 id: number;
 calificacion: number; 
 texto: string;
 usuario: string; 
 blog: string;
 tour: string; 
 respuestas: Comentario[];
}