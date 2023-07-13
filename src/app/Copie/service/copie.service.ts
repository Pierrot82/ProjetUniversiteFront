import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Copie } from 'src/app/model/copie.model';

@Injectable({
  providedIn: 'root'
})
export class CopieService {

  constructor(private http:HttpClient) { }

  ajoutCopie(idEtudiant:number, idExamen:number, note:number):Observable<Copie>{
    console.log(idEtudiant);
    console.log(idExamen);
    console.log(note);
    return this.http.get<Copie>("http://localhost:8080/saveCopie/" + idEtudiant + "/" + idExamen + "/" + note);
    
  }
  
  deleteCopie(id:number):Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/deleteCopie/" + id)
  }
  
  getListeCopie():Observable<Copie[]>{
    return this.http.get<Copie[]>("http://localhost:8080/getListeCopie")
  }

  getCopietbyId(id:number):Observable<Copie>{
    return this.http.get<Copie>("http://localhost:8080/getCopie/"+ id)
  }
  
  updateCopie(copie:Copie):Observable<boolean>{
   return this.http.put<boolean>("http://localhost:8080/updateCopie/", copie);
  }
}
