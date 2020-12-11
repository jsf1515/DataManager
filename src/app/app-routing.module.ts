import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiographyComponent } from './biography/biography.component' ;
import { ContactInformationComponent } from './contact-information/contact-information.component' ;
import { PersonalInformationComponent } from './personal-information/personal-information.component' ;

const routes: Routes = [
  { path: 'biography' , component: BiographyComponent } ,
  { path: 'contactInformation' , component: ContactInformationComponent } ,
  { path: 'personalInformation' , component: PersonalInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
