import { Component, Input } from '@angular/core';

@Component({
  selector: 'aio-common-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.less']
})
export class MenuItemComponent {
  @Input() value;
  @Input() selected;
  @Input() icon;
}
