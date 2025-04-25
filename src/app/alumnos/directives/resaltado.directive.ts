import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: true
})
export class ResaltadoDirective implements OnInit, OnChanges {
  @Input('appResaltado') tamanoLetra!: string;

  constructor(private elemento: ElementRef) {}

  ngOnInit(): void {
    this.actualizarEstilo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.actualizarEstilo();
  }

  private actualizarEstilo() {
    this.elemento.nativeElement.style.fontSize = this.tamanoLetra || '20px';
  }
}
