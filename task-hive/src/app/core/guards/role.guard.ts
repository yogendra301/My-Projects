import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkRole(route);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkRole(childRoute);
  }

  private checkRole(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const requiredRole = route.data['role'];
    const userRole = this.authService.getUserRole();

    // Check if user has the required role
    if (requiredRole && userRole && requiredRole === userRole) {
      return true;
    }

    // If no required role is specified, allow access (role check not needed)
    if (!requiredRole) {
      return true;
    }

    // User doesn't have the required role, redirect to unauthorized page
    return this.router.createUrlTree(['/unauthorized']);
  }
}
