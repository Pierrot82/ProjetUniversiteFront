import { Component, OnInit } from '@angular/core';
import { CopieService } from '../Copie/service/copie.service';
import { Copie } from 'src/app/model/copie.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-copie',
  templateUrl: './copie.component.html',
  styleUrls: ['./copie.component.css']
})
export class CopieComponent implements OnInit{

  constructor(private c:CopieService, private route:Router){}
  getListeCopie!:Observable<Copie[]>;

  ngOnInit(): void {    
    this.getListeCopie = this.c.getListeCopie();
  }
}
