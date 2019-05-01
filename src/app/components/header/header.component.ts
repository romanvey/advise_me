import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SIGNIN } from '../social-login/page/social-login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = null;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl( SIGNIN ).then();
  }

}
