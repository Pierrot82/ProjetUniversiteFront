import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/model/etudiant.model';


@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  constructor(private http:HttpClient) { }

  ajoutEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>("http://localhost:8080/saveEtudiant", etudiant)
  }
  
  
  
  supprimerEtudiant(id:number):Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/deleteEtudiant/" + id)
  }
  
  
  findAllEtudiant():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>("http://localhost:8080/listeEtudiant")
  }
  
  
  getEtudiantbyId(id:number):Observable<Etudiant>{
    return this.http.get<Etudiant>("http://localhost:8080/getEtudiant/"+ id)
  }
  
  updateEtudiant(etudiant:Etudiant):Observable<boolean>{
    return this.http.put<boolean>("http://localhost:8080/modifierEtudiant/", etudiant);
  }

}