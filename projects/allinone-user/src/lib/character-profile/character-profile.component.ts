import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharService } from 'allinone-common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PermissionsService } from 'allinone-common';

@Component({
  selector: 'aio-user-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.css']
})
export class CharacterProfileComponent implements OnInit, OnDestroy {
  char$: Subscription;
  char: any;
  loading = false;
  groups: [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user: CharService,
    private perms: PermissionsService) { }

  ngOnInit() {
    this.perms.getGroups().subscribe((val: []) => this.groups = val);
    this.char$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.user.getProfile(+params.get('char_id'));
      })
    ).subscribe(val => this.char = val);
  }

  save() {
    this.loading = true;
    this.perms.saveUserPerms(this.char.user.id, this.char.user.permissions).subscribe(val => this.loading = false);
  }

  ngOnDestroy() {
    this.char$.unsubscribe();
  }

}
