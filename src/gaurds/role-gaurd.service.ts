import { AuthenticationService } from '../authentication/authentication.service';
import { IUser } from '../user/user.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class RoleGaurdService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const roles: String[] = route.data.roles;
    const token = localStorage.getItem('user') || '{"roles": []}';
    const user: IUser = JSON.parse(token);
    const userRoles: string[] = user.roles;
    if (!this.auth.isAuthenticated() || roles.some(r => userRoles.some(ur => ur === r))) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

}
