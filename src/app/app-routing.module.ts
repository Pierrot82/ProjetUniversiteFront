import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnseignantComponent } from './Enseignant/form-enseignant/form-enseignant.component';
import { ListeEnseignantComponent } from './Enseignant/liste-enseignant/liste-enseignant.component';
import { ListeCoursComponent } from './Cours/liste-cours/liste-cours.component';
import { FormCoursComponent } from './Cours/form-cours/form-cours.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';


const routes: Routes = [
  { path: 'ajouterEnseignant', component: FormEnseignantComponent },
  { path: 'listeEnseignant', component: ListeEnseignantComponent },
  { path: 'listeCours', component: ListeCoursComponent},
  { path: 'ajouterCours', component: FormCoursComponent },
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
