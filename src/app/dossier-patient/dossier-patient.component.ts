import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dossier-patient',
  templateUrl: './dossier-patient.component.html',
  styleUrls: ['./dossier-patient.component.scss']
})
export class DossierPatientComponent implements OnInit{
  
  public getJsonValue: any;
  public postJsonValue: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getMethod();
    this.postMethod();

  }

  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      console.log(data);
      this.getJsonValue=data;
    });
  }

  public postMethod(){
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body = {
      title: 'quick',
      body: 'code',
      userId: 1,
    };
    this.http.post('https://jsonplaceholder.typicode.com/posts',body, {headers: header}).subscribe((data)=>{
        console.log(data);
        this.getJsonValue=data;
      });
  }


}




