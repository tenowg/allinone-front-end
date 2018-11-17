import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'allinone-common';

@Component({
  selector: 'aio-admin-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  loading = false;
  selectedCompany = {
    name: '',
    original: true,
    granted: [],
    filters: {
      corporations: [],
      alliances: []
    },
    inverse: {
      corporations: [],
      alliances: []
    }
  };
  selectedCompany2 = {};
  permlist: [];
  corporations: [];
  alliances: [];
  groups: [];

  constructor(public perms: PermissionsService) {

  }

  ngOnInit() {
    this.perms.getPerms().subscribe((val: []) => this.permlist = val);
    this.perms.getCorps().subscribe((val: []) => this.corporations = val);
    this.perms.getGroups().subscribe((val: []) => this.groups = val);
    this.perms.getAlliances().subscribe((val: []) => this.alliances = val);
  }

  addTag(name) {
    return new Promise((resolve) => {
      this.loading = true;
      this.perms.addPerm(name).subscribe(val => {
        resolve(val);
        this.loading = false;
      });
    }).catch(er => {
      console.log(er);
    });
  }

  save() {
    this.loading = true;
    this.perms.savePerms(this.selectedCompany).subscribe(val => {
      this.selectedCompany = {
        name: '',
        original: true,
        granted: [],
        filters: {
          corporations: [],
          alliances: []
        },
        inverse: {
          corporations: [],
          alliances: []
        }
      };
      this.loading = false;
    });
  }
}
