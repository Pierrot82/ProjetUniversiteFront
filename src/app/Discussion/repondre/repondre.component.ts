import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscussionServiceService } from '../service/discussion-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Discussion } from 'src/app/model/discussion.model';

@Component({
  selector: 'app-repondre',
  templateUrl: './repondre.component.html',
  styleUrls: ['./repondre.component.css']
})
export class RepondreComponent implements OnInit{

  constructor(private route:Router, private ds:DiscussionServiceService, private formBuilder:FormBuilder, private ar:ActivatedRoute){

    this.id = this.ar.snapshot.params["id"];
  }

  id:number;
  reponseForm!:FormGroup;
  discussion$!: Observable<Discussion>


  ngOnInit(): void {
    this.reponseForm = this.formBuilder.group(
      {
        reponse:[null],
        date: new FormControl(new Date()),
        discussion: new FormControl( null ),
      }
    )

    this.discussion$ = this.ds.getDiscussionbyId(this.id);
    this.discussion$.subscribe((discussion: Discussion) => {
      this.reponseForm.controls['discussion'].setValue(discussion); // Mise à jour du formulaire avec la discussion
    });


  }


  saveReponse(){
    this.ds.ajoutReponse(this.reponseForm.value).subscribe();
    this.route.navigateByUrl("getDiscussion/" + this.id);
  }





}
