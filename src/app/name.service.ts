import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

// Définir le modèle de données Medecin
export interface Medecin {
  id_medecin: number;
  nom: string;
  prenom: string;
  numero_telephone: string;
  mdp: string;
}

@Injectable({
  providedIn: 'root'
})

export class NameService {

  // baseUrl = 'http://localhost:8001/web_api';
  baseUrl = 'http://localhost:8001/';


  constructor(private http:HttpClient) { }
  onSendService(fromData: FormData):Observable<any>{
    return this.http.post<any>('http://localhost:4200/projetUML', fromData)
  }
  // getMedecins() {
    
  // }
  // getMedecin(){
  //   return this.http.get(this.baseUrl+'view.php');
  // }
  getMedecin(): Observable<Medecin[]> {
    // return this.http.get<Medecin[]>('http://localhost/web_api/medecins');
    return this.http.get<Medecin[]>(`${this.baseUrl}/db/view.php`);
    
  }

// ----------------METHODES----------------------------
  createData(data: any): Observable<any> {
    return this.http.post('http://localhost:8001/create', data);
  }

  readData(): Observable<any> {
    return this.http.get('http://localhost:8001/read');
  }

  updateData(data: any): Observable<any> {
    return this.http.put('http://localhost:8001/update', data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8001/delete/${id}`);
  }

}
