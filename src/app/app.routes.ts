import { Routes } from '@angular/router';
import { DragComponent } from './components/drag/drag.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
    {
        path: 'drag',
        component: DragComponent,
    },
    {
        path: 'table',
        component:TableComponent,
    }
];
