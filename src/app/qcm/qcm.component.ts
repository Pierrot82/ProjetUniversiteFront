import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../Examen/service/examen.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EtudiantServiceService } from '../Etudiant/service/etudiant-service.service';
import { CopieService } from '../Copie/service/copie.service';
import { NotExpr } from '@angular/compiler';


@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit{
  
     questions!: any[];
     currentQuestion: any;
     selectedOption!: string;
     result!: string;
     isResultCorrect!: boolean ;
     currentIndex!: number;
     isAnswerSelected: boolean = false;
     totalQuestions: number = 0;
     correctAnswers: number = 0;
     buttonText: string = 'Suivant';
     showInstructions: boolean = true;
     examenform!: FormGroup;
     intitule: string = "Examen HTML";
     coef: number = 1;
     date: Date = new Date();
     duree: number = 2;
     idEtudiant!: number;
     idExamen: number = 1;
     roundedScore!:string;

     constructor(private exs:ExamenService, private cs: CopieService, private ets:EtudiantServiceService){
    
    }

  ngOnInit(): void {

    this.questions = [
      {
        id: 0,
        q: "Quelle balise utilisera-t-on de préférence pour le titre principal d'une page html ?",
        a: [
          { text: "<h1>", isCorrect: true },
          { text: "<h6>", isCorrect: false },
          { text: "<head>", isCorrect: 1 },
          { text: "<heading>", isCorrect: 2 }
        ]
      },
      {
        id: 1,
        q: "Quels éléments sont nécessaires pour créer une liste dont les items ne sont pas numérotés ?",
        a: [
          { text: "ul et ol", isCorrect: 1 },
          { text: "ol et li", isCorrect: false },
          { text: "ul et li", isCorrect: true }
        ]
      },
      {
        id: 2,
        q: "Que veut dire HTML ?",
        a: [
          { text: "HyperText Make Language", isCorrect: 1 },
          { text: "HyperText Make Link", isCorrect: 2 },
          { text: "HyperText Markup Language", isCorrect: true },
          { text: "HyperText Markup Link", isCorrect: false }
        ]
      },
      {
        id: 3,
        q: "Le rôle du CSS est de :",
        a: [
          { text: "Définir des formulaires.", isCorrect: 1 },
          { text: "Mettre en forme les éléments html d'une page.", isCorrect: true },
          { text: "Créer des sites e-commerce.", isCorrect: false }
        ]
      },
      {
        id: 4,
        q: "Les commentaires en HTML commencent par <!-- et finissent par -->.",
        a: [
          { text: "Vrai", isCorrect: true },
          { text: "Faux", isCorrect: false }
        ]
      }
    
      
    ];

    this.currentIndex = 0;
    this.totalQuestions = this.questions.length;
    this.loadQuestion(this.currentIndex);
  }

  loadQuestion(index: number): void {
    this.currentQuestion = this.questions[index];
    this.selectedOption = "";
    this.result = "";
    this.isResultCorrect = false;
    this.isAnswerSelected = false;
  }

  evaluateAnswer(): void {
    if (this.selectedOption === "true") {
      this.result = "Bonne réponse ! ";
      this.isResultCorrect = true;
      this.correctAnswers++;
    } else {
      this.result = "Mauvaise réponse.";
      this.isResultCorrect = false;
    const correctOption = this.currentQuestion.a.find((option: { isCorrect: boolean; }) => option.isCorrect === true);
    this.result += " La bonne réponse était : " + correctOption.text;
    }
    this.isAnswerSelected = true;
  }

  nextQuestion(): void {
    if (this.isAnswerSelected) {
      this.currentIndex++;
      if (this.currentIndex < this.questions.length) {
        this.loadQuestion(this.currentIndex);
        if (this.currentIndex === this.totalQuestions - 1) {
          this.buttonText = 'Terminer le Qcm';
          
        }
      } else {
        // Toutes les questions ont été répondues, calcul de la note sur 20
        const score = (this.correctAnswers / this.totalQuestions) * 20;
        this.roundedScore = score.toFixed(1); // Arrondi à une décimale

        if (score >= 5) {
          alert("Félicitations ! Votre note est " + this.roundedScore + "/20");
          this.ajoutCopie(this.idEtudiant, this.idExamen, this.roundedScore);
        } else {
          alert("Recalé. Votre note est " + this.roundedScore + "/20");
          this.ajoutCopie(this.idEtudiant, this.idExamen, this.roundedScore);
        }
      }
      
    }
  }

  startQuiz(): void {
    this.showInstructions = false;
    this.loadQuestion(this.currentIndex);
  }

  isAnswerDisabled(): boolean {
    return this.isAnswerSelected;
  }

  ajoutCopie(idEtudiant:number, idExamen:number, note: string): void {
    this.cs.ajoutCopie(idEtudiant, idExamen, parseFloat(note)).subscribe();
  }
}
