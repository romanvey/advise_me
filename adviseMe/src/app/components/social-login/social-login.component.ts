import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ROOT } from '../home-page/home-page.component';


@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {

  constructor(
    private socialAuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginSocial(socialProvider) {
    this.socialAuthService.signIn(socialProvider).then(
      userData => {
        console.log(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        this.router.navigateByUrl( ROOT ).then();
      });
  }
}
