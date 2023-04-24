import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  readonly API_URL = 'http://localhost:8083';


  constructor(private httpClient: HttpClient) { }
  getRequest(){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Request/all`)
  }
  deleteRequest(id:any){
    return this.httpClient.delete(`${this.API_URL}/SpringMVC/Request/delete/${id}`)
  }

  retrieveAllMatchings(){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Request/AllMatching`)
  }


}
