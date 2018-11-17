import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { AuthService } from '../../auth.service';
import { Menu } from '../../models/menu.models';

@Component({
  selector: 'aio-common-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.less']
})
export class SidemenuComponent implements OnInit {

  constructor(private menuService: MenuService, private auth: AuthService) { }

  values = [];

  ngOnInit() {
    this.auth.isLoggedIn.subscribe(val => {
      this.menuService.getMainMenu().subscribe((data: Menu) => this.values = data.items);
    });
    const menu = this.menuService.getMainMenu().subscribe((data: Menu) => {
      this.values = data.items;
      menu.unsubscribe();
    });
  }
}
