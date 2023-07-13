import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscussionServiceService } from '../service/discussion-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { Discussion } from 'src/app/model/discussion.model';
import { EtudiantServiceService } from 'src/app/Etudiant/service/etudiant-service.service';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';
import { Etudiant } from 'src/app/model/etudiant.model';
import { Enseignant } from 'src/app/model/enseignant.model';
import { PersonneServiceService } from 'src/app/Personne/service/personne-service.service';

@Component({
  selector: 'app-repondre',
  templateUrl: './repondre.component.html',
  styleUrls: ['./repondre.component.css']
})
export class RepondreComponent implements OnInit{

  constructor(private ps:PersonneServiceService, private enss:EnseignantServiceService ,private etus:EtudiantServiceService ,private route:Router, private ds:DiscussionServiceService, private formBuilder:FormBuilder, private ar:ActivatedRoute){

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
        id_personne:[null],

        personne:[null],
        enseignant:[null],
      }
    )

    this.discussion$ = this.ds.getDiscussionbyId(this.id);
    this.discussion$.subscribe((discussion: Discussion) => {
      this.reponseForm.controls['discussion'].setValue(discussion); // Mise à jour du formulaire avec la discussion
    });


  }


  saveReponse(){

    const idPersonne = this.reponseForm.value.id_personne;
    this.etus.getEtudiantbyId(idPersonne).subscribe(
      (etudiant: Etudiant | null) => {
        this.reponseForm.value.etudiant = etudiant;
        this.ds.ajoutReponse(this.reponseForm.value).subscribe();
      }
    );
    this.enss.getEnseignantbyId(idPersonne).subscribe(
      (enseignant: Enseignant | null) => {
        this.reponseForm.value.enseignant = enseignant;
        this.ds.ajoutReponse(this.reponseForm.value).subscribe();
      }
    );



//      console.log(idPersonne)

//    this.ds.ajoutReponse(this.reponseForm.value).subscribe();
    this.route.navigateByUrl("getDiscussion/" + this.id).then(() => {
      this.route.navigate(["getDiscussion/" + this.id], { replaceUrl: true });
    });
  }
  



}
