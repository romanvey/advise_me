import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthorized = false;

    if (isAuthorized) {
      return true;
    } else {
      this.router.navigateByUrl( '' ).then();
      return false;
    }
  }
}
