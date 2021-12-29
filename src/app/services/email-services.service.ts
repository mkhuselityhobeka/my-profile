import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServicesService {

  private baseurl = 'http://localhost:8080/my-prfile/send/email';

  constructor(private httpClient: HttpClient) { }

  //sending email from contact form
  sendMail(emailTemplateDTO : Object): Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`, emailTemplateDTO);
  }
}
