import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service'; // Import your authentication service
import { LoginComponent } from '../register/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: LoginComponent,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true; // User is authenticated, allow access to the route.
    } else {
      this.router.navigate(['/login']); // Redirect to the login page if not authenticated.
      return false; // Prevent access to the route.
    }
  }
}
