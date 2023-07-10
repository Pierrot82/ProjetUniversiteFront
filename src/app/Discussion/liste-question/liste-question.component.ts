import { Component, OnInit } from '@angular/core';
import { DiscussionServiceService } from '../service/discussion-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Discussion } from 'src/app/model/discussion.model';

@Component({
  selector: 'app-liste-question',
  templateUrl: './liste-question.component.html',
  styleUrls: ['./liste-question.component.css']
})
export class ListeQuestionComponent implements OnInit{



    constructor(private ds:DiscussionServiceService, private route:Router){}
  
      listeDiscussion!:Observable<Discussion[]>;
  
  
    
    ngOnInit(): void {
      
      this.listeDiscussion = this.ds.findAllDiscussion();
      console.log(this.listeDiscussion);
    }


    poserUneQuestion(){
      this.route.navigateByUrl("ajouterDiscussion")
    }


    selecionnerDiscussion(id:number){
//      this.ds.getDiscussionbyId(id);
      this.route.navigateByUrl("getDiscussion/" + id);
    }
  
  
//    // supprimer 
//    supprimerEnseignant(id:number){
//      this.es.supprimerEnseignant(id).subscribe();
//      this.route.navigateByUrl("listeEnseignant")
    
  
    //modifier
//    getEnseignantByEnseignant(id:number){
//      this.route.navigateByUrl("updateEnseignant/" + id);
//    }


}