import { Matiere } from "./matiere.model";
import { Personne } from "./personne.model";

export class Postulant extends Personne {
    
    email!:string;
    cv!:string;
    fichiers!:string;
    fichierUn!:string;
    fichierDeux!:string;
    statut!:string;
    matiere!:Matiere;

}
