import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecurityModule, SecurityMockService, ISecurityService } from '@savantly/ngx-security';


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
