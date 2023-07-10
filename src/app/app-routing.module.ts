import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
<<<<<<< HEAD
import { ListeEtudiantComponent } from './Etudiant/liste-etudiant/liste-etudiant.component';
import { FormEtudiantComponent } from './Etudiant/form-etudiant/form-etudiant.component';
=======
import { ListeCoursComponent } from './Cours/liste-cours/liste-cours.component';
import { FormCoursComponent } from './Cours/form-cours/form-cours.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';

>>>>>>> 3265291ab476d1c42f97e39f81f68889533d8b94

const routes: Routes = [
  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
<<<<<<< HEAD

  { path: 'ajoutEtudiant', component: FormEtudiantComponent },
=======
  { path: 'listeCours', component: ListeCoursComponent},
  { path: 'ajouterCours', component: FormCoursComponent }
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent },
>>>>>>> 3265291ab476d1c42f97e39f81f68889533d8b94
 
  { path: 'getListeEtudiant', component: ListeEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
