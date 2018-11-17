import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    PermissionsComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AllinoneAdminModule { }
