import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LSelect2Module } from 'ngx-select2';
import { NgSelectModule } from '@ng-select/ng-select';
import { SocketIoEchoConfig, ECHO_CONFIG } from 'allinone-common';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { QuickinfoComponent } from './profile/quickinfo/quickinfo.component';
import { FormsModule } from '@angular/forms';
import { AllinoneCommonModule } from 'allinone-common';
import { ConfigService } from 'allinone-common';
import { BroadcastService } from 'allinone-common';

import { DataTablesModule } from 'angular-datatables';

export function tokenGetter() {
  return sessionStorage.getItem('access_token');
}

export function startApplicatonFactory(config: ConfigService): Function {
  return () => {
    return config.load(environment);
  };
}

export function startBroadcastFactory(broadcast: BroadcastService): Function {
  return () => {
    return broadcast.load();
  };
}

export const echoConfig: SocketIoEchoConfig = {
  userModel: 'App.User',
  notificationNamespace: 'App\\Notifications',
  options: {
    broadcaster: 'socket.io',
    host: environment.socket_host + ':' + environment.socket_port
  }
 };

@NgModule({
  declarations: [
    AppComponent,
    QuickinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LSelect2Module,
    NgSelectModule,
    FormsModule,
    DataTablesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        throwNoTokenError: false,
        whitelistedDomains: ['allinone.test', 'aio-api.eviannow.xyz']
      }
    }),
    AllinoneCommonModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ECHO_CONFIG, useValue: echoConfig},
    { provide: APP_INITIALIZER, useFactory: startApplicatonFactory, deps: [ConfigService], multi: true},
    { provide: APP_INITIALIZER, useFactory: startBroadcastFactory, deps: [BroadcastService], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
