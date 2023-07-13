import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from './service/statistiques.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  moyenne!:number;
  notelaplusbasse!:number;
  notelaplushaute!:number;
  nombreetu!:number;
  nombrenseignants!:number;
  nombrepostulants!:number;
  jeanmich!:number;
  totalmessages!:number;

  constructor(private statistiquesService: StatistiquesService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<number>("http://localhost:8080/moyenne_notes").subscribe(data => {
      this.moyenne=data;
    });
    this.http.get<number>("http://localhost:8080/notelaplusbasse").subscribe(data => {
      this.notelaplusbasse=data;
    });
    this.http.get<number>("http://localhost:8080/notelaplushaute").subscribe(data => {
      this.notelaplushaute=data;
    });
    this.http.get<number>("http://localhost:8080/nombreetu").subscribe(data => {
      this.nombreetu=data;
    });
    this.http.get<number>("http://localhost:8080/nombrenseignants").subscribe(data => {
      this.nombrenseignants=data;
    });
    this.http.get<number>("http://localhost:8080/nombrepostulants").subscribe(data => {
      this.nombrepostulants=data;
    });
    this.http.get<number>("http://localhost:8080/jeanmich").subscribe(data => {
      this.jeanmich=data;
    });
    this.http.get<number>("http://localhost:8080/totalmessages").subscribe(data => {
      this.totalmessages=data;
    });
  }
}
