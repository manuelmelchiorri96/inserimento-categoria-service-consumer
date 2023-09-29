import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InserimentoCategoriaService {
  private baseUrl = 'http://localhost:8771/rest/api/categorie/nuova-categoria';

  constructor(private http: HttpClient) {}

  inserisciCategoria(categoria: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, categoria);
  }
}
