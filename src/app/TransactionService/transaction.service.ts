import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Transaction } from '../Entities/transaction';
import { Type_transaction } from '../Entities/Type_transaction';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class TransactionService {
    readonly API_URL = 'http://localhost:8083';
      constructor(private httpClient: HttpClient) { }
    
      getTransactions(){
        return this.httpClient.get(`${this.API_URL}/Transaction/all`)
      }
      addTransaction(transaction:any){
        return this.httpClient.post(`${this.API_URL}/Transaction/add`,transaction)
      }
      editTransaction(transaction:any){
        return this.httpClient.put(`${this.API_URL}/Transaction/update`,transaction)
      }
      deleteTransaction(id:any){
        return this.httpClient.delete(`${this.API_URL}/Transaction/delete/${id}`)
      }
      assignTransactionToInvestment(idTransaction: number, idInvestment: number): Observable<Transaction> {
        const url = `${this.API_URL}/Transaction/assigntrtoinv/${idTransaction}/${idInvestment}`;
        return this.httpClient.put<Transaction>(url, {});
      }
   
      assignTransactionToUser(id_transaction: number, id_user: number): Observable<void> {
        const url = `${this.API_URL}/Transaction/assignTrtoUser/${id_transaction}/${id_user}`;
        return this.httpClient.put<void>(url, {});
      }
    
      withdraw(userId: number, amount: number, receiverId: number, type: Type_transaction): Observable<Transaction> {
        const url = `${this.API_URL}/Transaction/withdraw/${userId}/${receiverId}/${amount}/${type}`;
        return this.httpClient.post<Transaction>(url, {});
      }
      getTransactionsByDate(date: Date): Observable<Transaction[]> {
        const url = `${this.API_URL}/Transaction/bydate/${date}`;
        return this.httpClient.get<Transaction[]>(url);
      }
    
      getTransactionsBySender(sender: number): Observable<Transaction[]> {
        const url = `${this.API_URL}/Transaction/bysender/${sender}`;
        return this.httpClient.get<Transaction[]>(url);
      }
    
      getTransactionsByReceiver(receiver: number): Observable<Transaction[]> {
        const url = `${this.API_URL}/Transaction/byreceiver/${receiver}`;
        return this.httpClient.get<Transaction[]>(url);
      }
   
      
      getEmailSender(id_transaction: number): Observable<string> {
        const url = `${this.API_URL}/Transaction/emailsen/${id_transaction}`;
        return this.httpClient.get<string>(url);
      }
      getEmailReceiver(id: any): Observable<string> {
        const url = `http://localhost:8083/Transaction/emailrec/${id}`;
        return this.httpClient.get<string>(url);
      }
    }