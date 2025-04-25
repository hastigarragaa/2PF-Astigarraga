import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';

@NgModule({
  declarations: [NombreCompletoPipe, ResaltadoDirective],
  imports: [CommonModule],
  exports: [NombreCompletoPipe, ResaltadoDirective]
})
export class SharedModule {}
