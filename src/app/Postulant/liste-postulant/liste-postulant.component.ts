import { Component, OnInit } from '@angular/core';
import { PostulantService } from '../service/postulant.service';
import { Observable } from 'rxjs';
import { Postulant } from 'src/app/model/postulant.model';
import { Router } from '@angular/router';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';
import { Enseignant } from 'src/app/model/enseignant.model';

@Component({
  selector: 'app-liste-postulant',
  templateUrl: './liste-postulant.component.html',
  styleUrls: ['./liste-postulant.component.css']
})
export class ListePostulantComponent implements OnInit {


  constructor(private postulantService:PostulantService,private enseignantService:EnseignantServiceService, private route:Router){}

  listePostulant!:Observable<Postulant[]>;
  postulantRefuser!:Postulant;
  postulantAccepter!:Postulant;
  enseigantPostPostulation!:Enseignant;
  date!:Date;

  ngOnInit(): void {
    this.listePostulant = this.postulantService.findAllPostulant();
  }

  deletePostulant(id:number){
    this.postulantService.deletePostulant(id).subscribe();
    this.route.navigateByUrl("listePostulant");
  }

  refuserPostulant(id:number){
    this.postulantService.getPostulant(id).subscribe(result => this.postulantRefuser = result);
    this.postulantService.refuserPostulant(this.postulantRefuser).subscribe();
    this.route.navigateByUrl("listePostulant");
  }

  accepterPostulant(id:number){
    this.postulantService.getPostulant(id).subscribe(result => this.postulantAccepter = result);
    this.postulantService.accepterPostulant(this.postulantAccepter).subscribe();
    this.date = new Date();
    this.enseigantPostPostulation = new Enseignant(100, this.date, this.postulantAccepter.nom, this.postulantAccepter.prenom, this.postulantAccepter.dateNaissance);
    this.enseignantService.ajoutEnseignant(this.enseigantPostPostulation).subscribe();
    this.route.navigateByUrl("listePostulant");
  }

}
