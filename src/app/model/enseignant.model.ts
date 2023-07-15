

import { Personne } from "./personne.model";

export class Enseignant extends Personne {

    dateEmbauche:Date;
    login:string;
    mdp:string
    email:string;

//    id:number;
//    nom:string;
//    prenom:string;
//    dateNaissance:Date;


constructor( id:number, dateEmbauche:Date, nom:string, prenom:string, dateNaissance:Date, login:string, mdp:string, email:string){
    super(id, nom, prenom, dateNaissance);

//    this.id=id;
this.email = email;
    this.dateEmbauche=dateEmbauche;
    this.login = login;
    this.mdp = mdp;
//    this.dateNaissance=dateNaissance;
//    this.nom=nom;
//    this.prenom=prenom
    }
}
