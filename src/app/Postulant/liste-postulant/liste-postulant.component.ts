import { Component, OnInit } from '@angular/core';
import { PostulantService } from '../service/postulant.service';
import { Observable } from 'rxjs';
import { Postulant } from 'src/app/model/postulant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-postulant',
  templateUrl: './liste-postulant.component.html',
  styleUrls: ['./liste-postulant.component.css']
})
export class ListePostulantComponent implements OnInit {


  constructor(private postulantService:PostulantService, private route:Router){}

  listePostulant!:Observable<Postulant[]>;

  ngOnInit(): void {
    this.listePostulant = this.postulantService.findAllPostulant();
  }

  deletePostulant(id:number){
    this.postulantService.deletePostulant(id).subscribe();
    this.route.navigateByUrl("listePostulant");
  }

}
