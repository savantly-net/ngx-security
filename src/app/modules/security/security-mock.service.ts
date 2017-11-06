import { ISecurityService } from './isecurity.service';
import { IUser } from './user/user.component';
import { Injectable } from '@angular/core';

@Injectable()
export class SecurityMockService implements ISecurityService {
  logout: () => void;
  login: (username: string, password: string) => boolean;
  user: IUser;

  constructor() {
    this.user = {
      principal: 'demoUser',
      displayName: 'Demo User',
      authenticated: false,
      roles: ['ADMIN', 'USER']
    };

    this.login = function(_username: string, _password: string) {
      this.user.authenticated = true;
      return true;
    };

    this.logout = function() {
      this.user.authenticated = false;
    };
  }
}
