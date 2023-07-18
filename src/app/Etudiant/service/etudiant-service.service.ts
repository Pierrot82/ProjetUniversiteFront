import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/model/etudiant.model';
import { Enseignant } from 'src/app/model/enseignant.model';


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
    alert(etudiant)
    return this.http.post<Etudiant>("http://localhost:8080/ajoutEtudiant", etudiant)
  }

  ajoutEtudiantAffectee(etudiant:Etudiant, listeIdEnseignant:number[]):Observable<Etudiant>{
    const body = {
      etudiant: etudiant,
      listeIdEnseignant: listeIdEnseignant
    };
    return this.http.post<Etudiant>("http://localhost:8080/ajoutEtudiantAffectee", body)
  }
  
  deleteEtudiant(id:number):Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/deleteEtudiant/" + id)
  }
  
  getListeEtudiant():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>("http://localhost:8080/getListeEtudiant")
  }


  getListeMoyEtudiant():Observable<number[]>{
    return this.http.get<number[]>("http://localhost:8080/getListeMoyEtudiant")
  }

  
  
  getEtudiantbyId(id:number):Observable<Etudiant>{
    return this.http.get<Etudiant>("http://localhost:8080/getEtudiant/"+ id)
  }
  
  updateEtudiant(etudiant:Etudiant):Observable<boolean>{
    return this.http.put<boolean>("http://localhost:8080/updateEtudiant", etudiant);
  }


  connexionEtudiant(login:string, mdp:string):Observable<number>{
    return this.http.get<number>("http://localhost:8080/loginEtudiant/" + login  +  "/" + mdp)
  }


}
