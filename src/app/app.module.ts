import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionComponent } from './components/action/action.component';
import { ConsoleComponent } from './components/console/console.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { LoggedOutGuard } from './auth/logged-out.guard';
import { LoggedInGuard } from './auth/logged-in.guard';
import { SocialLoginPageComponent } from './components/social-login/page/social-login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionService } from './services/action.service';

export function provideConfig() {
  return new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('655665501705-okka6uv00p47l8c7mm8rliq5p9pv39jb.apps.googleusercontent.com')
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('303123880300927')
    }
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionComponent,
    ConsoleComponent,
    SocialLoginComponent,
    SocialLoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    LoggedOutGuard,
    LoggedInGuard,
    RestService,
    ActionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
