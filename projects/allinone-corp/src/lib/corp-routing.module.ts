import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllinoneCorpComponent } from './allinone-corp.component';
import { AuthGuard, CorpNotFoundComponentComponent, AuthRoles } from 'allinone-common';
import { CorpViewComponent } from './corp-view/corp-view.component';
import { CorpDetailResolverService } from './corp-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AllinoneCorpComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'not-found',
            component: CorpNotFoundComponentComponent
          },
          {
            path: ':corp',
            component: CorpViewComponent,
            canActivate: [AuthGuard],
            data: {
              param: 'corp',
              check_url: '/corp/public/',
              redirect_path: '/corp/not-found'
            } as AuthRoles,
            resolve: {
              corp_info: CorpDetailResolverService
            }
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CorpRoutingModule { }
