import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllinoneUserComponent } from './allinone-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { AuthGuard } from 'allinone-common';

const routes: Routes = [
  {
    path: '',
    component: AllinoneUserComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: UserListComponent },
          {
            path: 'profile/:char_id',
            component: CharacterProfileComponent,
            canActivate: [AuthGuard],
            data: {
              param: 'char_id',
              check_url: '/character/profile/'
            },
          },
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
