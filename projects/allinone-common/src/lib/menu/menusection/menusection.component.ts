import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aio-common-menusection',
  templateUrl: './menusection.component.html',
  styleUrls: ['./menusection.component.less']
})
export class MenusectionComponent implements OnInit {
  @Input() section;
  selectedMenu = '';

  constructor() { }

  ngOnInit() {
  }

  anchorClicked(event: any) {
    if (this.selectedMenu === event) {
      this.selectedMenu = '';
    } else {
      this.selectedMenu = event;
    }
  }
}
