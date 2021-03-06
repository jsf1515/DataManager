import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BiographyComponent } from './biography/biography.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { HomeComponent } from './home/home.component';
import { ErrorsComponent } from './errors/errors.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BiographyComponent,
    PersonalInformationComponent,
    ContactInformationComponent,
    HomeComponent,
    ErrorsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
