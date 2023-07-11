import { Component, OnInit } from '@angular/core';
import { CoursServiceService } from '../service/cours-service.service';
import { Cours } from 'src/app/model/cours.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit{

  constructor(private cs:CoursServiceService, private route:Router){}

    listeCours!:Observable<Cours[]>;


  
  ngOnInit(): void {
    
    this.listeCours = this.cs.listeCours();
  }
}
