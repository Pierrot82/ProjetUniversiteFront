import { Component, OnInit } from '@angular/core';
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



      const selectedMatiereId = this.formPostulant.value.idMatiere;
  
      if (selectedMatiereId) {
        this.ms.getMatiere(selectedMatiereId).subscribe(
          (matiere: Matiere) => {
            this.formPostulant.value.matiere = matiere;
          }
        );
      }
    
    // bizzarrd ce truc : 
    this.formPostulant.value.matiere.idMatiere=this.formPostulant.value.matiere.idMatiere
  //  this.formPostulant.value.matiere = this.ms.getMatiere(this.formPostulant.value.idMatiere)
    

    this.isSave = await this.savePostulant();
    
  }
}
