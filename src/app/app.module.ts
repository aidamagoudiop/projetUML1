import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DossierPatientComponent } from './dossier-patient/dossier-patient.component';
import { CompteMedecinComponent } from './compte-medecin/compte-medecin.component';
import { CompteAssistantComponent } from './compte-assistant/compte-assistant.component';
//import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DossierPatientComponent,
    CompteMedecinComponent,
    CompteAssistantComponent,
   // AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
