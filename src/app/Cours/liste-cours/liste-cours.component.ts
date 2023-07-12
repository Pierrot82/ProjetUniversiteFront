import { Component, OnInit } from '@angular/core';
import { CoursServiceService } from '../service/cours-service.service';
import { Cours } from 'src/app/model/cours.model';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit{

  constructor(private cs:CoursServiceService, private route:Router){}

    listeCours!:Observable<Cours[]>;
    listeMoyennesNotesCours!:Observable<number[]>;
    coursRecup!:Cours;


  
  ngOnInit(): void { 
    this.listeCours = this.cs.listeCours();
    this.listeMoyennesNotesCours = this.cs.getListeMoyennesNotesCours();
  }

  getCours(id:number):Promise<Cours>{
    return new Promise<Cours>((resolve, reject) => {
      this.cs.getCourstbyId(id).subscribe(
        result => {
          this.coursRecup = result;
          resolve(this.coursRecup);
        }
      );
    });
  }

  async note(note:number, id:number){
    this.coursRecup = await this.getCours(id);
    if(note == 1){
      this.coursRecup.un = this.coursRecup.un + 1;
    }
    else if(note == 2){
      this.coursRecup.deux = this.coursRecup.deux + 1;
    }
    else if(note == 3){
      this.coursRecup.trois = this.coursRecup.trois + 1;
    }
    else if(note == 4){
      this.coursRecup.quatre = this.coursRecup.quatre + 1;
    }
    else
    this.coursRecup.cinq = this.coursRecup.cinq + 1;

    this.cs.modifierNoteCours(this.coursRecup).subscribe();
  }
}
