import { Component } from '@angular/core';
import { SecurityService, IUser } from './modules/security';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser;

  constructor (
    securityService: SecurityService
  ) {
     this.user = securityService.user;
  }

}
