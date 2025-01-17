import { Routes } from '@angular/router';
import { DragComponent } from './drag/drag.component';
import { TableComponent } from './table/table.component';

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
