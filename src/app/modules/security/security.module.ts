import { ISecurityService } from './isecurity.service';
import { NgModule, ModuleWithProviders, Optional, SkipSelf, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ UserComponent ],
  declarations: [ UserComponent ]
})
export class SecurityModule {

  static forRoot(securityService: ISecurityService): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [{
        provide: ISecurityService,
        useValue: securityService
      }]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: SecurityModule) {
    if (parentModule) {
      throw new Error(
        'SecurityModule is already loaded. Import it in the AppModule only');
    }
  }
}
