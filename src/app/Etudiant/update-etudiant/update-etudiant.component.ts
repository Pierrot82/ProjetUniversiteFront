import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  updateEtudiant!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateEtudiant = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      dateInscription: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.updateEtudiant.valid) {
      // Récupérer les valeurs du formulaire
      const formData = this.updateEtudiant.value;
      // Effectuer les opérations de mise à jour de l'étudiant
      // ...
    }
  }
}


