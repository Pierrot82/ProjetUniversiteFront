import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostulantService } from '../service/postulant.service';
import { Postulant } from 'src/app/model/postulant.model';

@Component({
  selector: 'app-afficher-cv',
  templateUrl: './afficher-cv.component.html',
  styleUrls: ['./afficher-cv.component.css']
})
export class AfficherCVComponent implements OnInit {


  id!:number;
  postulant!:Postulant;

  constructor(private ar:ActivatedRoute, private postulantService:PostulantService, private route:Router){
    this.id = ar.snapshot.params["id"];
  }


  getPostulantById(id:number):Promise<Postulant>{

    return new Promise<Postulant>((resolve, reject) => {
      this.postulantService.getPostulant(id).subscribe(
        result => {
          this.postulant = result;
          resolve(this.postulant);
        }
      );
    });
  }

  async ngOnInit() {
    this.postulant = await this.getPostulantById(this.id);
  }

  redirect(){
    this.route.navigateByUrl("/listePostulant");
  }



}
