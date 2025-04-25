import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AlumnosService } from '../alumnos/services/alumnos.service';
import { CursosService } from '../features/cursos/services/cursos.service';
import { ClasesService } from '../features/clases/services/clases.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalAlumnos = 0;
  totalCursos = 0;
  totalClases = 0;
  ultimoAlumno: string = '';

  constructor(
    private alumnosService: AlumnosService,
    private cursosService: CursosService,
    private clasesService: ClasesService
  ) {}

  ngOnInit(): void {
    this.alumnosService.alumnos$.subscribe(alumnos => {
      this.totalAlumnos = alumnos.length;
      this.ultimoAlumno = alumnos.length ? `${alumnos[alumnos.length - 1].nombre} ${alumnos[alumnos.length - 1].apellido}` : '';
    });

    this.cursosService.getCursos().subscribe(cursos => {
      this.totalCursos = cursos.length;
    });

    this.clasesService.getClases().subscribe(clases => {
      this.totalClases = clases.length;
    });
  }
}
