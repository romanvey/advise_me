import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';


@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {

  constructor(
    private socialAuthService: AuthService
  ) { }

  ngOnInit() {
  }

  loginSocial(socialProvider) {
    this.socialAuthService.signIn(socialProvider).then(
      userData => {
        console.log(userData);
      });
  }
}

export const SIGNIN = 'signin';
