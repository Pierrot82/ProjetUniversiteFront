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

  savePostulant(postulant:Postulant):Observable<boolean>{
    return this.http.post<boolean>("http://localhost:8080/savePostulant", postulant);
   }

  deletePostulant(id:number):Observable<boolean>{
   return this.http.get<boolean>("http://localhost:8080/deletePostulant/" + id);
  }

  getPostulant(id:number):Observable<Postulant>{
    return this.http.get<Postulant>("http://localhost:8080/getPostulant/" + id);
  }

  refuserPostulant(postulant:Postulant):Observable<boolean>{
    return this.http.post<boolean>("http://localhost:8080/refuserPostulant", postulant);
  }

  accepterPostulant(postulant:Postulant):Observable<boolean>{
    return this.http.post<boolean>("http://localhost:8080/accepterPostulant", postulant);
  }
}
