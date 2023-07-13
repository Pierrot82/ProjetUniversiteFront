import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';
import { EtudiantServiceService } from 'src/app/Etudiant/service/etudiant-service.service';
import { Discussion } from 'src/app/model/discussion.model';
import { Etudiant } from 'src/app/model/etudiant.model';
import { DiscussionServiceService } from '../../service/discussion-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant.model';

@Component({
  selector: 'app-creer-question-by-connexion',
  templateUrl: './creer-question-by-connexion.component.html',
  styleUrls: ['./creer-question-by-connexion.component.css']
})
export class CreerQuestionByConnexionComponent {





  constructor(private ens:EnseignantServiceService, private etus:EtudiantServiceService , private route:Router, private ds:DiscussionServiceService, private formBuilder:FormBuilder, private ar:ActivatedRoute){
    this.idUser = ar.snapshot.params["idUser"],
    this.idTo = ar.snapshot.params["idTo"]
  }

  discussionForm!:FormGroup;
  
  disc!:Discussion;
  idUser!:number;
  idTo=null;
  
  
    ngOnInit(): void {
  
  
      this.discussionForm = this.formBuilder.group(
        {
          question:[null],
          date: new FormControl(new Date()),
          id_etudiant: [this.idUser],
          id_destinataire:[this.idTo],
  
          etudiant:[null],
          enseignant:[null],
        }
      )
  
  
    }
  
  saveQuestion(){
  
    
    this.etus.getEtudiantbyId(this.idUser).subscribe(
      (etudiant: Etudiant) => {
        this.discussionForm.value.etudiant = etudiant;
        
        const iDdestinataire = this.discussionForm.value.id_destinataire;
        this.ens.getEnseignantbyId(iDdestinataire).subscribe(
          (enseignant: Enseignant | null) => {
            this.discussionForm.value.enseignant = enseignant;
            this.ds.ajoutDiscussion(this.discussionForm.value).subscribe();
          },
          (error) => {    
            this.ds.ajoutDiscussion(this.discussionForm.value).subscribe();
          }
        );



      }
    );
  

    this.route.navigateByUrl("etudiant/" + this.idUser + "/getListeDiscussion1");
  //  this.ds.ajoutDiscussion(this.discussionForm.value).subscribe();
  //  this.route.navigateByUrl("getListeDiscussion");
  //  this.route.navigateByUrl("getDiscussion/" + this.id);
  // faut récup l'id
  
  }



}
