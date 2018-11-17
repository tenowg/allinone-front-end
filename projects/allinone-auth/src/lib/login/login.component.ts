import { Component, OnInit } from '@angular/core';
import { AuthService } from 'allinone-common';
import { Router } from '@angular/router';
import { EchoService } from 'allinone-common';

@Component({
  selector: 'aio-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  child_handle: any;
  notes: any;

  constructor(public authService: AuthService, public router: Router, public echo: EchoService) { }

  ngOnInit() {
    this.authService.login();
  }

}
