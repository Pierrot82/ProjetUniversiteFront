import { Matiere } from "./matiere.model";
import { Personne } from "./personne.model";

export class Postulant extends Personne {
    
    email!:string;
    cv!:string;
    fichiers!:string;
    statut!:string;
    matiere!:Matiere;

}
