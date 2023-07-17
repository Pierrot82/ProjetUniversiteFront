import { Matiere } from "./matiere.model";

export class Examen {

    idExamen:number;
    intitule:string;
    coef:number;
    date:Date;
    duree:number;
    matiere!:Matiere;

    constructor(idExamen:number,intitule:string,coef:number,date:Date,duree:number,) {

            this.idExamen = idExamen;
            this.intitule = intitule;
            this.coef = coef;
            this.date = date;
            this.duree = duree;
            
    }
}