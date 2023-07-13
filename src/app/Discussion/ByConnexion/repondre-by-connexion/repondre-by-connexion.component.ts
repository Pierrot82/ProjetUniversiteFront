import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';
import { EtudiantServiceService } from 'src/app/Etudiant/service/etudiant-service.service';
import { PersonneServiceService } from 'src/app/Personne/service/personne-service.service';
import { Discussion } from 'src/app/model/discussion.model';
import { Enseignant } from 'src/app/model/enseignant.model';
import { Etudiant } from 'src/app/model/etudiant.model';
import { DiscussionServiceService } from '../../service/discussion-service.service';

@Component({
  selector: 'app-repondre-by-connexion',
  templateUrl: './repondre-by-connexion.component.html',
  styleUrls: ['./repondre-by-connexion.component.css']
})
export class RepondreByConnexionComponent implements OnInit{


  constructor(private ps:PersonneServiceService, private enss:EnseignantServiceService ,private etus:EtudiantServiceService ,private route:Router, private ds:DiscussionServiceService, private formBuilder:FormBuilder, private ar:ActivatedRoute){

    this.idUser = ar.snapshot.params["idUser"];
    this.idDiscussion= ar.snapshot.params["idDiscussion"]
  }

  idUser:number;
  reponseForm!:FormGroup;
  discussion$!: Observable<Discussion>
  idDiscussion!:number;

  ngOnInit(): void {
    this.reponseForm = this.formBuilder.group(
      {
        reponse:[null],
        date: new FormControl(new Date()),
        dateTime: new FormControl(new Date()),

        discussion: new FormControl( null ),
        id_personne:[this.idUser],

        personne:[null],
        enseignant:[null],
      }
    )

    this.discussion$ = this.ds.getDiscussionbyId(this.idDiscussion);
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

/*
this.route.navigate(["../getDiscussion/" + this.idDiscussion], { relativeTo: this.ar }).then(() => {
      this.route.navigate(["etudiant/" + this.idUser + "/getDiscussion/" + this.idDiscussion], { replaceUrl: true });
    });
  }
  */
  this.route.navigate([".."], { relativeTo: this.ar })







  }


  retourListe(){
  
  
  
  
  
    this.route.navigate(["../../../getListeDiscussion1"], { relativeTo: this.ar });
  
  }





}
