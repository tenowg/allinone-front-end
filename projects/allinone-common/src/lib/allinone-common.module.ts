import { NgModule } from '@angular/core';
import { CorpImageComponent } from './corp-image/corp-image.component';
import { EveCharImageComponent } from './eve-char-image/eve-char-image.component';
import { CorpNotFoundComponentComponent } from './corp-not-found-component/corp-not-found-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfoBlockComponent } from './info-block/info-block.component';
import { MenusectionComponent } from './menu/menusection/menusection.component';
import { MenuItemComponent } from './menu/menuitem/menuitem.component';
import { MenuRightComponent } from './menu/menu-right/menu-right.component';
import { SidemenuComponent } from './menu/sidemenu/sidemenu.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    CorpImageComponent,
    EveCharImageComponent,
    CorpNotFoundComponentComponent,
    PageNotFoundComponent,
    InfoBlockComponent,
    MenuItemComponent,
    MenusectionComponent,
    MenuRightComponent,
    SidemenuComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CorpImageComponent,
    EveCharImageComponent,
    CorpNotFoundComponentComponent,
    PageNotFoundComponent,
    InfoBlockComponent,
    MenuItemComponent,
    MenusectionComponent,
    MenuRightComponent,
    SidemenuComponent,
    IndexComponent
  ]
})
export class AllinoneCommonModule { }
