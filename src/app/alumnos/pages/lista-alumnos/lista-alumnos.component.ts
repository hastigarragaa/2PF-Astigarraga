import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AlumnosService } from '../../services/alumnos.service';
import { NombreCompletoPipe } from '../../pipes/nombre-completo.pipe';
import { ResaltadoDirective } from '../../directives/resaltado.directive';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule, MatTableModule, NombreCompletoPipe, ResaltadoDirective],
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['id', 'nombreCompleto', 'curso', 'email'];
  alumnos: any[] = [];

  constructor(private alumnosService: AlumnosService) {
    this.alumnosService.alumnos$.subscribe(alumnos => {
      this.alumnos = alumnos;
    });
  }
}
