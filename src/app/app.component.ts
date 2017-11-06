import { Component } from '@angular/core';
import { IUser } from './modules/security';
import { ISecurityService } from './modules/security/isecurity.service';

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
