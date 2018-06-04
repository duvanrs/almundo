import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {hotelClass} from '../class/hotels.class';



@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private heroesUrl = 'http://localhost:3000/hotels';  // URL to web api
  public filterInformation:hotelClass[];

  constructor(  private http: HttpClient) { }

  getHotels (): Observable<hotelClass[]> {
    return this.http.get<hotelClass[]>(this.heroesUrl);
  }

  getFilteredHotels(name,stars):Observable<hotelClass[]>{
    const url = `${this.heroesUrl}/${name}/${stars}`;
    return this.http.get<hotelClass[]>(url);
  }

}
