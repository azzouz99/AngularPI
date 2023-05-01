import { Injectable } from '@angular/core';
import { Investment } from '../Entities/investment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private API_URL = 'http://localhost:8083/Investment'; // replace with your API URL

  constructor(private httpClient: HttpClient) { }

  addInvestissement(investment: Investment): Observable<Investment> {
    return this.httpClient.post<Investment>(`${this.API_URL}/add`, investment);
  }

  retrieveAllInvestissements(): Observable<Investment[]> {
    return this.httpClient.get<Investment[]>(`${this.API_URL}/all`);
  }

  retrieveInvestissement(numInvestissement: number): Observable<Investment> {
    return this.httpClient.get<Investment>(`${this.API_URL}/get/${numInvestissement}`);
  }

  removeInvestissement(numInvestissement: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_URL}/delete/${numInvestissement}`);
  }

  updateInvestissement(investment: Investment): Observable<Investment> {
    return this.httpClient.put<Investment>(`${this.API_URL}/update`, investment);
  }

  invest(userId: number, amount: number, project_id: number): Observable<void> {
    const params = {
      'amount': String(amount),
      'period': String(project_id)
    };
    return this.httpClient.post<void>(`${this.API_URL}/users/${userId}/invest`, params);
  }

  calculateTotalInvestmentIncome(investmentId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.API_URL}/invIncome/${investmentId}`);
  }

  calculateTotalInvestmentInterest(investmentId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.API_URL}/invInterest/${investmentId}`);
  }

  checkinvest(): Observable<void> {
    return this.httpClient.post<void>(`${this.API_URL}/check`, {});
  }

  calculateTotalInvestment(investmentId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.API_URL}/${investmentId}`);
  }

  checkInvestStatus(): Observable<void> {
    return this.httpClient.post<void>(`${this.API_URL}/checkst`, {});
  }

  acceptInv(id_investment: number): Observable<void> {
    return this.httpClient.put<void>(`${this.API_URL}/accept/${id_investment}`, {});
  }

  refuseInv(id_investment: number): Observable<void> {
    return this.httpClient.put<void>(`${this.API_URL}/refuse/${id_investment}`, {});
  }
  FindbyRequest(req: string){
    return this.httpClient.get(`${this.API_URL}/by-request/${req}`);
  }
}

