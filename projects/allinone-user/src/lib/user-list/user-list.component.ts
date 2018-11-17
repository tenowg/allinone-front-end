import { Component, OnInit } from '@angular/core';
import { UserService } from 'allinone-common';
import { Subject } from 'rxjs';

@Component({
  selector: 'aio-user-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  users = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger = new Subject();

  constructor(private user: UserService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };
    this.user.getUsers().subscribe((users: []) => {
      this.users = users;
      this.dtTrigger.next();
    });
  }

}
