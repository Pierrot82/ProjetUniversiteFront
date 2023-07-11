import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscussionServiceService } from '../service/discussion-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Discussion } from 'src/app/model/discussion.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-creer-question',
  templateUrl: './creer-question.component.html',
  styleUrls: ['./creer-question.component.css']
})
export class CreerQuestionComponent implements OnInit {

constructor(private route:Router, private ds:DiscussionServiceService, private formBuilder:FormBuilder){}

discussionForm!:FormGroup;




  ngOnInit(): void {


    this.discussionForm = this.formBuilder.group(
      {
        question:[null],
        date: new FormControl(new Date())
      }
    )


  }

saveQuestion(){
  this.ds.ajoutDiscussion(this.discussionForm.value).subscribe();
  this.route.navigateByUrl("getListeDiscussion");
//  this.route.navigateByUrl("getDiscussion/" + this.id);
// faut récup l'id

}


}
