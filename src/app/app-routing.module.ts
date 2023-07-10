import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
import { ListeEtudiantComponent } from './Etudiant/liste-etudiant/liste-etudiant.component';
import { FormEtudiantComponent } from './Etudiant/form-etudiant/form-etudiant.component';
import { ListeCoursComponent } from './Cours/liste-cours/liste-cours.component';
import { FormCoursComponent } from './Cours/form-cours/form-cours.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { ListeQuestionComponent } from './Discussion/liste-question/liste-question.component';
import { CreerQuestionComponent } from './Discussion/creer-question/creer-question.component';
import { GetDiscussionComponent } from './Discussion/get-discussion/get-discussion.component';
import { RepondreComponent } from './Discussion/repondre/repondre.component';

const routes: Routes = [
  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
  { path: 'ajoutEtudiant', component: FormEtudiantComponent },
  { path: 'listeCours', component: ListeCoursComponent},
  { path: 'ajouterCours', component: FormCoursComponent },
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent },
  { path: 'getListeEtudiant', component: ListeEtudiantComponent },
  { path: 'getListeDiscussion', component: ListeQuestionComponent},
  { path: 'ajouterDiscussion', component: CreerQuestionComponent},

  { path: 'getDiscussion/:id', component: GetDiscussionComponent },
  { path: 'repondreDiscussion/:id', component: RepondreComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
