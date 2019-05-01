import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SIGNIN } from '../components/social-login/page/social-login-page.component';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthorized = JSON.parse(localStorage.getItem('user'));

    if (isAuthorized) {
      return true;
    } else {
      this.router.navigateByUrl( SIGNIN ).then();
      return false;
    }
  }
}
