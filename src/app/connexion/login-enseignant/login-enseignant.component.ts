import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseignantServiceService } from 'src/app/Enseignant/service/enseignant-service.service';

@Component({
  selector: 'app-login-enseignant',
  templateUrl: './login-enseignant.component.html',
  styleUrls: ['./login-enseignant.component.css']
})
export class LoginEnseignantComponent implements OnInit{



  constructor(private ens:EnseignantServiceService, private route:Router, private formBuilder:FormBuilder) {}  
  
  connexionForm!:FormGroup;
  
  ngOnInit(): void {
    
    this.connexionForm = this.formBuilder.group(
      {
        login:[null],
        mdp:[null]
      }
    )
  }


  connexion() {
    this.ens.connexionEnseignant(this.connexionForm.value.login, this.connexionForm.value.mdp).subscribe(
      (id:number) => {

        if(id != 0 ){

          this.route.navigateByUrl("enseignant/" + id + "/getListeDiscussion1").then(() => {
            this.route.navigate(["enseignant/" + id + "/getListeDiscussion1"], { replaceUrl: true });
          });

        } else{
          alert("incorrect");
        }

      
    });
  }






}
