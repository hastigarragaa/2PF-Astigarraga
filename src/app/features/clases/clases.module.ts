import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClasesComponent } from './pages/lista-clases/lista-clases.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaClasesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ListaClasesComponent,
    RouterModule.forChild(routes)
  ]
})
export class ClasesModule {}
