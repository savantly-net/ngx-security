import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ISecurityService } from './modules/security/isecurity.service';
import { SecurityModule, SecurityMockService } from './modules/security/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule
  ],
  providers: [{
    provide: ISecurityService,
    useClass: SecurityMockService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
