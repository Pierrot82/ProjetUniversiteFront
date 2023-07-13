import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscussionServiceService } from '../service/discussion-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Discussion } from 'src/app/model/discussion.model';
import { FormControl } from '@angular/forms';
import { EtudiantServiceService } from 'src/app/Etudiant/service/etudiant-service.service';
import { Etudiant } from 'src/app/model/etudiant.model';
import { Enseignant } from 'src/app/model/enseignant.model';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';

@Component({
  selector: 'app-creer-question',
  templateUrl: './creer-question.component.html',
  styleUrls: ['./creer-question.component.css']
})
export class CreerQuestionComponent implements OnInit {

constructor(private ens:EnseignantServiceService, private etus:EtudiantServiceService , private route:Router, private ds:DiscussionServiceService, private formBuilder:FormBuilder){}

discussionForm!:FormGroup;

disc!:Discussion;


  ngOnInit(): void {


    this.discussionForm = this.formBuilder.group(
      {
        question:[null],
        date: new FormControl(new Date()),
        id_etudiant: [null],
        id_destinataire:[null],

        etudiant:[null],
        enseignant:[null],
      }
    )


  }

saveQuestion(){

  const idEtudiant = this.discussionForm.value.id_etudiant;
  this.etus.getEtudiantbyId(idEtudiant).subscribe(
    (etudiant: Etudiant) => {
      this.discussionForm.value.etudiant = etudiant;
      this.ds.ajoutDiscussion(this.discussionForm.value).subscribe();
    },
    (error) => {    

    }
  );

  const iDdestinataire = this.discussionForm.value.id_destinataire;
  this.ens.getEnseignantbyId(iDdestinataire).subscribe(
    (enseignant: Enseignant) => {
      this.discussionForm.value.enseignant = enseignant;
      this.ds.ajoutDiscussion(this.discussionForm.value).subscribe();
    },
    (error) => {    

    }
  );

  this.route.navigateByUrl("getListeDiscussion");
//  this.ds.ajoutDiscussion(this.discussionForm.value).subscribe();
//  this.route.navigateByUrl("getListeDiscussion");
//  this.route.navigateByUrl("getDiscussion/" + this.id);
// faut récup l'id

}


}
