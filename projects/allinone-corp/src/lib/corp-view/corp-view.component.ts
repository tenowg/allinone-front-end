import { Component, OnInit } from '@angular/core';
import { CorpService } from 'allinone-common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'aio-corp-corp-view',
  templateUrl: './corp-view.component.html',
  styleUrls: ['./corp-view.component.css']
})
export class CorpViewComponent implements OnInit {
  public corp_info: any;
  corp_id: number;

  constructor(public corp: CorpService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.corp.getCorp(98298439).subscribe(val => this.corp_info = val);
    this.route.data.subscribe((data: {corp_info: any}) => {
      this.corp_id = data.corp_info.corporation_id;
      this.corp_info = data.corp_info;
    });
  }

}
