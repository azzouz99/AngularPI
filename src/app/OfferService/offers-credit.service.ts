import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OffersCreditService {
readonly API_URL = 'http://localhost:8083';
  constructor(private httpClient: HttpClient) { }

  getOffer(){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Offers_Credit/all`)
  }
  addOffer(offer_credit:any){
    return this.httpClient.post(`${this.API_URL}/SpringMVC/Offers_Credit/add`,offer_credit)
  }
  editOffer(offer:any){
    return this.httpClient.put(`${this.API_URL}/SpringMVC/Offers_Credit/update`,offer)
  }
  deleteOffer(id:any){
    return this.httpClient.delete(`${this.API_URL}/SpringMVC/Offers_Credit/delete/${id}`)
  }

}
