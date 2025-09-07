import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
  return this.http.get<{ listCard: Card[] }>(this.apiUrl).pipe(
    map((response) => response.listCard), // 👈 no renombramos nada
    retry(2),
    catchError((error) => {
      console.error('Error al obtener tarjetas', error);
      return throwError(() => new Error('No se pudieron cargar las tarjetas'));
    })
  );
}

}
