import { Component, OnInit } from '@angular/core';
import { UserService } from 'allinone-common';

@Component({
  selector: 'app-quickinfo',
  templateUrl: './quickinfo.component.html',
  styleUrls: ['./quickinfo.component.less']
})
export class QuickinfoComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
  }

  image() {
    return 'https://image.eveonline.com/Character/' + (this.user.user ? this.user.user.character_id : 0) + '_64.jpg';
  }
}
