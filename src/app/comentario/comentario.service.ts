import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from './comentario';
import { ComentarioDetail } from './comentario-detail';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s3_bicitours-api/api';
const comentarios = '/comentarios';

@Injectable()
export class ComentarioService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getComentarios(id: number) : Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL +"/blogs/"+id+ comentarios);
    }

     /**
    * Returns the Observable object containing the comentario retrieved from the API
    * @returns The comentario
    */
    getComentarioDetail(comentarioId): Observable<ComentarioDetail> {
        return this.http.get<ComentarioDetail>(API_URL + comentarios + "/" +  comentarioId);
    }
    
    createComentario(idBlog: number,  comentario: Comentario)
    {
        console.log(comentario)
        return this.http.post(API_URL + "/blogs/"+ idBlog +comentarios, comentario);
    }
}