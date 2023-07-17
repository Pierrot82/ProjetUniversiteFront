import { QcmQuestion } from "./qcm-question.model";

export class QcmProposition {



    choixN!:number;
    proposition!:string;
    qcmQuestion!:QcmQuestion;

    constructor(choixN:number, proposition:string, qcmQuestion:QcmQuestion){

        this.choixN=choixN;
        this.proposition=proposition;
        this.qcmQuestion=qcmQuestion;
    }

}
