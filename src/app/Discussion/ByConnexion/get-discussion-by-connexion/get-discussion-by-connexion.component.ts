import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Discussion } from 'src/app/model/discussion.model';
import { Reponse } from 'src/app/model/reponse.model';
import { DiscussionServiceService } from '../../service/discussion-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Enseignant } from 'src/app/model/enseignant.model';

@Component({
  selector: 'app-get-discussion-by-connexion',
  templateUrl: './get-discussion-by-connexion.component.html',
  styleUrls: ['./get-discussion-by-connexion.component.css']
})
export class GetDiscussionByConnexionComponent implements OnInit{

  
  idUser!:number;
//  reponseForm!:FormGroup;

  question!:Observable<Discussion>;
 reponses!:Observable<Reponse[]>;

 idDiscussion!:number;
 

constructor(private ds:DiscussionServiceService, private route:Router, private formBuilder:FormBuilder, private ar:ActivatedRoute){
  this.idUser= ar.snapshot.params["idUser"];

  this.idDiscussion= ar.snapshot.params["idDiscussion"];
}

  ngOnInit(): void {
    this.question = this.ds.getDiscussionbyId(this.idDiscussion);


   this.reponses=this.ds.getReponsesDiscussionbyId(this.idDiscussion);

   

  console.log(this.question)

  }

  repondre(){
    this.route.navigate(["../../getDiscussion/" + this.idDiscussion+"/repondre"], { relativeTo: this.ar });
  
  }


}
