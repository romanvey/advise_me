import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-login-page',
  templateUrl: './social-login-page.component.html',
  styleUrls: ['./social-login-page.component.scss']
})
export class SocialLoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const SIGNIN = 'signin';
