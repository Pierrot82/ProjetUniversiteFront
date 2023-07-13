import { Etudiant } from "./etudiant.model";
import { Examen } from "./examen.model";

export class copieCompositeKey {

examen: Examen;
etudiant: Etudiant;

    constructor(examen:Examen, etudiant:Etudiant) {
        this.examen=examen;
        this.etudiant=etudiant;
    } 
}