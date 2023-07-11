import { Discussion } from "./discussion.model";

export class Reponse {




    idReponse:number;
    reponse:string;
    date:Date;
    discussion:Discussion;
    
    
    // on rajoute la liste de réponse?
    
    constructor(idReponse:number, reponse:string, date:Date, discussion:Discussion){
        
       
        this.idReponse=idReponse;
        this.date=date;
        this.reponse=reponse;

        this.discussion = discussion;
    }





}
