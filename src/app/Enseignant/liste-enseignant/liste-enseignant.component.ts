import { Component, OnInit } from '@angular/core';
import { EnseignantServiceService } from '../service/enseignant-service.service';
import { Enseignant } from 'src/app/model/enseignant.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-enseignant',
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.css']
})
export class ListeEnseignantComponent implements OnInit{





  constructor(private ar:ActivatedRoute, private es:EnseignantServiceService, private route:Router){
    this.idUser = ar.snapshot.params["idUser"];
  }
    idUser=null;
    listeEnseignant!:Observable<Enseignant[]>;


  
  ngOnInit(): void {
    
    this.listeEnseignant = this.es.findAllEnseignant();

    console.log(this.listeEnseignant);
    
  }


  // supprimer 
  supprimerEnseignant(id:number){
    this.es.supprimerEnseignant(id).subscribe();
    this.route.navigateByUrl("listeEnseignant")
  }

  //modifier
  getEnseignantByEnseignant(id:number){
    this.route.navigateByUrl("updateEnseignant/" + id);
  }

contacter(id:number){
  this.route.navigateByUrl("etudiant/"+ this.idUser + "/listeEnseignant/contacter/" + id);
  
}

}
