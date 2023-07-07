import { Component, OnInit } from '@angular/core';
import { EnseignantServiceService } from '../service/enseignant-service.service';
import { Enseignant } from 'src/app/model/enseignant.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-enseignant',
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.css']
})
export class ListeEnseignantComponent implements OnInit{

  constructor(private es:EnseignantServiceService, private route:Router){}

    listeEnseignant!:Observable<Enseignant[]>;


  
  ngOnInit(): void {
    
    this.listeEnseignant = this.es.findAllEnseignant();
  }


  // supprimer 

  //modifier

}