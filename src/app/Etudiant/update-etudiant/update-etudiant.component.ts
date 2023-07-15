import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantServiceService } from '../service/etudiant-service.service';
import { Etudiant } from 'src/app/model/etudiant.model';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  
  id!: number;
  etudiantForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private etu: EtudiantServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.etu.getEtudiantbyId(this.id).subscribe((data: Etudiant) => {
      this.etudiantForm = this.formBuilder.group({
        id: [data.id],
        login: [data.login, Validators.required],
        nom: [data.nom, Validators.required],
        prenom: [data.prenom, Validators.required],
        dateNaissance: [data.dateNaissance, Validators.required],
        dateInscription: [data.dateInscription, Validators.required]
      });
    });
  }

  updateEtudiant() {
    this.etu.updateEtudiant(this.etudiantForm?.value).subscribe();
    this.route.navigateByUrl('getListeEtudiant');
    };
  }
