import { ResaltadoDirective } from './resaltado.directive';
import { ElementRef } from '@angular/core';

describe('ResaltadoDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ResaltadoDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
