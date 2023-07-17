import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExamenService } from '../../service/examen.service';
import { CopieService } from 'src/app/Copie/service/copie.service';
import { EtudiantServiceService } from 'src/app/Etudiant/service/etudiant-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/model/examen.model';
import { QcmQuestion } from 'src/app/model/qcm-question.model';
import { QcmProposition } from 'src/app/model/qcm-proposition.model';

@Component({
  selector: 'app-creer-qcm',
  templateUrl: './creer-qcm.component.html',
  styleUrls: ['./creer-qcm.component.css']
})
export class CreerQcmComponent implements OnInit{

  isAnswerSelected: boolean = false;
  showInstructions: boolean = true;
  listeQuestionEtProposition!: FormGroup;
  idExamen;

  constructor(private exs:ExamenService, private formBuilder:FormBuilder, private cs: CopieService, private ets:EtudiantServiceService, private ar:ActivatedRoute, private route:Router){
    this.idExamen = this.ar.snapshot.params["idExamen"];
 }

ngOnInit(): void {

 this.listeQuestionEtProposition = this.formBuilder.group(
   {
    intituleQuestion:[null],
    bonChoix: [null],
    examen: [null],

     proposition1:[null],
     proposition2:[null],
     proposition3:[null],
     proposition4:[null],
     proposition:[null],
     choixN:[null],
     qcmQuestion:[null],

   }
 )

}


startQuiz(): void {
 this.showInstructions = false;
 this.isAnswerSelected = false;
}

isAnswerDisabled(): boolean {
 return this.isAnswerSelected;
}


terminer(){
  this.ajoutQuestion();
  this.route.navigate(["../.."], { relativeTo: this.ar });
}

ajoutQuestion(): void {
  this.isAnswerSelected = true;

  this.exs.getExamenbyId(this.idExamen).subscribe(
    (examen: Examen) => {
      this.listeQuestionEtProposition.value.examen = examen;

      
      this.exs.saveQcmQuestion(this.listeQuestionEtProposition.value).subscribe(
        (qcmQuestion: QcmQuestion) => {
          this.listeQuestionEtProposition.value.qcmQuestion = qcmQuestion;

          var i=0;
          for (const prop of [ this.listeQuestionEtProposition.value.proposition1, this.listeQuestionEtProposition.value.proposition2, this.listeQuestionEtProposition.value.proposition3, this.listeQuestionEtProposition.value.proposition4]){
            i = i+1;
            if (prop != null && prop != ""){
              this.listeQuestionEtProposition.value.choixN = i;
              this.listeQuestionEtProposition.value.proposition = prop
              this.exs.saveQcmProposition(this.listeQuestionEtProposition.value).subscribe()
            }}

            this.listeQuestionEtProposition.reset();  
          }
        );

});


  
}




}
