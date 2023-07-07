import { Component, OnInit } from '@angular/core';
import { EnseignantServiceService } from '../service/enseignant-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent implements OnInit{

  constructor(private es:EnseignantServiceService, private route:Router, private formBuilder:FormBuilder) {}  
  
  enseignantForm!:FormGroup;
  
  ngOnInit(): void {
    this.enseignantForm = this.formBuilder.group(
      {
        nom:[null],
        prenom:[null],
        dateNaissance:[null],
        dateEmbauche:[null]
      }
    )
  }

  saveEnseignant(){
    this.es.ajoutEnseignant(this.enseignantForm.value).subscribe();
    this.route.navigateByUrl("listeEnseignant");
  }





}
