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
import { ListeQuestionByConnexionComponent } from './Discussion/ByConnexion/liste-question-by-connexion/liste-question-by-connexion.component';
import { CreerQuestionByConnexionComponent } from './Discussion/ByConnexion/creer-question-by-connexion/creer-question-by-connexion.component';
import { GetDiscussionByConnexionComponent } from './Discussion/ByConnexion/get-discussion-by-connexion/get-discussion-by-connexion.component';
import { RepondreByConnexionComponent } from './Discussion/ByConnexion/repondre-by-connexion/repondre-by-connexion.component';
import { LoginEtudiantComponent } from './connexion/login-etudiant/login-etudiant.component';
import { CopieComponent } from './Copie/copie.component';


const routes: Routes = [

  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  { path:"listePostulant", component:ListePostulantComponent},
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
  { path:"savePostulant", component:FormPostulantComponent},
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent },
  { path: 'ajoutEtudiant', component: FormEtudiantComponent },
  { path: 'updateEtudiant/:id', component: UpdateEtudiantComponent },
  { path: 'getListeEtudiant', component: ListeEtudiantComponent },
  { path: 'uploadImage', component: UploadComponent },
  { path: 'listeCours', component: ListeCoursComponent },
  { path: 'ajouterCours', component: FormCoursComponent },
  { path: 'statistiques', component: StatistiquesComponent },
  { path: 'qcm', component: QcmComponent },
  { path: 'listeExamen', component: ExamenComponent },
  { path: 'getListeCopie', component: CopieComponent },
  { path: ':classe/connexion', component: LoginEtudiantComponent},
  { path: ':classe/:idUser/getListeDiscussion1', component: ListeQuestionByConnexionComponent},
  { path: 'etudiant/:idUser/ajouterDiscussion', component: CreerQuestionByConnexionComponent},
  { path: ':classe/:idUser/getDiscussion/:idDiscussion', component: GetDiscussionByConnexionComponent },
  { path: ':classe/:idUser/getDiscussion/:idDiscussion/repondre', component: RepondreByConnexionComponent},
  { path: ':classe/:idUser/listeEnseignant', component: ListeEnseignantComponent },
  { path: 'etudiant/:idUser/ajouterDiscussion/to/:idTo', component: CreerQuestionByConnexionComponent},

  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
