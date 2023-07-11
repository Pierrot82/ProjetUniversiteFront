

import { Personne } from "./personne.model";

export class Enseignant extends Personne {

    dateEmbauche:Date;

//    id:number;
//    nom:string;
//    prenom:string;
//    dateNaissance:Date;


constructor(id:number, dateEmbauche:Date, nom:string, prenom:string, dateNaissance:Date){
    super(id, nom, prenom, dateNaissance);

//    this.id=id;
    this.dateEmbauche=dateEmbauche;
//    this.dateNaissance=dateNaissance;
//    this.nom=nom;
//    this.prenom=prenom
    }
}
