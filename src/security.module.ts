import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityService } from './security.service';
import { SecurityMockService } from './security-mock.service';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthGaurdService } from './gaurds/auth-gaurd.service';
import { RoleGaurdService } from './gaurds/role-gaurd.service';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ UserComponent ],
  declarations: [ UserComponent ],
  providers: []
})
export class SecurityModule {
  SecurityService: SecurityService;
  SecurityMockService: SecurityMockService;
  AuthenticationService: AuthenticationService;
  AuthGaurdService: AuthGaurdService;
  RoleGaurdService: RoleGaurdService
}
