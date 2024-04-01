
import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { MedecinAjouteComponent } from './medecin-ajoute/medecin-ajoute.component';

// import { NameService } from './name.service';

@Component({
  selector: 'app-compte-medecin',
  templateUrl: './compte-medecin.component.html',
  styleUrls: ['./compte-medecin.component.scss']
})
export class CompteMedecinComponent implements OnInit{
  nom: string='';
  prenom: string='';
  numero_telephone: string='';
  mdp: string='';
  
  image='image1.jpg';
  response=""
  // ,private medecinAjouteComponent: MedecinAjouteComponent
  constructor(private http: HttpClient, private nameService : NameService, private router:Router ){  }
  
  createData(): void {
    
    const medecinData = {
      nom: this.nom,
      prenom: this.prenom,
      numero_telephone: this.numero_telephone,
      mdp: this.mdp
    };

    this.nameService.createData(medecinData).subscribe(
      (response) => {
        // Gérer la réponse du serveur si nécessaire
        console.log('Compte médecin créé avec succès !');
        // this.medecinAjouteComponent.fetchMedecins();
      },
      (error) => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la création du compte médecin :', error);
      }
    );
  }
  // valider(): void {
  //   // Collectez les données du formulaire
  //   const medecinData = {
  //     nom: this.nom,
  //     prenom: this.prenom,
  //     telephone: this.telephone,
  //     mdp: this.mdp
  //   };
  // }
  

  ngOnInit(): void {
      this.nameService.getMedecin().subscribe(
        (res:any) => {
          console.log(res.data);
        }
      )
  }

  redirecToMedecinAjoute(){
    // this.router.navigateByUrl("/medecin-ajoute")
    // this.router.navigateByUrl("http://localhost:8001/creerMedecin.php")
    window.location.href = "http://localhost:8001/creerMedecin.php";
    
  }
  // redirectToMedecinAjoute(){
  //   window.location.href = "http://localhost:8001/creerMedecin.php";
  //   // this.router.navigateByUrl("/medecin-ajoute")
  // }

  // onSend(numero_telephone:string){
    // const formData : FormData = new FormData()
    // formData.append('numero_telephone',numero_telephone)
    // // this.nameService.onSendService(formData).subscribe()
    // (res=>{
    //   console.log(res);
    //   this.response=res
    // },
    // err=>{
    //   console.log(err);
    // })
  }