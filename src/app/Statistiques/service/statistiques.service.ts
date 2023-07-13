import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistiques } from 'src/app/model/statistiques.model';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  constructor(private http:HttpClient) { }

}
