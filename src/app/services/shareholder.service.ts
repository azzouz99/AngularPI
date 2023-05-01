import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareholderService {
  private API_URL = "http://localhost:8083/SpringMVC/ShareHolder";

  constructor(private httpClient: HttpClient) { }

  getAllShareholder(){
    return this.httpClient.get(`${this.API_URL}/all`)
  }
  addShareholder(ShareHolder : any) {
    return this.httpClient.post(`${this.API_URL}/add`, ShareHolder)
  }
  updateShareholder(ShareHolder : any){
    return this.httpClient.put(`${this.API_URL}/update`,ShareHolder)
  }
  deleteShareholder(Id : number){
    return  this.httpClient.delete(`${this.API_URL}/delete/${Id}`)
  }
  getShareholder(Id : number){
    return  this.httpClient.get(`${this.API_URL}/get/${Id}`)
  }
  assignShareholderToEvent(ShareHolder : any,IdEvent: any,){
    return this.httpClient.put(`${this.API_URL}/assignshrtoevent/${IdEvent}`,ShareHolder)
  }
  statShareholde(){
    return  this.httpClient.get(`${this.API_URL}/partnerStat`)
  }
  calculrendement(id:any,taux:any){
    return  this.httpClient.get(`${this.API_URL}/calculrendement/${id}/${taux}`)
  }
  calculateROI(idP:any,IdE:any){
    return  this.httpClient.get(`${this.API_URL}/calculateROI/${idP}/${IdE}`)
  }
}
