import { NgModule } from '@angular/core';
import { AllinoneUserComponent } from './allinone-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { AllinoneCommonModule } from 'allinone-common';

import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllinoneUserComponent,
    UserListComponent,
    CharacterProfileComponent,
    CharacterStatsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    AllinoneCommonModule,
    UserRoutingModule
  ]
})
export class AllinoneUserModule { }
