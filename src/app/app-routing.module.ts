import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
import { ListeCoursComponent } from './Cours/liste-cours/liste-cours.component';
import { FormCoursComponent } from './Cours/form-cours/form-cours.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { FormEtudiantComponent } from './Etudiant/form-etudiant/form-etudiant.component';
import { ListeEtudiantComponent } from './Etudiant/liste-etudiant/liste-etudiant.component';

const routes: Routes = [

  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
    { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent },
  { path: 'ajoutEtudiant', component: FormEtudiantComponent },
    { path: 'getListeEtudiant', component: ListeEtudiantComponent },
  { path: 'listeCours', component: ListeCoursComponent},
  { path: 'ajouterCours', component: FormCoursComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
