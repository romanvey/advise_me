import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROOT } from '../components/home-page/home-page.component';

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
    const isAuthorized = JSON.parse(localStorage.getItem('user'));

    if (!isAuthorized) {
      return true;
    } else {
      this.router.navigateByUrl( ROOT ).then();
      return false;
    }
  }
}
