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
        path: 'date-range-picker',
        loadComponent: () => import('./components/date-range-picker/date-range-picker.component').then(m => m.DateRangePickerComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
