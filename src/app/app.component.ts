import { Component } from '@angular/core';
import { NameService } from './name.service';

// import { DossierPatientComponent } from './dossier-patient/dossier-patient.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetUML';
  // image='image1.jpeg';
  constructor(private nameService:NameService){

  }

}

