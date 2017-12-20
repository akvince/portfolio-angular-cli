import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule,MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
