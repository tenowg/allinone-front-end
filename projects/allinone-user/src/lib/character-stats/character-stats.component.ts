import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aio-user-character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.less']
})
export class CharacterStatsComponent implements OnInit {
  @Input() stats;
  constructor() { }

  ngOnInit() {
  }

}
