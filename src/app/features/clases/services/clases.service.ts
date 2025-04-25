import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Clase {
  id: number;
  tema: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private clases: Clase[] = [
    { id: 1, tema: 'Intro Angular', fecha: '2025-05-01' },
    { id: 2, tema: 'Componentes', fecha: '2025-05-02' },
    { id: 3, tema: 'Routing', fecha: '2025-05-03' }
  ];

  getClases(): Observable<Clase[]> {
    return of(this.clases);
  }
}
