import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate,  CanActivateChild, Route, Router, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGaurdService implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated()
           .then((authenticated: boolean)=>{
              if(authenticated) return true;
              else this.router.navigate(['/page-not-found']);
           });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state);

    }
}