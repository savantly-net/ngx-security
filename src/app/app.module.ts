import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecurityModule, SecurityMockService } from '@savantly/ngx-security';

export const mockSecurity = new SecurityMockService();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule.forRoot(mockSecurity)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
