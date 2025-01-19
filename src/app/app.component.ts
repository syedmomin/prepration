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
      name: 'Drag',
      url: 'drag',
      description: 'Drag component',
    },
    {
      name: 'Table & pagination',
      url: 'table-sorting',
      description: 'Test component',
    },
    {
      name: 'Table & Action',
      url: 'table',
      description: 'Table component',
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
