import { Component } from '@angular/core';
// import { NameService } from './name.service';

@Component({
  selector: 'app-compte-medecin',
  templateUrl: './compte-medecin.component.html',
  styleUrls: ['./compte-medecin.component.scss']
})
export class CompteMedecinComponent {
  image='image1.jpg';
  response=""
  // constructor(private nameService:NameService){

  // }

  onSend(numero_telephone:string){
    const formData : FormData = new FormData()
    formData.append('numero_telephone',numero_telephone)
    // this.nameService.onSendService(formData).subscribe()
    // (res=>{
    //   console.log(res);
    //   this.response=res
    // },
    // err=>{
    //   console.log(err);
    // })
  }
}
