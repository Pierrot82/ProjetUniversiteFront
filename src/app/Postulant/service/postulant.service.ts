import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulant } from 'src/app/model/postulant.model';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  constructor(private http:HttpClient) { }

  findAllPostulant():Observable<Postulant[]>{
  //permet de voir dans la console les données reçu
  //console.log(this.http.get<Postulant[]>("http://localhost:8080/listePostulant").subscribe(data => console.log(data)));
   return this.http.get<Postulant[]>("http://localhost:8080/listePostulant");
   
  }
}
