import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecurityModule, SecurityService } from '@savantly/ngx-security';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
