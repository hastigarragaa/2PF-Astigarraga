import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ClasesService, Clase } from '../../services/clases.service';

@Component({
  selector: 'app-lista-clases',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.scss']
})
export class ListaClasesComponent implements OnInit {
  clases: Clase[] = [];
  displayedColumns = ['id', 'tema', 'fecha'];

  constructor(private clasesService: ClasesService) {}

  ngOnInit(): void {
    this.clasesService.getClases().subscribe(data => {
      this.clases = data;
    });
  }
}
