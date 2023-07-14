import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostulantService } from '../service/postulant.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-form-postulant',
  templateUrl: './form-postulant.component.html',
  styleUrls: ['./form-postulant.component.css']
})
export class FormPostulantComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private postulantService:PostulantService){}
  formPostulant!:FormGroup;
  isSave!:boolean;
  messagePostForm!:string;

  ngOnInit(): void {
   this.formPostulant = this.formBuilder.group(
      {
        id:[null],
        nom:[null],
        prenom:[null],
        dateNaissance:[null],
        cv:[null],
        fichiers:[null],
        statut:["En attente"]
      }
    )
  }

  savePostulant(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.postulantService.savePostulant(this.formPostulant.value).subscribe(
        result => {
          this.isSave = result;
          resolve(this.isSave);
        }
      );
    });
  }

  async savePostulantAwait(){
    this.formPostulant.get("statut")?.setValue("En attente");
    this.isSave = await this.savePostulant();

    if(this.isSave){
      this.messagePostForm= "Votre candidature a bien été prise en compte nous vous répondrons dans les plus bref délais!"
    }
    else
    this.messagePostForm= "Votre candidature n'a pas aboutis veuillez réessayer ou contacter le support"
  }
}
