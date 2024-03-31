import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DossierPatientComponent } from './dossier-patient/dossier-patient.component';
import { CompteMedecinComponent } from './compte-medecin/compte-medecin.component';
import { CompteAssistantComponent } from './compte-assistant/compte-assistant.component';
import { InterfaceAdministrateurComponent } from './interface-administrateur/interface-administrateur.component';
//import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { NameService } from './name.service';
import { InterfaceAssistantComponent } from './interface-assistant/interface-assistant.component';
import { InterfaceMedecinComponent } from './interface-medecin/interface-medecin.component';
import { EnregistrerPatientComponent } from './enregistrer-patient/enregistrer-patient.component';
import { GererCompteMedecinComponent } from './gerer-compte-medecin/gerer-compte-medecin.component';
import { FormsModule } from '@angular/forms';
import { MedecinAjouteComponent } from './compte-medecin/medecin-ajoute/medecin-ajoute.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DossierPatientComponent,
    CompteMedecinComponent,
    CompteAssistantComponent,
    InterfaceAdministrateurComponent,
    InterfaceAssistantComponent,
    InterfaceMedecinComponent,
    EnregistrerPatientComponent,
    GererCompteMedecinComponent,
    MedecinAjouteComponent,
   // AccueilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
