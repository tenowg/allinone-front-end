import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'aio-common-industry-jobs',
  templateUrl: './industry-jobs.component.html',
  styleUrls: ['./industry-jobs.component.css']
})
export class IndustryJobsComponent implements OnInit {
  @Input() jobs: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };

    setTimeout(() => {
      this.dtTrigger.next();
    }, 500);
  }

}
