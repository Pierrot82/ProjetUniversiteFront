import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantServiceService } from '../service/etudiant-service.service';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';
import { Observable } from 'rxjs';
import { Enseignant } from 'src/app/model/enseignant.model';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  etudiants: any;
  constructor(
    private ens: EnseignantServiceService,
    private etu: EtudiantServiceService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  etudiantForm!: FormGroup;
  listeAllEnseignant!: Observable<Enseignant[]>;
  selectedEnseignants: number[] = [];

  ngOnInit(): void {
    this.listeAllEnseignant = this.ens.findAllEnseignant();
    this.etudiants = this.etu.getListeEtudiant();
    this.etudiantForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      login: [null, Validators.required],
      dateNaissance: [null, Validators.required],
      dateInscription: [null, Validators.required],
      mdp: [null, Validators.required],
      selectedEnseignants: [null, Validators.required],
    });
  }

  ajoutEtudiant() {
    const listeP = this.etudiantForm.value.selectedEnseignants;
    this.etudiantForm.value.mdp = this.etudiantForm.value.dateNaissance.toLocaleString();
    this.etu.ajoutEtudiantAffectee(this.etudiantForm.value, listeP).subscribe(() => {
      this.route.navigateByUrl('getListeEtudiant').then(() => {
        this.route.navigate(['getListeEtudiant'], { replaceUrl: true });
      });
    });
  }
}
