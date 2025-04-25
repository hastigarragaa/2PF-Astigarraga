import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Curso {
  id: number;
  nombre: string;
  duracion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[] = [
    { id: 1, nombre: 'Angular', duracion: '2 meses' },
    { id: 2, nombre: 'React', duracion: '1.5 meses' },
    { id: 3, nombre: 'Vue', duracion: '1 mes' }
  ];

  constructor() {}

  getCursos(): Observable<Curso[]> {
    return of(this.cursos);
  }
}
