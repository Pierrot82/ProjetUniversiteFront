import { copieCompositeKey } from "./copieCompositeKey.model";

export class Copie {

    idCopie:copieCompositeKey;
    note: number;

    constructor(idCopie:copieCompositeKey, note:number) {
        this.idCopie=idCopie;
        this.note=note;
    }
}