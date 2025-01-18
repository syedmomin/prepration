import { Routes } from '@angular/router';
import { AuthGuard } from './@core/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'drag',
    loadComponent: () => import('./components/drag-drop/drag-drop.component').then(c => c.DragDropComponent),
  },
  {
    path: 'table',
    loadComponent: () => import('./components/table/table.component').then(c => c.TableComponent),
  },
  {
    path: 'table-sorting',
    loadComponent: () => import('./components/mytab/mytab.component').then(c => c.MytabComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashbaord/dashbaord.component').then(c => c.DashbaordComponent),
    canActivate:[AuthGuard]
  }
];
