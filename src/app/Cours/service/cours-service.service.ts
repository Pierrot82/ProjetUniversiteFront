import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from 'src/app/model/cours.model';

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService {

  constructor(private http:HttpClient) { }

  ajoutCours(cours:Cours):Observable<Cours>{
    return this.http.post<Cours>("http://localhost:8080/saveCours", cours)
  }
  
  supprimerCours(id:number):Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/deleteCours/" + id)
  }
  
  listeCours():Observable<Cours[]>{
    return this.http.get<Cours[]>("http://localhost:8080/listeCours")
  }

  getCourstbyId(id:number):Observable<Cours>{
    return this.http.get<Cours>("http://localhost:8080/getCours/"+ id)
  }
  
  updateCours(cours:Cours):Observable<boolean>{
   return this.http.put<boolean>("http://localhost:8080/modifierCours/", cours);
  }
}
