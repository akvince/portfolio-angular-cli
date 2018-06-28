import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,MatSidenavModule,MatCardModule,MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MenuComponent } from './menu/menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumvitaeComponent } from './curriculumvitae/curriculumvitae.component';
import { ProjectComponent } from './project/project.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MenuComponent,
    PresentationComponent,
    ContactComponent,
    CurriculumvitaeComponent,
    ProjectComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
