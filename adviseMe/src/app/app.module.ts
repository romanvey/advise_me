import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionComponent } from './components/action/action.component';
import { ConsoleComponent } from './components/console/console.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
