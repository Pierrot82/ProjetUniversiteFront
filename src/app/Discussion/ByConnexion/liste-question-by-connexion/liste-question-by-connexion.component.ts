import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Discussion } from 'src/app/model/discussion.model';
import { Enseignant } from 'src/app/model/enseignant.model';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';
import { DiscussionServiceService } from '../../service/discussion-service.service';

@Component({
  selector: 'app-liste-question-by-connexion',
  templateUrl: './liste-question-by-connexion.component.html',
  styleUrls: ['./liste-question-by-connexion.component.css']
})
export class ListeQuestionByConnexionComponent implements OnInit{




    constructor(private ens:EnseignantServiceService, private ds:DiscussionServiceService, private route:Router, private ar:ActivatedRoute){
      this.idUser = ar.snapshot.params["idUser"];
      this.classe = ar.snapshot.params["classe"];
    }
    
    classe!:string
    idUser!:number;
    listeDiscussion!:Observable<Discussion[]>;
  
    isEnseigant!:boolean;
    enseignant!:any;
    
    ngOnInit(): void {
      
      this.listeDiscussion = this.ds.findAllDiscussionbyId1(this.idUser);
      console.log(this.listeDiscussion);

      this.ens.getEnseignantbyId(this.idUser).subscribe(
        (enseignant: Enseignant | null ) => {
          this.enseignant = enseignant;
        },
        (error) => {    
          // this.enseignant=null;
        }
      );;




    }


    poserUneQuestion(){
      
      this.route.navigate(["../ajouterDiscussion"], { relativeTo: this.ar });
    }


    selecionnerDiscussion(id:number){
      
//      this.ds.getDiscussionbyId(id);
      this.route.navigate(["../getDiscussion/" + id], { relativeTo: this.ar });
    }
  
  
    // supprimer 
    supprimerQuestion(id:number){
      this.ds.supprimerDiscussion(id).subscribe();
      this.route.navigate(["../getListeDiscussion1"], { relativeTo: this.ar });
    }
  
    //modifier
//    getEnseignantByEnseignant(id:number){
//      this.route.navigateByUrl("updateEnseignant/" + id);
//    }









}
