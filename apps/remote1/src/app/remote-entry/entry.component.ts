import { Component } from '@angular/core';
import { UserService } from '@ng-mfe/shared/data-access-user';
@Component({
  selector: 'ng-mfe-remote1-entry',
  template: `<div class="remote-entry">
    <h2>Remote 1 remote Entry Component</h2>
  </div>
  loggedIn? {{ isLoggedIn$ | async }}
  `,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService) { }
}
