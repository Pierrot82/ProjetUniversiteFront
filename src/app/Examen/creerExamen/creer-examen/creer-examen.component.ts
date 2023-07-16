import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../service/examen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';
import { Enseignant } from 'src/app/model/enseignant.model';
import { Examen } from 'src/app/model/examen.model';

@Component({
  selector: 'app-creer-examen',
  templateUrl: './creer-examen.component.html',
  styleUrls: ['./creer-examen.component.css']
})
export class CreerExamenComponent implements OnInit {




  constructor(private ens:EnseignantServiceService ,private exs:ExamenService, private route:Router, private formBuilder:FormBuilder, private ar:ActivatedRoute) {
    this.idUser = ar.snapshot.params["idUser"];
  }  
  
idUser;
examinForm!:FormGroup;




  ngOnInit(): void {
    
    this.examinForm = this.formBuilder.group(
      {
        intitule:[null],
        coef:[null],
        date:[null],
        duree:[null],
        matiere:[null],
      }
    )


  }


  creerQcm(){



    this.ens.getEnseignantbyId(this.idUser).subscribe(
      (enseignant: Enseignant) => {
        this.examinForm.value.matiere = enseignant.matiere;
      

        this.exs.saveExamen(this.examinForm.value).subscribe(
          (examen: Examen) => {
          this.route.navigateByUrl("enseignant/" + this.idUser + "/creerExamen/" + examen.idExamen +"/creerQcm")
        });

  });


  }









}
