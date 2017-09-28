import { Component } from '@angular/core';
import { SecurityService, IUser } from '@savantly/ngx-security';

@Component({
  selector: 'app-root',
  template: `
<my-foo></my-foo>
<hr>
<marquee>{{ value$ | async }}</marquee>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value$: IUser;

  constructor (
    securityService: SecurityService
  ) {
     this.value$ = securityService.user;
  }

}
