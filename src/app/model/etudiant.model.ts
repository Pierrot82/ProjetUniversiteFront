import { FormArray } from "@angular/forms";
import { Enseignant } from "./enseignant.model";
import { Personne } from "./personne.model";

export class Etudiant extends Personne {

    dateInscription:Date;
    login:string;
    mdp:string;
    listeEnseignant:Enseignant[];

constructor(mdp:string, login:string, id:number, dateInscription:Date, nom:string, prenom:string, dateNaissance:Date){

    super(id, nom, prenom, dateNaissance);

    this.dateInscription=dateInscription;
    this.login=login;
    this.mdp = mdp;
    this.listeEnseignant = [];
}
}
