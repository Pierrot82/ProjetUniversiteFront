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
  
  
    // supprimer 
    supprimerQuestion(id:number){
      this.ds.supprimerDiscussion(id).subscribe();
      this.route.navigateByUrl("listeDiscussion")
    }
    
    
  
    //modifier
//    getDiscussionByDiscussion(id:number){
//      this.route.navigateByUrl("updateDiscussion/" + id);
//    }


}