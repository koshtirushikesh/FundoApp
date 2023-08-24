import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthGurdService } from './../Services/auth/auth-gurd.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private Authguardservice: AuthGurdService, private router: Router) {}
  canActivate():boolean{
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
    } 
    return this.Authguardservice.gettoken();
  }
}
