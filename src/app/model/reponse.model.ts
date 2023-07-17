import { Discussion } from "./discussion.model";
import { Enseignant } from "./enseignant.model";
import { Etudiant } from "./etudiant.model";

export class Reponse {




    idReponse:number;
    reponse:string;
    date:Date;
    dateTime:Date;
    discussion:Discussion;

        
    etudiant:Etudiant;

    enseignant:Enseignant;
        
    
    // on rajoute la liste de réponse?
    
    constructor(dateTime:Date, idReponse:number, reponse:string, date:Date, discussion:Discussion, etudiant:Etudiant, enseignant:Enseignant){
        
       
        this.idReponse=idReponse;
        this.date=date;
        this.dateTime=dateTime;
        this.reponse=reponse;

        this.discussion = discussion;
        this.etudiant = etudiant;
        this.enseignant = enseignant;

    }





}
