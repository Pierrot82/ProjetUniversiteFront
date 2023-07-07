import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormProfesseurComponent } from './Professeur/form-professeur/form-professeur.component';
import { UpdateProfesseurComponent } from './Professeur/update-professeur/update-professeur.component';
import { ListeProfesseurComponent } from './Professeur/liste-professeur/liste-professeur.component';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProfesseurComponent,
    UpdateProfesseurComponent,
    ListeProfesseurComponent,
    FormEnseignantComponent,
    UpdateEnseignantComponent,
    ListeEnseignantComponent
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
