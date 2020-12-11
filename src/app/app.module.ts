import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { BiographyComponent } from './biography/biography.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactInfoComponent,
    BiographyComponent,
    PersonalInformationComponent,
    ContactInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
