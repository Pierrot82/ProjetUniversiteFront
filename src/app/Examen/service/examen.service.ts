import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from 'src/app/model/examen.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) { }
  
    saveExamen(examen:Examen):Observable<Examen>{
      return this.http.post<Examen>("http://localhost:8080/saveExamen", examen)
    }
    
    deleteExamen(id:number):Observable<boolean>{
      return this.http.delete<boolean>("http://localhost:8080/deleteExamen/" + id)
    }
    
    listeExamen():Observable<Examen[]>{
      return this.http.get<Examen[]>("http://localhost:8080/listeExamen")
    }
    
    getExamenbyId(id:number):Observable<Examen>{
      return this.http.get<Examen>("http://localhost:8080/getExamen/"+ id)
    }
    
    modifierExamen(examen:Examen):Observable<boolean>{
      return this.http.put<boolean>("http://localhost:8080/modifierExamen", examen);
    }
}
