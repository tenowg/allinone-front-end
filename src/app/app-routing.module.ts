import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from 'allinone-common';
import { IndexComponent } from 'allinone-common';

const appRoutes: Routes = [
  { path: 'admin', loadChildren: './dummy-modules/AdminDummy.module#AdminDummyModule'},
  { path: 'user', loadChildren: './dummy-modules/UserDummy.module#UserDummyModule'},
  { path: 'login', loadChildren: './dummy-modules/AuthDummy.module#AuthDummyModule'},
  { path: 'corp', loadChildren: './dummy-modules/CorpDummy.module#CorpDummyModule'},
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
