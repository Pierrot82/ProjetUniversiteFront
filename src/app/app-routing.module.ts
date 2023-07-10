import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ListeEtudiantComponent } from './Etudiant/liste-etudiant/liste-etudiant.component';
import { FormEtudiantComponent } from './Etudiant/form-etudiant/form-etudiant.component';
=======
=======
import { ListeEtudiantComponent } from './Etudiant/liste-etudiant/liste-etudiant.component';
import { FormEtudiantComponent } from './Etudiant/form-etudiant/form-etudiant.component';
>>>>>>> 04b5d78df5e2c3baea1a07986d6f5d92fb10d849
import { ListeCoursComponent } from './Cours/liste-cours/liste-cours.component';
import { FormCoursComponent } from './Cours/form-cours/form-cours.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';

<<<<<<< HEAD
>>>>>>> 3265291ab476d1c42f97e39f81f68889533d8b94

const routes: Routes = [
  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
<<<<<<< HEAD

  { path: 'ajoutEtudiant', component: FormEtudiantComponent },
=======
=======
const routes: Routes = [
  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
  { path: 'ajoutEtudiant', component: FormEtudiantComponent },
>>>>>>> 04b5d78df5e2c3baea1a07986d6f5d92fb10d849
  { path: 'listeCours', component: ListeCoursComponent},
<<<<<<< HEAD
  { path: 'ajouterCours', component: FormCoursComponent }
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent },
>>>>>>> 3265291ab476d1c42f97e39f81f68889533d8b94
=======
  { path: 'ajouterCours', component: FormCoursComponent },
<<<<<<< HEAD
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent }
>>>>>>> 9103def4b21319409cdde8ea91c39f3f8e1f0269
 
=======
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent },
>>>>>>> 04b5d78df5e2c3baea1a07986d6f5d92fb10d849
  { path: 'getListeEtudiant', component: ListeEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
