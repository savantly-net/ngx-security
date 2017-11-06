import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecurityModule, SecurityMockService } from '@savantly/ngx-security';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule
  ],
  providers: [SecurityMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
