import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostulantService } from '../service/postulant.service';
import { __await } from 'tslib';
import { MatiereServiceService } from 'src/app/Matiere/service/matiere-service.service';
import { Matiere } from 'src/app/model/matiere.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-postulant',
  templateUrl: './form-postulant.component.html',
  styleUrls: ['./form-postulant.component.css']
})
export class FormPostulantComponent implements OnInit {

  constructor(private ms:MatiereServiceService, private formBuilder:FormBuilder,private postulantService:PostulantService){}
  formPostulant!:FormGroup;
  isSave!:boolean;
  listeMatiere!:Observable<Matiere[]>;
  messagePostForm!:string;
  selectedMatiereId!:number;
  @ViewChild('resetButtonRef') resetButton!: ElementRef;

  ngOnInit(): void {
    this.listeMatiere = this.ms.findAllMatiere();
    
   this.formPostulant = this.formBuilder.group(
      {
        id:[null],
        nom:[null],
        prenom:[null],
        email:[null],
        idMatiere:[null],
        matiere:[null],
        dateNaissance:[null],
        cv:[null],
        fichiers:[null],
        statut:["En attente"]
      }
    )
  }

  onReset(){
    this.formPostulant.reset();
  }

  savePostulant(): Promise<boolean> {
    this.formPostulant.get("statut")?.setValue("En attente");
    
    return new Promise<boolean>((resolve, reject) => {
      this.postulantService.savePostulantMatiere(this.formPostulant.value, this.formPostulant.value.idMatiere).subscribe(
        result => {
          this.isSave = result;
          resolve(this.isSave);
        }
      );
    });
  }

  async savePostulantAwait(){

    this.isSave = await this.savePostulant();
    

    if(this.isSave){
      this.messagePostForm= "Votre candidature a bien été prise en compte nous vous répondrons dans les plus bref délais!"
    }
    else{
    this.messagePostForm= "Votre candidature n'a pas aboutis veuillez réessayer ou contacter le support"
    }
    this.onReset();
  }
}
