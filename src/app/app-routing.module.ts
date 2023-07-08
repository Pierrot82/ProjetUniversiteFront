import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
import { ListePostulantComponent } from './Postulant/liste-postulant/liste-postulant.component';

const routes: Routes = [
  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  {path:"listePostulant", component:ListePostulantComponent},
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
