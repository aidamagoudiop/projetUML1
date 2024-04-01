

import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DossierPatientComponent } from './dossier-patient/dossier-patient.component';
import { CompteMedecinComponent } from './compte-medecin/compte-medecin.component';
import { InterfaceAdministrateurComponent } from './interface-administrateur/interface-administrateur.component';
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
    path: 'compte-medecin',
    component: CompteMedecinComponent
  },
  {
    path: 'dossier-patient',
    component: DossierPatientComponent
  },
  {
    path: 'interface-administrateur',
    component: InterfaceAdministrateurComponent
  }
  // {
  //   path: 'interface-administrateur',
  //   component: InterfaceAdministrateurComponent
  // }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









