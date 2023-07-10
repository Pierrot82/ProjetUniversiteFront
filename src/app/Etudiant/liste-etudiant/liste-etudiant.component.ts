import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EtudiantServiceService } from '../service/etudiant-service.service';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant.model';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit{


  constructor(private etu:EtudiantServiceService, private route:Router) {}
  getListeEtudiant!: Observable<Etudiant[]>;
  ngOnInit(): void {
  this.getListeEtudiant = this.etu.getListeEtudiant();
}
}
