import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { GlobalVarsService } from '../../services/global-vars.service';

@Injectable({
  providedIn: 'root',
})
class AuthGuard {
  constructor(
    private router: Router,
    private globalVarsService: GlobalVarsService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.globalVarsService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }

  notLogged(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.globalVarsService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    
    return true;
  }
}

export const authGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).canActivate(next, state);
}

export const notLoggedGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).notLogged(next, state);
}