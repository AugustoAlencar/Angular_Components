import { Component, OnInit } from '@angular/core';
import {
  Router,
   Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      /* this.loading = true; */
    }
    if (event instanceof NavigationEnd) {
      /* this.loading = false; */
    }
    if (event instanceof NavigationCancel) {
      /* this.loading = false; */
    }
    if (event instanceof NavigationError) {
      /* this.loading = false; */
    }
  }

}
