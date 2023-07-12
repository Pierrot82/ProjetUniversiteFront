import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
import { EtudiantComponent } from './Etudiant/etudiant/etudiant.component';
import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';
import { ListeEtudiantComponent } from './Etudiant/liste-etudiant/liste-etudiant.component';
import { FormEtudiantComponent } from './Etudiant/form-etudiant/form-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListePostulantComponent } from './Postulant/liste-postulant/liste-postulant.component';
import { FormPostulantComponent } from './Postulant/form-postulant/form-postulant.component';
import { UpdatePostulantComponent } from './Postulant/update-postulant/update-postulant.component';
import { ListeCoursComponent } from './Cours/liste-cours/liste-cours.component';
import { FormCoursComponent } from './Cours/form-cours/form-cours.component';
import { UpdateCoursComponent } from './Cours/update-cours/update-cours.component';
import { UploadComponent } from './SupportCours/upload/upload.component';
import { RouterModule } from '@angular/router';


import { ListeQuestionComponent } from './Discussion/liste-question/liste-question.component';
import { CreerQuestionComponent } from './Discussion/creer-question/creer-question.component';
import { RepondreComponent } from './Discussion/repondre/repondre.component';
import { GetDiscussionComponent } from './Discussion/get-discussion/get-discussion.component';

import { CreerQuestionByConnexionComponent } from './Discussion/ByConnexion/creer-question-by-connexion/creer-question-by-connexion.component';
import { ListeQuestionByConnexionComponent } from './Discussion/ByConnexion/liste-question-by-connexion/liste-question-by-connexion.component';
import { GetDiscussionByConnexionComponent } from './Discussion/ByConnexion/get-discussion-by-connexion/get-discussion-by-connexion.component';
import { RepondreByConnexionComponent } from './Discussion/ByConnexion/repondre-by-connexion/repondre-by-connexion.component';



@NgModule({
  declarations: [
    AppComponent,
    FormEnseignantComponent,
    UpdateEnseignantComponent,
    ListeEnseignantComponent,
    ListeCoursComponent,
    EtudiantComponent,
    UpdateEtudiantComponent,
    ListeEtudiantComponent,
    FormEtudiantComponent,
    ListePostulantComponent,
    FormPostulantComponent,
    UpdatePostulantComponent,
    FormCoursComponent,
    UpdateCoursComponent,

    UpdateEtudiantComponent,
    ListeEtudiantComponent,
    FormEtudiantComponent,
    UploadComponent,

    ListeQuestionComponent,
    CreerQuestionComponent,
    RepondreComponent,
    GetDiscussionComponent,

    CreerQuestionByConnexionComponent,
    ListeQuestionByConnexionComponent,
    GetDiscussionByConnexionComponent,
    RepondreByConnexionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
