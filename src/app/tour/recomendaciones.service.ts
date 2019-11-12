import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recomendacion } from './recomendacion';

const API_URL = 'http://localhost:8080/s3_bicitours-api/api/';
const seguros = 'recomendaciones';
@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  constructor(private http: HttpClient) {
   }
   getRecomendacion() {
    return this.http.get<Recomendacion[]>(API_URL + seguros);
  }

  postRecomendacion(seguro: Recomendacion) {
    return  this.http.post(API_URL + seguros, seguro);
  }
}
