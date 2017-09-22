import { Component, OnInit } from '@angular/core';

export interface IUser {
  principal: string;
  displayName: string;
  authenticated: boolean;
  roles: string[];
}

@Component({
  selector: 'my-user',
  template: `
    <p>
      user works!
    </p>
`,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
