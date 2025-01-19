import { Component } from '@angular/core';
import { User, UserService } from '../../@core/services/user.service';

@Component({
  selector: 'app-dashbaord',
  imports: [],
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.css'
})
export class DashbaordComponent {
  userName: string = '';
  role: string = '';
  constructor(private userService: UserService) {
    this.userService.currentUser.subscribe((e) => {
      this.userName = e?.name || '';
      this.role = e?.role || '';
    });
  }
}
