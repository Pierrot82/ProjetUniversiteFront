import { Component, OnInit } from '@angular/core';
import { DiscussionServiceService } from '../service/discussion-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Discussion } from 'src/app/model/discussion.model';
import { Observable } from 'rxjs';
import { Reponse } from 'src/app/model/reponse.model';

@Component({
  selector: 'app-get-discussion',
  templateUrl: './get-discussion.component.html',
  styleUrls: ['./get-discussion.component.css']
})
export class GetDiscussionComponent implements OnInit {

  id!:number;
//  reponseForm!:FormGroup;

  question!:Observable<Discussion>;
 reponses!:Observable<Reponse[]>;


constructor(private ds:DiscussionServiceService, private route:Router, private formBuilder:FormBuilder, private ar:ActivatedRoute){
  this.id= ar.snapshot.params["id"];
}

  ngOnInit(): void {
    this.question = this.ds.getDiscussionbyId(this.id);


   this.reponses=this.ds.getReponsesDiscussionbyId(this.id);

 // console.log(this.question)

  }

  repondre(id:number){
    this.route.navigateByUrl("repondreDiscussion/" + id);
  }

  



}
