import { Component, OnInit } from '@angular/core';
import { EnseignantServiceService } from '../service/enseignant-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Enseignant } from 'src/app/model/enseignant.model';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit{


  constructor(private es:EnseignantServiceService, private route:Router, private formBuilder:FormBuilder, private ar:ActivatedRoute){
    this.id= ar.snapshot.params["id"];
  }

  
  id!:number;
  enseignantForm?:FormGroup;

  ngOnInit(): void {
    
    this.es.getEnseignantbyId(this.id).subscribe( (data:Enseignant) => {
      this.enseignantForm = this.formBuilder.group(
        {

        id:[data.id],
        nom:[data.nom],
        prenom:[data.prenom],
        dateNaissance:[data.dateNaissance],
        dateEmbauche:[data.dateEmbauche]

        }
      )
    })


  }




  updateEnseignant(){

    console.log(this.enseignantForm?.value)
    console.log("fin oninit")



this.es.updateEnseignant(this.enseignantForm?.value).subscribe();


this.route.navigateByUrl("listeEnseignant")

  }

}
