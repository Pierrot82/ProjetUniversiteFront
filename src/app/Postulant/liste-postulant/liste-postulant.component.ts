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


  listePostulantFixe!:Postulant[];
  postulantRefuser!:Postulant;
  postulantAccepter!:Postulant;
  enseigantPostPostulation!:Enseignant;
  date!:Date;


  listePostulant():Promise<Postulant[]> {
    return new Promise<Postulant[]>((resolve, reject) => {
      this.postulantService.findAllPostulant().subscribe(
        result => {
          this.listePostulantFixe = result;
          resolve(this.listePostulantFixe);
        }
      );
    });
  }
    async ngOnInit() {
    this.listePostulantFixe= await this.listePostulant();
  }

  deletePostulant(id:number){
    this.postulantService.deletePostulant(id).subscribe();
    this.route.navigateByUrl("listePostulant");
  }

  refuserPostulant(id:number):Promise<Postulant>{
    return new Promise<Postulant>((resolve, reject) => {
      this.postulantService.getPostulant(id).subscribe(
        result => {
          this.postulantRefuser = result;
          resolve(this.postulantRefuser);
        }
      );
    });
  }
  async refuserPostulantAwait(id:number){
    this.postulantRefuser = await this.refuserPostulant(id)
    this.postulantService.refuserPostulant(this.postulantRefuser).subscribe();
    this.route.navigateByUrl("listePostulant");
  }

  accepterPostulant(id:number):Promise<Postulant>{
    return new Promise<Postulant>((resolve, reject) => {
      this.postulantService.getPostulant(id).subscribe(
        result => {
          this.postulantAccepter = result;
          resolve(this.postulantAccepter);
        }
      );
    });
  }

 async accepterPostulantAwait(id:number){
  this.postulantAccepter = await this.accepterPostulant(id);
  this.postulantService.accepterPostulant(this.postulantAccepter).subscribe();
  this.date = new Date();
  this.enseigantPostPostulation = new Enseignant(0, this.date, this.postulantAccepter.nom, this.postulantAccepter.prenom, this.postulantAccepter.dateNaissance, this.postulantAccepter.email,this.postulantAccepter.dateNaissance.toLocaleString(),this.postulantAccepter.email);
  this.enseignantService.ajoutEnseignant(this.enseigantPostPostulation).subscribe();
  this.route.navigateByUrl("listePostulant");
 }

}
