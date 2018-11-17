import { NgModule } from '@angular/core';
import { AllinoneUserModule } from 'allinone-user';

@NgModule({
    imports: [AllinoneUserModule],
    exports: [AllinoneUserModule]
})
export class UserDummyModule { }
