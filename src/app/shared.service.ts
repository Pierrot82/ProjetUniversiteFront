import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private classeShared: BehaviorSubject<string> = new BehaviorSubject<string>("etudiant");

  private idUserShared: BehaviorSubject<number> = new BehaviorSubject<number>(4);


  constructor() { }

  getclasseShared(): BehaviorSubject<string> {
    return this.classeShared;
  }

  setclasseShared(value: string): void {
    this.classeShared.next(value);
  }


  getidUserShared(): BehaviorSubject<number> {
    return this.idUserShared;
  }

  setidUserShared(value: number): void {
    this.idUserShared.next(value);
  }

  

}
