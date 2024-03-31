import { Component, OnInit } from '@angular/core';
import { NameService } from '../../name.service';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-medecin-ajoute',
  templateUrl: './medecin-ajoute.component.html',
  styleUrls: ['./medecin-ajoute.component.scss']
})
export class MedecinAjouteComponent {
  medecins: Medecin[] = [];

  public fetchMedecins(): void {
    this.nameService.getMedecin().subscribe(
      (medecins: Medecin[]) => {
        this.medecins = medecins;
      },
      (error) => {
        // console.error(error);
        console.error('Erreur lors de la récupération des médecins ajoutés :', error);
      }
    );
    // Logique pour récupérer les médecins ajoutés
    // this.Medecin = this.nameService.getMedecin();
  }

  constructor(private nameService: NameService) { }
  // constructor(){ }

  ngOnInit(): void {
    this.readData();
    this.fetchMedecins();
    // this.fetchMedecins();

  }
  
  readData(): void {
    this.nameService.readData().subscribe(
      (data) => {
        // Traitement des données récupérées
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Vous pouvez également implémenter les autres méthodes CRUD de manière similaire
}
export interface Medecin {
  id_medecin?: number;
  nom: string;
  prenom: string;
  numero_telephone: string;
  mdp: string;
 
}

