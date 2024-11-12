import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Serie } from './Serie';
import { series } from './data';

@Injectable({
  providedIn: 'root'
})

export class SerieService {

  constructor(private http: HttpClient){}

  getSeries(): Observable<Serie[]>{
      return of(series);
  }

}
