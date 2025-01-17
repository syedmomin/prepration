import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { MytabComponent } from './components/mytab/mytab.component';

export const routes: Routes = [
    {
        path: 'drag',
        component: DragDropComponent,
    },
    {
        path: 'table',
        component:TableComponent,
    },
    {
        path: 'test',
        component:MytabComponent,
    }
];
