import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllinoneCorpComponent } from './allinone-corp.component';
import { CorpViewComponent } from './corp-view/corp-view.component';
import { CorpRoutingModule } from './corp-routing.module';
import { AllinoneCommonModule } from 'allinone-common';

@NgModule({
  declarations: [
    AllinoneCorpComponent,
    CorpViewComponent
  ],
  imports: [
    CommonModule,
    CorpRoutingModule,
    AllinoneCommonModule
  ],
  exports: [AllinoneCorpComponent]
})
export class AllinoneCorpModule { }
