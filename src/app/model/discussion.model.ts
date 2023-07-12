import { Enseignant } from "./enseignant.model";
import { Etudiant } from "./etudiant.model";

export class Discussion {




idDiscussion:number;
question:string;
date:Date;

etudiant:Etudiant;
enseignant:Enseignant;


// on rajoute la liste de réponse?

constructor(idDiscussion:number, question:string, date:Date, etudiant:Etudiant, enseignant:Enseignant){
    
    
    this.idDiscussion=idDiscussion;
    this.date=date;
    this.question=question;
    this.etudiant=etudiant;
    this.enseignant=enseignant;
}

}
