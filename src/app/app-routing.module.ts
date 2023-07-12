import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
import { ListePostulantComponent } from './Postulant/liste-postulant/liste-postulant.component';
import { FormPostulantComponent } from './Postulant/form-postulant/form-postulant.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { ListeCoursComponent } from './Cours/liste-cours/liste-cours.component';
import { FormCoursComponent } from './Cours/form-cours/form-cours.component';
import { UploadComponent } from './SupportCours/upload/upload.component';
import { FormEtudiantComponent } from './Etudiant/form-etudiant/form-etudiant.component';
import { ListeEtudiantComponent } from './Etudiant/liste-etudiant/liste-etudiant.component';
import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';
import { QcmComponent } from './qcm/qcm.component';
import { StatistiquesComponent } from './Statistiques/statistiques.component';
import { ExamenComponent } from './Examen/examen.component';
import { NotesComponent } from './Notes/notes.component';
import { ListeQuestionComponent } from './Discussion/liste-question/liste-question.component';
import { CreerQuestionComponent } from './Discussion/creer-question/creer-question.component';
import { GetDiscussionComponent } from './Discussion/get-discussion/get-discussion.component';
import { RepondreComponent } from './Discussion/repondre/repondre.component';

import { ListeQuestionByConnexionComponent } from './Discussion/ByConnexion/liste-question-by-connexion/liste-question-by-connexion.component';
import { CreerQuestionByConnexionComponent } from './Discussion/ByConnexion/creer-question-by-connexion/creer-question-by-connexion.component';
import { GetDiscussionByConnexionComponent } from './Discussion/ByConnexion/get-discussion-by-connexion/get-discussion-by-connexion.component';
import { RepondreByConnexionComponent } from './Discussion/ByConnexion/repondre-by-connexion/repondre-by-connexion.component';


const routes: Routes = [
  
  { path: 'statistiques', component: StatistiquesComponent},
  { path: 'qcm', component: QcmComponent },
  { path: 'listeExamen', component: ExamenComponent },
  { path: 'notes', component: NotesComponent },





  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  {path:"listePostulant", component:ListePostulantComponent},
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
  {path:"savePostulant", component:FormPostulantComponent},
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent },
  { path: 'ajoutEtudiant', component: FormEtudiantComponent },
  { path: 'updateEtudiant/:id', component: UpdateEtudiantComponent },
  { path: 'getListeEtudiant', component: ListeEtudiantComponent },
  { path: 'uploadImage', component: UploadComponent },
  { path: 'listeCours', component: ListeCoursComponent },
  { path: 'ajouterCours', component: FormCoursComponent },


  { path: 'getListeDiscussion', component: ListeQuestionComponent},
  { path: 'ajouterDiscussion', component: CreerQuestionComponent},
  { path: 'getDiscussion/:id', component: GetDiscussionComponent },
  { path: 'repondreDiscussion/:id', component: RepondreComponent },

  { path: 'etudiant/:idUser/getListeDiscussion1', component: ListeQuestionByConnexionComponent},
  { path: 'enseignant/:idUser/getListeDiscussion1', component: ListeQuestionByConnexionComponent},
  
  { path: 'etudiant/:idUser/ajouterDiscussion', component: CreerQuestionByConnexionComponent},
  { path: 'etudiant/:idUser/ajouterDiscussion/to/:idTo', component: CreerQuestionByConnexionComponent},
  { path: 'etudiant/:idUser/getDiscussion/:idDiscussion', component: GetDiscussionByConnexionComponent},
  { path: 'enseignant/:idUser/getDiscussion/:idDiscussion', component: GetDiscussionByConnexionComponent},

  { path: 'etudiant/:idUser/getDiscussion/:idDiscussion/repondre', component: RepondreByConnexionComponent},
  { path: 'enseignant/:idUser/getDiscussion/:idDiscussion/repondre', component: RepondreByConnexionComponent},
    //  { path: 'getDiscussion/:id', component: GetDiscussionComponent,
  //  children:[    { path: 'repondreDiscussion', component: RepondreComponent }]},

  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
