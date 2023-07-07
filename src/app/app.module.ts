import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
<<<<<<< HEAD
import { EtudiantComponent } from './Etudiant/etudiant/etudiant.component';
import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';
import { ListeEtudiantComponent } from './Etudiant/liste-etudiant/liste-etudiant.component';
import { FormEtudiantComponent } from './Etudiant/form-etudiant/form-etudiant.component';
=======
>>>>>>> 17347e16161b463dcbc0255cb87bfa9389bf60df
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormEnseignantComponent,
    UpdateEnseignantComponent,
    ListeEnseignantComponent,
    EtudiantComponent,
    UpdateEtudiantComponent,
    ListeEtudiantComponent,
    FormEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
