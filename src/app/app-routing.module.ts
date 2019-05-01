import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedOutGuard } from './auth/logged-out.guard';
import { LoggedInGuard } from './auth/logged-in.guard';
import { SIGNIN, SocialLoginPageComponent } from './components/social-login/page/social-login-page.component';
import { HomePageComponent, ROOT } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: SIGNIN, component: SocialLoginPageComponent, canActivate: [ LoggedOutGuard ] },
  { path: ROOT, component: HomePageComponent, canActivate: [ LoggedInGuard ] },
  { path: '**', redirectTo: ROOT, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
