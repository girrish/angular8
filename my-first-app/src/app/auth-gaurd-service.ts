import { AuthService } from './auth-service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGaurd implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              router: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.authService.isAuthenticated()
                .then(
                  (authenticated: boolean) => {
                    if (authenticated) {
                      return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                  }
                );
  }
}
