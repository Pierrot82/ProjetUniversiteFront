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

import { CreerQuestionByConnexionComponent } from './Discussion/ByConnexion/creer-question-by-connexion/creer-question-by-connexion.component';
import { ListeQuestionByConnexionComponent } from './Discussion/ByConnexion/liste-question-by-connexion/liste-question-by-connexion.component';
import { GetDiscussionByConnexionComponent } from './Discussion/ByConnexion/get-discussion-by-connexion/get-discussion-by-connexion.component';
import { RepondreByConnexionComponent } from './Discussion/ByConnexion/repondre-by-connexion/repondre-by-connexion.component';


import { QcmComponent } from './qcm/qcm.component';
import { StatistiquesComponent } from './Statistiques/statistiques.component';
import { ExamenComponent } from './Examen/examen.component';


//import { NotesComponent } from './Notes/notes.component';
import { LoginEtudiantComponent } from './connexion/login-etudiant/login-etudiant.component';

import { CopieComponent } from './Copie/copie.component';
import { CreerExamenComponent } from './Examen/creerExamen/creer-examen/creer-examen.component';
import { CreerQcmComponent } from './Examen/creerExamen/creer-qcm/creer-qcm.component';
import { AfficherCVComponent } from './Postulant/afficher-cv/afficher-cv.component';



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

    CreerQuestionByConnexionComponent,
    ListeQuestionByConnexionComponent,
    GetDiscussionByConnexionComponent,
    RepondreByConnexionComponent,
    
    QcmComponent,
    StatistiquesComponent,
    ExamenComponent,
   // NotesComponent,
    LoginEtudiantComponent,

    CopieComponent,
      CreerExamenComponent,
      CreerQcmComponent,
      AfficherCVComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
