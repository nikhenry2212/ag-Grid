import { Injectable } from '@angular/core';
import { Boleta } from './boleta.model';
import {HttpClient} from '@angular/common/http'
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BoletaService {
  baseUrl = "http://localhost:3000/boletas"

  constructor(
  private http: HttpClient
  ) { }

  read(): Observable<Boleta[]> {
    return this.http.get<Boleta[]>(this.baseUrl).pipe(
      map(obj => obj))
  }
}
