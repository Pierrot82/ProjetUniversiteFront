import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';
import { EtudiantServiceService } from 'src/app/Etudiant/service/etudiant-service.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login-etudiant',
  templateUrl: './login-etudiant.component.html',
  styleUrls: ['./login-etudiant.component.css']
})
export class LoginEtudiantComponent implements OnInit {




  constructor(private sharedService: SharedService, private ens:EnseignantServiceService, private etu:EtudiantServiceService, private route:Router, private formBuilder:FormBuilder, private ar:ActivatedRoute) {
    this.classe= ar.snapshot.params["classe"]

  }  
  
  connexionForm!:FormGroup;
  classe!:null;
  
  ngOnInit(): void {





    
    this.connexionForm = this.formBuilder.group(
      {
        login:[null],
        mdp:[null]
      }
    )
  }


  connexion() {

    
    

    if(this.classe == "enseignant"){
      this.ens.connexionEnseignant(this.connexionForm.value.login, this.connexionForm.value.mdp).subscribe(
        (id:number) => {
          if(id != 0 ){
            this.sharedService.setclasseShared("enseignant");
            this.sharedService.setidUserShared(id);

            this.route.navigateByUrl("enseignant/" + id + "/getListeDiscussion1").then(() => {
              this.route.navigate(["enseignant/" + id + "/getListeDiscussion1"], { replaceUrl: true });
            });
          } else{
            alert("incorrect");
          }
      })
    } else {
      this.etu.connexionEtudiant(this.connexionForm.value.login, this.connexionForm.value.mdp).subscribe(
        (id:number) => {
          if(id != 0 ){

            this.sharedService.setclasseShared("etudiant");
            this.sharedService.setidUserShared(id);

            this.route.navigateByUrl("etudiant/" + id + "/getListeDiscussion1").then(() => {
              this.route.navigate(["etudiant/" + id + "/getListeDiscussion1"], { replaceUrl: true });
            });
          } else{
            alert("incorrect");
          }
      });
    }
  }




}
