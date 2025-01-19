import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../@core/services/user.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  validation: boolean = true;

  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._userService.login(this.loginForm.value).subscribe((isValid) => {
        if (isValid) {
          this.router.navigate(['/dashboard']);
        } else {
          this.validation = false;
        }
      });
    }
  }
}
