import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthentication();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthentication();
  }

  private checkAuthentication(): Observable<boolean | UrlTree> | boolean | UrlTree {
    // First check localStorage for immediate authentication
    const user = JSON.parse(localStorage.getItem('taskUsr') || 'null');
    
    if (user) {
      // Update the auth service with the stored user if not already set
      this.authService.setAuthFromStorage();
      return true;
    }

    // If no user in localStorage, check the observable
    return this.authService.$currentUser.pipe(
      take(1),
      map(currentUser => {
        if (currentUser) {
          return true;
        } else {
          // Return UrlTree for better navigation handling
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
