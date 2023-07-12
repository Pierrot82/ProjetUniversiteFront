import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from 'src/app/model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {

  constructor(private http:HttpClient) { }


  getPersonnebyId(id:number):Observable<Personne>{
    return this.http.get<Personne>("http://localhost:8080/getPersonne/"+ id)
  }
  

}
