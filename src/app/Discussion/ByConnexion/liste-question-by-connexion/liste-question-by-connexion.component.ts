import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Discussion } from 'src/app/model/discussion.model';
import { Enseignant } from 'src/app/model/enseignant.model';
import { DiscussionServiceService } from '../../service/discussion-service.service';
import { Reponse } from 'src/app/model/reponse.model';

@Component({
  selector: 'app-liste-question-by-connexion',
  templateUrl: './liste-question-by-connexion.component.html',
  styleUrls: ['./liste-question-by-connexion.component.css']
})
export class ListeQuestionByConnexionComponent implements OnInit{



    constructor(private ds:DiscussionServiceService, private route:Router, private ar:ActivatedRoute){
      this.idUser = ar.snapshot.params["idUser"];
      this.classe = ar.snapshot.params["classe"];
    }
    
    classe!:string
    idUser!:number;
    listeDiscussion!:Observable<Discussion[]>;
    listeLastRep!:Observable<Reponse[]>;
  
    reponseObs!:Observable<Reponse>;

    listeDiscussionFixe!:Discussion[];
    listeLastReponseFixe!:Reponse[];

    
    async  ngOnInit() {

      this.listeDiscussion = this.ds.findAllDiscussionbyId1(this.idUser);
//      this.listeLastRep = this.ds.getAllLastReponsesByIdDiscussion(this.idUser)

// this.listeDiscussionFixe= await this.listeDiscussion1();
this.listeLastReponseFixe= await this.listeLastReponse1();
    

    }


    listeDiscussion1():Promise<Discussion[]> {
      return new Promise<Discussion[]>((resolve, reject) => {
        this.ds.findAllDiscussionbyId1(this.idUser).subscribe(
          result => {
            this.listeDiscussionFixe = result;
            resolve(this.listeDiscussionFixe);
          }
        );
      });
    }
    listeLastReponse1():Promise<Reponse[]> {
      return new Promise<Reponse[]>((resolve, reject) => {
        this.ds.getAllLastReponsesByIdDiscussion(this.idUser).subscribe(
          result => {
            this.listeLastReponseFixe = result;
            resolve(this.listeLastReponseFixe);
          }
        );
      });
    }



    


    poserUneQuestion(){
      this.route.navigate(["../ajouterDiscussion"], { relativeTo: this.ar });
    }


    selecionnerDiscussion(id:number){
      this.route.navigate(["../getDiscussion/" + id], { relativeTo: this.ar });
    }
  
  
    // supprimer 
    supprimerQuestion(id:number){
      this.ds.supprimerDiscussion(id).subscribe();
      this.route.navigate(["../getListeDiscussion1"], { relativeTo: this.ar });
    }
  



lastReponseObs!: Observable<Reponse>;
reponseObs87_1 = this.ds.getReponsebyId(87)
lastReponse_(id:number){
  this.reponseObs = this.ds.getReponsebyId(87)
  this.reponseObs = this.reponseObs87_1
  return this.reponseObs;
}






}
