import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          loadComponent: () =>
            import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
        },
        {
          path: 'alumnos',
          loadComponent: () =>
            import('./alumnos/pages/lista-alumnos/lista-alumnos.component').then(m => m.ListaAlumnosComponent)
        },
        {
          path: 'alumnos/abm',
          loadComponent: () =>
            import('./alumnos/pages/abm-alumnos/abm-alumnos.component').then(m => m.AbmAlumnosComponent)
        }
      ]
    }
  ];
  
