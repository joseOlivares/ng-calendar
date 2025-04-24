import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'stepper',
        loadComponent: () => import('./core/components/stepper/stepper.component').then(m => m.StepperComponent)
    },
    {
      path: 'stepper2',
      loadComponent: () => import('./core/components/stepper2/stepper2.component').then(m => m.Stepper2Component)
  },
    {
        path: 'date-range-picker',
        loadComponent: () => import('./core/components/date-range-picker/date-range-picker.component').then(m => m.DateRangePickerComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
