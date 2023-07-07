import { Component, OnInit } from '@angular/core';
import { CoursServiceService } from '../service/cours-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cours',
  templateUrl: './form-cours.component.html',
  styleUrls: ['./form-cours.component.css']
})

export class FormCoursComponent implements OnInit{

  constructor(private cs:CoursServiceService, private route:Router, private formBuilder:FormBuilder) {
  }  
  
  coursForm!:FormGroup;
  
  ngOnInit(): void {
    this.coursForm = this.formBuilder.group(
      {
        nom:[null],
      }
    )
  }

  saveCours(){
    this.cs.ajoutCours(this.coursForm.value).subscribe();
    this.route.navigateByUrl("listeCours");

}
}