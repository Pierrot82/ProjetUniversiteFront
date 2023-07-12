import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {

    

    this.questions = [
      {
        id: 0,
        q: "Quelle balise utilisera-t-on de préférence pour le titre principal d'une page html:",
        a: [
          { text: "<h1>", isCorrect: true },
          { text: "<h6>", isCorrect: false },
          { text: "<head>", isCorrect: 1 },
          { text: "<heading>", isCorrect: 2 }
        ]
      },
      {
        id: 1,
        q: "What is the capital of Thailand?",
        a: [
          { text: "Lampang", isCorrect: 1 },
          { text: "Phuket", isCorrect: 2 },
          { text: "Ayutthaya", isCorrect: false },
          { text: "Bangkok", isCorrect: true }
        ]
      },
      {
        id: 2,
        q: "What is the capital of Gujarat?",
        a: [
          { text: "Surat", isCorrect: 1 },
          { text: "Vadodara", isCorrect: 2 },
          { text: "Gandhinagar", isCorrect: true },
          { text: "Rajkot", isCorrect: false }
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
      this.result = "Bonne réponse";
      this.isResultCorrect = true;
      this.correctAnswers++;
    } else {
      this.result = "false";
      this.isResultCorrect = false;
    }
    this.isAnswerSelected = true;
  }

  nextQuestion(): void {
    if (this.isAnswerSelected) {
      this.currentIndex++;
      if (this.currentIndex < this.questions.length) {
        this.loadQuestion(this.currentIndex);
      } else {
        // Toutes les questions ont été répondues, calcul de la note sur 10
        const score = (this.correctAnswers / this.totalQuestions) * 10;
        const roundedScore = score.toFixed(1); // Arrondi à une décimale
        if (score >= 5) {
          alert("Félicitations ! Votre note est " + roundedScore + "/10");
        } else {
          alert("Recalé. Votre note est " + roundedScore + "/10");
        }
      }
    }
  }
  isAnswerDisabled(): boolean {
    return this.isAnswerSelected;
  }
}
