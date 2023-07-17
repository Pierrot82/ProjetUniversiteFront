import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {


  classeShared!:string;
  idUserShared!:number;

  private subscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.getclasseShared().subscribe(value => {
      this.classeShared = value;
    });
    this.subscription = this.sharedService.getidUserShared().subscribe(value => {
      this.idUserShared = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }












isVisibleOnMobile() {
throw new Error('Method not implemented.');
}
  title = 'ProjetUniversiteFront';
}
