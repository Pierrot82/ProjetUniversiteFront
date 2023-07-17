import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from 'src/app/model/matiere.model';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor(private http:HttpClient) { }

  findAllMatiere():Observable<Matiere[]>{
    //permet de voir dans la console les données reçu
    //console.log(this.http.get<Postulant[]>("http://localhost:8080/listePostulant").subscribe(data => console.log(data)));
     return this.http.get<Matiere[]>("http://localhost:8080/listeMatiere"); 
    }

    getMatiere(id:number):Observable<Matiere>{
      return this.http.get<Matiere>("http://localhost:8080/getMatiere/" + id);
    }

}
