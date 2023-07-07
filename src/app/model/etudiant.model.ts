import { Personne } from "./personne.model";

export class Etudiant extends Personne {

    dateInscription:Date;

constructor(id:number, dateInscription:Date, nom:string, prenom:string, dateNaissance:Date){

    super(id, nom, prenom, dateNaissance);

    this.dateInscription=dateInscription;
}
}
