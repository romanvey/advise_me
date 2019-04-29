import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SIGNIN, SocialLoginComponent } from './components/social-login/social-login.component';
import { LoggedOutGuard } from './auth/logged-out.guard';
import { LoggedInGuard } from './auth/logged-in.guard';

const routes: Routes = [
  { path: SIGNIN, component: SocialLoginComponent, canActivate: [ LoggedOutGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
