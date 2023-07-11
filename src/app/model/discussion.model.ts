import { Etudiant } from "./etudiant.model";

export class Discussion {




idDiscussion:number;
question:string;
date:Date;

etudiant:Etudiant;


// on rajoute la liste de réponse?

constructor(idDiscussion:number, question:string, date:Date, etudiant:Etudiant){
    
    
    this.idDiscussion=idDiscussion;
    this.date=date;
    this.question=question;
    this.etudiant=etudiant;
}

}
