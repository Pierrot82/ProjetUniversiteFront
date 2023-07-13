import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from 'src/app/model/enseignant.model';

@Injectable({
  providedIn: 'root'
})
export class EnseignantServiceService {

  constructor(private http:HttpClient) { }

  ajoutEnseignant(enseignant:Enseignant):Observable<Enseignant>{
    return this.http.post<Enseignant>("http://localhost:8080/saveEnseignant", enseignant)
  }
  


  
  
  supprimerEnseignant(id:number):Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/deleteEnseignant/" + id)
  }
  
  findAllEnseignant():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>("http://localhost:8080/listeEnseignant")
  }
  

  getEnseignantbyId(id:number):Observable<Enseignant>{
    return this.http.get<Enseignant>("http://localhost:8080/getEnseignant/"+ id)
  }
  
  getEnseignantbyEmail(email:string):Observable<Enseignant>{
    
    return this.http.get<Enseignant>("http://localhost:8080/getEnseignantbyEmail/"+ email)
  }


  updateEnseignant(enseignant:Enseignant):Observable<boolean>{

    return this.http.put<boolean>("http://localhost:8080/modifierEnseignant", enseignant);
  }

}
