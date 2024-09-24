import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '@services/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  canActivate() {
    const isValidToken = this.tokenService.isValidRefreshToken();
    if(isValidToken) {
      this.router.navigate(['/app']);
    }
    return true;
  }
  
}
