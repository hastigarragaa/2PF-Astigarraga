import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosService } from '../alumnos/services/alumnos.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  totalAlumnos = 0;
  totalCursos = 0;
  ultimoAlumno: any = null;

  constructor(private alumnosService: AlumnosService) {
    this.alumnosService.alumnos$.subscribe(alumnos => {
      this.totalAlumnos = alumnos.length;
      this.totalCursos = new Set(alumnos.map(a => a.curso)).size;
      this.ultimoAlumno = alumnos[alumnos.length - 1];
    });
  }
}
