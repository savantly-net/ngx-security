import { Component } from '@angular/core';
import { IUser, ISecurityService } from '@savantly/ngx-security';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser;

  constructor (
    securityService: ISecurityService
  ) {
     this.user = securityService.user;
  }

}
