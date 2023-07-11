import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/model/etudiant.model';


@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
  nom: any;
  prenom: any;
  dateNaissance: any;
  dateInscription: any;

  constructor(private http:HttpClient) { }

  ajoutEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>("http://localhost:8080/ajoutEtudiant", etudiant)
  }
  
  deleteEtudiant(id:number):Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/deleteEtudiant/" + id)
  }
  
  getListeEtudiant():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>("http://localhost:8080/getListeEtudiant")
  }
  
  getEtudiantbyId(id:number):Observable<Etudiant>{
    return this.http.get<Etudiant>("http://localhost:8080/getEtudiant/"+ id)
  }
  
  updateEtudiant(etudiant:Etudiant):Observable<boolean>{
    console.log(etudiant)
    return this.http.put<boolean>("http://localhost:8080/updateEtudiant", etudiant);
  }

}
