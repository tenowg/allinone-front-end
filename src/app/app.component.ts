import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'allinone-common';
import { UserService } from 'allinone-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'front-end';
  menu_open = true;

  child_handle: any;

  constructor(public auth: AuthService, public user: UserService, private renderer: Renderer2) {}

  ngOnInit() {
  }

  nav_change() {
    if (this.menu_open) {
      this.renderer.removeClass(document.body, 'nav-md');
      this.renderer.addClass(document.body, 'nav-sm');
      this.menu_open = false;
    } else {
      this.renderer.removeClass(document.body, 'nav-sm');
      this.renderer.addClass(document.body, 'nav-md');
      this.menu_open = true;
    }
  }
}
