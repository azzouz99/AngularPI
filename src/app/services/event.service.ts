import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { EventParticipants } from '../Models/EventParticipants';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private API_URL = "http://localhost:8083/SpringMVC/Event";
  constructor(private httpClient: HttpClient) { }

  getAllEvent():Observable<Event>{
    return this.httpClient.get<Event>(`${this.API_URL}/all`);
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
  getTotalInvestment(Id :number){
    return  this.httpClient.get(`${this.API_URL}/${Id}/totalInvestment`)
  }
  getArchive(){
    return  this.httpClient.get(`${this.API_URL}/getArchive`)
  }
  reportevent(Id:number, jour:number){
    return  this.httpClient.get(`${this.API_URL}/events/${Id}/reported/${jour}`)
  }
  cancelEvent(Id : number){
    return  this.httpClient.get(`${this.API_URL}/events/${Id}/cancel`)
  }
  statEvent(){
    return  this.httpClient.get(`${this.API_URL}/eventinfoStat`)
  }
  affichageeventbyshareholder(name:any,prenom:any){
    return  this.httpClient.get(`${this.API_URL}/getEventByShareholder/${name}/${prenom}`)
  }
  ///events/{eventId}/like
  eventLiked(eventId: number):Observable<String>{
    return this.httpClient.get<String>(`${this.API_URL}/events/${eventId}/like`);
    //return  this.httpClient.patch(`${this.API_URL}/getEventByShareholder/${name}/${prenom}`)
  }

  eventDisliked(eventId: number):Observable<String>{
    return this.httpClient.get<String>(`${this.API_URL}/events/${eventId}/dislike`);
    //return  this.httpClient.patch(`${this.API_URL}/getEventByShareholder/${name}/${prenom}`)
  }

  participerEvent(eventId:number):Observable<String>{
    let participation = new EventParticipants();

    participation.setIdUser = 1;
    participation.setIdEvent = eventId;

    return this.httpClient.post<String>(`${this.API_URL}/eventparticipation/${eventId}`, participation)
  }
}
