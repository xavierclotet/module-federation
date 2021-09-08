import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';

import { UserService } from '@ng-mfe/shared/data-access-user';

@Component({
  selector: 'ng-mfe-root',
  template: `
    <div class="dashboard-nav">Admin Dashboard</div>
    <ul>
      <li><a routerLink="remote1">Remote 1</a></li>
      <li> <a routerLink="login">Login</a></li>
    </ul>

    <div *ngIf="isLoggedIn$ | async">
      You are authenticated so you can see this content.
      <button (click)="logout()">Logout</button>
    </div>
    <!-- <ng-template #signIn>

    </ng-template> -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('');
        }
      });
  }

  logout() {
    this.userService.logout();
  }
}
