import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componentsDetails = [
    {
      name: 'Table',
      url: 'table',
      description: 'Table component',
    },
    {
      name: 'Drag',
      url: 'drag',
      description: 'Drag component',
    },
    {
      name: 'Table Sorting',
      url: 'table-sorting',
      description: 'Test component',
    },
    {
      name: 'Login',
      url: 'login',
      description: 'Login component',
    },
    {
      name: 'Dashboard',
      url: 'dashboard',
      description: 'Dashboard component',
    },
  ]
}
