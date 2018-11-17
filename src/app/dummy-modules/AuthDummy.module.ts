import { NgModule } from '@angular/core';
import { AllinoneAuthModule } from 'allinone-auth';

@NgModule({
    imports: [AllinoneAuthModule],
    exports: [AllinoneAuthModule]
})
export class AuthDummyModule { }
