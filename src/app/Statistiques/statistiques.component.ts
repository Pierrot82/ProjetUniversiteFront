import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from './service/statistiques.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistiques } from '../model/statistiques.model';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  moyenne!:number;

  constructor(private statistiquesService: StatistiquesService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<number>("http://localhost:8080/moyenne_notes").subscribe(data => {
      this.moyenne=data;
    });
  }



}
