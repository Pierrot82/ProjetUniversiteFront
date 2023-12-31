import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ExamenService } from '../Examen/service/examen.service';
import { Examen} from 'src/app/model/examen.model';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  constructor(private examen: ExamenService, private route: Router) {}
  listeExamen!: Observable<Examen[]>;

  ngOnInit(): void {
    this.listeExamen = this.examen.listeExamen();
  }

  deleteExamen(id: number) {
    try {
      this.examen.deleteExamen(id).subscribe();
      console.log()
      this.route.navigateByUrl('listeExamen');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  getExamenById(id:number){
    this.route.navigateByUrl("updateExamen/" + id);
  }

  qcm(id:number){
    this.route.navigateByUrl("qcm/" + id);
  }

  deposerExamen(id:number){
    this.route.navigateByUrl("qcm/" + id);
  }

}
