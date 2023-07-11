export class Discussion {




idDiscussion:number;
question:string;
date:Date;


// on rajoute la liste de réponse?

constructor(idDiscussion:number, question:string, date:Date){
    
    
    this.idDiscussion=idDiscussion;
    this.date=date;
    this.question=question;
}

}
