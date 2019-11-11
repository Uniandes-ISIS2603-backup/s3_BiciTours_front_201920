
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from './foto';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const fotos = 'fotos.json';

/**
* The service provider for everything related to fotos
*/
@Injectable({
    providedIn: 'root',
  })
export class FotoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    createFoto(foto: Foto) {
        return  this.http.post(API_URL + fotos, foto);
      }
}