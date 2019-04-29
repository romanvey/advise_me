import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionComponent } from './components/action/action.component';
import { ConsoleComponent } from './components/console/console.component';
import { MessageComponent } from './components/message/message.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

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
    MessageComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
