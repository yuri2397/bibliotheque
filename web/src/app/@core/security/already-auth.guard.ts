import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { AuthenticationService } from "app/auth/service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AlreadyAuthGuard implements CanActivate {
  constructor(private _authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      console.log("GUAR")
    if (this._authService.isAuth) {
      return this.router.navigate(['/admin'])
    }

    return true;
  }
}
