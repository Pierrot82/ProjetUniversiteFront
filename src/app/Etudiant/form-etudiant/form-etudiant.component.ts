import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantServiceService } from '../service/etudiant-service.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  etudiants: any;
  constructor(private etu:EtudiantServiceService, private route:Router, private formBuilder:FormBuilder) {}  
  
  etudiantForm!:FormGroup;
  
  ngOnInit(): void {
    this.etudiants = this.etu.getListeEtudiant();
    this.etudiantForm = this.formBuilder.group(
      {
        nom:[null],
        prenom:[null],
        login:[null],
        dateNaissance:[null],
        dateInscription:[null],
        mdp:[null],
      }
    )
  }
  ajoutEtudiant() {
    this.etudiantForm.value.mdp = this.etudiantForm.value.dateNaissance.toLocaleString();
    this.etu.ajoutEtudiant(this.etudiantForm.value).subscribe(() => {
      this.route.navigateByUrl("getListeEtudiant").then(() => {
        this.route.navigate(["getListeEtudiant"], { replaceUrl: true });
      });
    });
  }
}
