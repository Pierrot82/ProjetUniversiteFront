import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface UploadResponse {
  message: string;
}
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{

  selectedFile!: File;


  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    const formData = new FormData();
    formData.append('imageFile', this.selectedFile);

    this.http.post<UploadResponse>('http://localhost:8080/upload', formData).subscribe(
      (response) => {
        console.log(response.message);
        
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );

    this.router.navigateByUrl("uploadImage");
  }
  }

