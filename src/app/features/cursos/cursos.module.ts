import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './pages/lista-cursos/lista-cursos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaCursosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ListaCursosComponent,
    RouterModule.forChild(routes)
  ]
})
export class CursosModule {}
