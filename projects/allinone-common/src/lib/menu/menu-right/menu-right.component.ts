import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'aio-common-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.less']
})
export class MenuRightComponent implements OnInit {

  constructor(public user: UserService, public auth: AuthService) { }

  ngOnInit() {
  }

}
