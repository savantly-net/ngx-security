import { AuthenticationService } from './authentication/authentication.service';
import { AuthGaurdService } from './gaurds/auth-gaurd.service';
import { RoleGaurdService } from './gaurds/role-gaurd.service';
import { SecurityMockService } from './security-mock.service';
import { SecurityService } from './security.service';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [SecurityService]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: SecurityModule) {
    if (parentModule) {
      throw new Error(
        'SecurityModule is already loaded. Import it in the AppModule only');
    }
  }
}
