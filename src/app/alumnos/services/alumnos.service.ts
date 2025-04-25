import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlumnosService {
  private alumnosKey = 'alumnos-data';

  private alumnosSource = new BehaviorSubject<any[]>(this.getAlumnosFromStorage());
  alumnos$ = this.alumnosSource.asObservable();

  agregarAlumno(alumno: any) {
    const current = this.alumnosSource.value;
    const newAlumno = { id: current.length + 1, ...alumno };
    const updated = [...current, newAlumno];

    this.alumnosSource.next(updated);
    localStorage.setItem(this.alumnosKey, JSON.stringify(updated));
  }

  private getAlumnosFromStorage(): any[] {
    const data = localStorage.getItem(this.alumnosKey);
    return data ? JSON.parse(data) : [];
  }
}
