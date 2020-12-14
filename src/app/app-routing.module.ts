import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiographyComponent } from './biography/biography.component' ;
import { ContactInformationComponent } from './contact-information/contact-information.component' ;
import { ErrorsComponent } from './errors/errors.component' ;
import { HomeComponent } from './home/home.component' ;
import { PersonalInformationComponent } from './personal-information/personal-information.component' ;

const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'biography' , component: BiographyComponent } ,
  { path: 'contactInformation' , component: ContactInformationComponent } ,
  { path: 'error' , component: ErrorsComponent } ,
  { path: 'personalInformation' , component: PersonalInformationComponent } ,
  { path: '**' , component: ErrorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
