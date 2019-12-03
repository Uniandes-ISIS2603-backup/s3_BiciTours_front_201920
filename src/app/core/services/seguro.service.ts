import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seguro } from '../../seguros/Seguro';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s3_bicitours-api/api/';
const seguros = 'seguros';

@Injectable()
export class SeguroService {

  constructor(private http: HttpClient) { }
  getSeguros() {
    return this.http.get<Seguro[]>(API_URL + seguros);
  }

  getSeguro(id: number) {
    return this.http.get<Seguro[]>(API_URL + seguros + '/' + id);
  }

  postSeguro(seguro: Seguro) {
    return  this.http.post(API_URL + seguros, seguro);
  }
  updateSeguro(seguro: Seguro) {
    return  this.http.put(API_URL + seguros + '/' + seguro.id, seguro);
  }

}