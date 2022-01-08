import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ResumeServiceService {

  private url = "http://localhost:8080/mkhuseli/diplay-resume";
  constructor(private httpClient: HttpClient) { }

  //download resume
   displayResume(){
    return this.httpClient.get(this.url,{responseType: 'blob'}).subscribe(response =>{
      const blob = new Blob([response],{type : "application/pdf"})
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      console.log("success")
       },
      
    );
    
   }
}
