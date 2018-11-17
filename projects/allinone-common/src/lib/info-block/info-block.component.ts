import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aio-common-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent implements OnInit {
  @Input() icon: string;
  @Input() count: number;
  @Input() title: string;
  @Input() large = 3;
  @Input() medium = 3;
  @Input() small = 6;
  @Input() xsmall = 12;

  constructor() { }

  ngOnInit() {
  }

}
