import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'drag',
    loadComponent: () => import('./components/drag-drop/drag-drop.component').then(m => m.DragDropComponent),
  },
  {
    path: 'table',
    loadComponent: () => import('./components/table/table.component').then(m => m.TableComponent),
  },
  {
    path: 'table-sorting',
    loadComponent: () => import('./components/mytab/mytab.component').then(m => m.MytabComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),
  }
];
