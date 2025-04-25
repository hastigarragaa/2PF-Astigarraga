import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CursosService, Curso } from '../../services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[] = [];
  displayedColumns = ['id', 'nombre', 'duracion'];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }
}
