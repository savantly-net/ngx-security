import { Injectable } from '@angular/core';

export abstract class IAuthenticationService {
  isAuthenticated: () => boolean;
}

@Injectable()
export class AuthenticationService implements IAuthenticationService {

  isAuthenticated: () => boolean;

  constructor() {

  }

}
