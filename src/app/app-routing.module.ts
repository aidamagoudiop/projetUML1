

import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DossierPatientComponent } from './dossier-patient/dossier-patient.component';
//import { AccueilComponent } from './accueil/accueil.component';



const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dossier-patient',
    component: DossierPatientComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









