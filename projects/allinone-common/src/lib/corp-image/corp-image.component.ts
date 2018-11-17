import { Component, Input } from '@angular/core';

@Component({
  selector: 'aio-common-corp-image',
  templateUrl: './corp-image.component.html',
  styleUrls: ['./corp-image.component.css']
})
export class CorpImageComponent {
  @Input() size: number;
  @Input() corp_id: number;

  constructor() { }
}
