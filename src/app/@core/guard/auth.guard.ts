import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user = this.userService.getCurrentUser(); // Assuming getCurrentUser() returns the current user synchronously
        if (user && user.role === 'admin') {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}