
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tour } from './tour';
import { TourDetail } from './tour-detail';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s3_bicitours-api/api';
const tours = '/tours';

//const API_URL = '../../assets';
//const tours = '/tours';

/**
* The service provider for everything related to tours
*/
@Injectable()
export class TourService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getTours() : Observable<Tour[]> {
        return this.http.get<Tour[]>(API_URL+tours);
    }

     /**
    * Retorna el objeto observable que contiene el tour cuyo id es dado
    * @returns el tour
    */
    getTourDetail(tourId): Observable<TourDetail> {
        return this.http.get<TourDetail>(API_URL +tours + "/"+tourId);
    }
    
    createTour(tour: Tour) {
        return  this.http.post(API_URL+tours, tour);
      }
}