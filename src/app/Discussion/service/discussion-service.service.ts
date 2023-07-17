import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discussion } from 'src/app/model/discussion.model';
import { Reponse } from 'src/app/model/reponse.model';

@Injectable({
  providedIn: 'root'
})
export class DiscussionServiceService {

  constructor(private http:HttpClient) { }



  ajoutDiscussion(discussion:Discussion):Observable<Discussion>{
    return this.http.post<Discussion>("http://localhost:8080/saveDiscussion", discussion)
  }



  findAllDiscussion():Observable<Discussion[]>{
    return this.http.get<Discussion[]>("http://localhost:8080/listeDiscussion")
  }


  findAllDiscussionbyId1(id:number):Observable<Discussion[]>{
    return this.http.get<Discussion[]>("http://localhost:8080/listeDiscussionbyId1/" + id)
  }



  // faudrait gueté les réponse respective aussi ?
  getDiscussionbyId(id:number):Observable<Discussion>{
    
    return this.http.get<Discussion>("http://localhost:8080/getDiscussion/"+ id)
  
  }



  ajoutReponse(reponse:Reponse):Observable<Reponse>{
    return this.http.post<Reponse>("http://localhost:8080/saveReponse", reponse)
  }


  
  findAllReponse():Observable<Reponse[]>{
    return this.http.get<Reponse[]>("http://localhost:8080/listeReponse")
  }
  getReponsebyId(id:number):Observable<Reponse>{
    return this.http.get<Reponse>("http://localhost:8080/getReponse/"+ id)
  }


  getReponsesDiscussionbyId(id:number):Observable<Reponse[]>{
    return this.http.get<Reponse[]>("http://localhost:8080/getReponsesDiscussion/"+ id)
  }


  RepondreDiscussionID(reponse:Reponse, id:number):Observable<Reponse>{
    return this.http.post<Reponse>("http://localhost:8080/getReponse/repondre/"+ id, reponse)
  }




  supprimerDiscussion(id:number):Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/deleteDiscussion/" + id)
  }

}
