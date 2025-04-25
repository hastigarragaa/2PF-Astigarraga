import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-abm-alumnos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {
  alumnoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  guardar() {
    if (this.alumnoForm.valid) {
      this.alumnosService.agregarAlumno(this.alumnoForm.value);
  
      this.alumnoForm.reset();
      this.alumnoForm.markAsPristine();
      this.alumnoForm.markAsUntouched();
      this.alumnoForm.updateValueAndValidity();
    }
  }  
}
