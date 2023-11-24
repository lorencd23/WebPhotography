import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
      providedIn: 'root'
})

export class PicsService {
      private error$ = new Subject<string>();
      private terminoBusqueda$ = new Subject<string>();
    
      constructor(private http: HttpClient) { }
    
      setError(mensaje: string) {
        this.error$.next(mensaje);
      }
    
      getError(): Observable<string> {
        return this.error$.asObservable();
      }
    
      enviarTerminoBusqueda(termino: string) {
        this.terminoBusqueda$.next(termino);
      }
    
      getTerminoBusqueda(): Observable<string> {
        return this.terminoBusqueda$.asObservable();
      }
    
      getImagenes(): Observable<any> {
        const URL = 'https://us-central1-idk-lgm.cloudfunctions.net/app/api/pics';
        return this.http.get(URL);
      }

      getImagenesByApart(apart: string): Observable<any> {
        const URL = 'https://us-central1-idk-lgm.cloudfunctions.net/app/api/pics' + apart;
        return this.http.get(URL);
      }
    
}