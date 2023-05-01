import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Pret } from '../Entities/pret';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PretService {
  readonly API_URL = 'http://localhost:8083';
  prets:any;
  constructor(private httpClient: HttpClient) { }
  
 /* getAllPrets(): Observable<Pret[]> {
    return this.httpClient.get<Pret[]>(`${this.API_URL}/all`).pipe(
      map((prets: any[]) => {
        return prets.map((pretData) => {
          const pret = new Pret(pretData);
          this.getUserEmail(pret.id_pret).subscribe(email => pret.email_user = email);
          return pret;
        });
      })
    );
  } 
  getPret(): Observable<Object> {
    return this.httpClient.get<Pret[]>(`${this.API_URL}/all`).pipe(
      switchMap((prets: Pret[]) => {
        const emailRequests = prets.map((pret: Pret) =>
          this.httpClient.get<string>(`${this.API_URL}/getemail/${pret.id_pret}`)
        );
        return forkJoin(emailRequests).pipe(
          map((emails: string[]) => {
            prets.forEach((pret: Pret, index: number) => {
              pret.email_user = emails[index];
            });
            return prets;
          })
        );
      })
    );
  }*/
   getPret(){
    
    return this.httpClient.get(`${this.API_URL}/api/pret/all`)
  }
/*  getPretU(){
    this.httpClient.get<Pret[]>(`${this.API_URL}/all`).subscribe(prets => {
      prets.forEach(pret => {
        this.httpClient.get<string>(`${this.API_URL}/getemail/${pret.id_pret}`).subscribe(email => {
          pret.email_user = email;
        });
      });
      this.prets = prets;
    });
   } */

    getUserEmail(e: any) {
      return this.httpClient.get(`${this.API_URL}/api/getemail/${e}`);
    }
 
   
    
  }



