import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SIGNIN } from '../components/social-login/social-login.component';

@Injectable()
export class LoggedOutGuard implements CanActivate {
  constructor(
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthorized = false;

    if (!isAuthorized) {
      return true;
    } else {
      this.router.navigateByUrl( SIGNIN ).then();
      return false;
    }
  }
}
