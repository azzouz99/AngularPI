import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private API_URL = "http://localhost:8083/SpringMVC/Event";
  constructor(private httpClient: HttpClient) { }

  getAllEvent(){
    return this.httpClient.get(`${this.API_URL}/all`)
  }
  addEvent(event : any) {
    return this.httpClient.post(`${this.API_URL}/add`, event)
  }
  updateEvent(event : any){
    return this.httpClient.put(`${this.API_URL}/update`,event)
  }
  deleteEvent(Id : number){
    return  this.httpClient.delete(`${this.API_URL}/delete/${Id}`)
  }
  getEvent(Id : number){
    return  this.httpClient.get(`${this.API_URL}/get/${Id}`)
  }
}
